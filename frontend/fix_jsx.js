const fs = require('fs');
const path = require('path');

const pages = [
  'src/app/ipad-page/page.js',
  'src/app/mac-page/page.js',
  'src/app/watch-page/page.js',
  'src/app/airpods-page/page.js',
  'src/app/accessories-page/page.js'
];

pages.forEach(p => {
  const filePath = path.join(__dirname, p);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('<>')) {
      content = content.replace('return (', 'return (\n    <>');
      content = content.replace('</main>\n    );', '</main>\n    </>\n    );');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX in ${p}`);
  }
});
