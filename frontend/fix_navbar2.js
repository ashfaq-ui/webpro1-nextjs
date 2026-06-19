const fs = require('fs');

const path = 'src/app/components/Navbar.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  `const btn = document.getElementById("toggle-btn");`,
  `const navbar = document.getElementById("navbar");\n    const btn = document.getElementById("toggle-btn");`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed undefined navbar in toggleForm.');
