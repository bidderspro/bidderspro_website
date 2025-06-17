const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const terserConfig = require('../terser.config');

// Function to recursively get all JS files
function getJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getJsFiles(filePath, fileList);
    } else if (file.endsWith('.js') && !file.endsWith('.min.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to minify a single file
async function minifyFile(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code, terserConfig);
    
    if (result.code) {
      fs.writeFileSync(filePath, result.code);
      console.log(`✅ Minified: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error minifying ${filePath}:`, error);
  }
}

// Main function
async function main() {
  console.log('🔍 Finding JS files in .next directory...');
  
  const buildDir = path.join(__dirname, '..', '.next');
  if (!fs.existsSync(buildDir)) {
    console.error('❌ .next directory not found. Run `npm run build` first.');
    process.exit(1);
  }
  
  const jsFiles = getJsFiles(buildDir);
  console.log(`🔎 Found ${jsFiles.length} JS files.`);
  
  console.log('🔧 Minifying JS files...');
  for (const file of jsFiles) {
    await minifyFile(file);
  }
  
  console.log('✅ All JS files have been minified!');
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
}); 