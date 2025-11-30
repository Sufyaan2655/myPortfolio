const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'src', 'app', 'api');
const tempDir = path.join(__dirname, '..', '.temp-api');

// Move API routes to temp directory for static export
if (fs.existsSync(apiDir)) {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.renameSync(apiDir, tempDir);
  console.log('Moved API routes to temp directory for static export');
  
  // Restore API routes after build (cleanup)
  process.on('exit', () => {
    if (fs.existsSync(tempDir) && !fs.existsSync(apiDir)) {
      fs.renameSync(tempDir, apiDir);
      console.log('Restored API routes');
    }
  });
}

