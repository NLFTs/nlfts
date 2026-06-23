#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { promises as fsPromises } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// 所有被使用的图像
const usedImages = [
  '/team/siro.png',
  '/images/studio.png',
  '/location/indo.png',
  '/images/mas.png',
  '/nlfts.png',
  '/images/station.png',
  '/images/arisu.png',
  '/images/kei.png',
  '/images/gunung-transpert.png',
  '/team/nlfts.png',
  '/company/Vuxi.png',
  '/location/bandung.jpg',
  '/location/monas.png',
  '/location/jogja.jpg',
  '/blog/nuxt.png',
  '/blog/stack.png',
  '/blog/ts.png'
];

// 未使用的图像
const unusedImages = [
  '/blog/kucing.jpeg',
  '/blog/vercel.webp',
  '/company/dakpng.png',
  '/company/fuso.png',
  '/company/mitshubisi.png',
  '/images/gunung.png',
  '/images/hape.png',
  '/images/jurusan/hero.png',
  '/images/jurusan/rpl.png',
  '/images/jurusan/tkr.png',
  '/images/jurusan/tsm.png',
  '/images/n.png',
  '/IMG-20260606-WA0220.jpg',
  '/team/elaina.jpg',
  '/team/Tsumugi.jpg'
];

async function convertToWebp(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    
    if (ext === '.webp') {
      console.log(`✓ 跳过 (已是 webp): ${inputPath}`);
      return true;
    }

    console.log(`转换: ${inputPath} -> ${outputPath}`);
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    // 删除原文件
    fs.unlinkSync(inputPath);
    console.log(`✓ 已删除原文件: ${inputPath}`);
    
    return true;
  } catch (error) {
    console.error(`✗ 转换失败 ${inputPath}: ${error.message}`);
    return false;
  }
}

async function deleteUnusedImages() {
  console.log('\n═══════════════════════════════════');
  console.log('删除未使用的图像...');
  console.log('═══════════════════════════════════\n');

  for (const imgPath of unusedImages) {
    const fullPath = path.join(publicDir, imgPath.slice(1)); // 移除开头的 /
    
    if (fs.existsSync(fullPath)) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`✓ 已删除: ${imgPath}`);
      } catch (error) {
        console.error(`✗ 删除失败 ${imgPath}: ${error.message}`);
      }
    } else {
      console.log(`⊘ 不存在: ${imgPath}`);
    }
  }
}

async function convertUsedImages() {
  console.log('\n═══════════════════════════════════');
  console.log('转换使用的图像为 webp...');
  console.log('═══════════════════════════════════\n');

  for (const imgPath of usedImages) {
    const inputPath = path.join(publicDir, imgPath.slice(1)); // 移除开头的 /
    const outputPath = inputPath.replace(/\.[^.]+$/, '.webp'); // 替换扩展名
    
    if (fs.existsSync(inputPath)) {
      await convertToWebp(inputPath, outputPath);
    } else {
      console.log(`⊘ 不存在: ${imgPath}`);
    }
  }
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.nuxt')) {
        walkDir(filePath, callback);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.vue', '.ts', '.js', '.md', '.yml', '.yaml'].includes(ext)) {
        callback(filePath);
      }
    }
  });
}

async function updateReferences() {
  console.log('\n═══════════════════════════════════');
  console.log('更新代码中的图像引用...');
  console.log('═══════════════════════════════════\n');

  const patterns = [
    { pattern: /\/blog\/(.*?)\.(png|jpg|jpeg|gif)/gi, replacement: '/blog/$1.webp' },
    { pattern: /\/company\/(.*?)\.(png|jpg|jpeg|gif)/gi, replacement: '/company/$1.webp' },
    { pattern: /\/images\/(.*?)\.(png|jpg|jpeg|gif)/gi, replacement: '/images/$1.webp' },
    { pattern: /\/location\/(.*?)\.(png|jpg|jpeg|gif)/gi, replacement: '/location/$1.webp' },
    { pattern: /\/team\/(.*?)\.(png|jpg|jpeg|gif)/gi, replacement: '/team/$1.webp' },
    { pattern: /\/nlfts\.(png|jpg|jpeg|gif)/gi, replacement: '/nlfts.webp' },
    { pattern: /\/NLFTs\.(png|jpg|jpeg|gif)/gi, replacement: '/NLFTs.webp' }
  ];

  walkDir(projectRoot, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    for (const { pattern, replacement } of patterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        changed = true;
        content = newContent;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ 已更新: ${path.relative(projectRoot, filePath)}`);
    }
  });
}

async function main() {
  console.log('\n🖼️  图像优化脚本启动\n');
  
  try {
    // 第一步：删除未使用的图像
    await deleteUnusedImages();
    
    // 第二步：转换使用的图像为 webp
    await convertUsedImages();
    
    // 第三步：更新所有引用
    await updateReferences();
    
    console.log('\n═══════════════════════════════════');
    console.log('✓ 完成！所有图像已优化为 webp 格式');
    console.log('═══════════════════════════════════\n');
  } catch (error) {
    console.error('✗ 错误:', error);
    process.exit(1);
  }
}

main();
