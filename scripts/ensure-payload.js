import { promises as fs } from 'fs';
import { join } from 'path';

const root = process.cwd();
const payloadBase = join(root, '.nuxt', 'cache', 'nuxt', 'payload');

async function ensure() {
  try {
    // create base path if missing
    await fs.mkdir(payloadBase, { recursive: true });

    const blogPath = join(payloadBase, 'blog');
    try {
      const stat = await fs.stat(blogPath);
      if (stat.isFile()) {
        // move file to blog.json backup and create directory
        const backup = blogPath + '.json';
        await fs.rename(blogPath, backup);
        await fs.mkdir(blogPath, { recursive: true });
        console.log(`Moved file ${blogPath} to ${backup} and created directory.`);
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        // blogPath doesn't exist; create directory
        await fs.mkdir(blogPath, { recursive: true });
        console.log(`Created directory ${blogPath}`);
      } else {
        throw e;
      }
    }

    console.log('Payload directory structure ensured.');
  } catch (err) {
    console.error('Failed to ensure payload dirs:', err);
    process.exitCode = 1;
  }
}

ensure();
