const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier');

// Function to recursively get all HTML files
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// HTML minification options
const minifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
};

// Function to minify a single HTML file
function minifyHtmlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = minify(content, minifyOptions);
    fs.writeFileSync(filePath, minified);
    console.log(`✅ Minified: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error minifying ${filePath}:`, error);
  }
}

// Main function
function main() {
  console.log('🔍 Finding HTML files in .next directory...');
  
  const buildDir = path.join(__dirname, '..', '.next');
  if (!fs.existsSync(buildDir)) {
    console.error('❌ .next directory not found. Run `npm run build` first.');
    process.exit(1);
  }
  
  const htmlFiles = getHtmlFiles(buildDir);
  console.log(`🔎 Found ${htmlFiles.length} HTML files.`);
  
  console.log('🔧 Minifying HTML files...');
  for (const file of htmlFiles) {
    minifyHtmlFile(file);
  }
  
  console.log('✅ All HTML files have been minified!');
}

main(); 