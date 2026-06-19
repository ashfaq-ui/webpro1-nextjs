const fs = require('fs');

const path = 'src/app/components/Navbar.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  `  const getClassName = (path) => {
    return pathname === path ? (scrolled ? "actual-active" : "") : "";
  };`,
  `  const getClassName = (path) => {
    let classes = [];
    if (pathname === path) {
      classes.push("active");
      if (scrolled) classes.push("actual-active");
    }
    return classes.join(" ");
  };`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed active class.');
