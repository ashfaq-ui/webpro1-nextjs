const fs = require('fs');

const path = 'src/app/components/Navbar.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the top part
content = content.replace(
  `export default function Navbar() {
  const pathname = usePathname();
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const active = document.getElementById("active");
    const smallNav = document.getElementById("small-nav");
    const btn = document.getElementById("toggle-btn");
    const nav = document.getElementById("right-nav");
    const quickOptions = document.getElementById("quick-navigation");
    const quickArea = document.getElementById("quick-navigation-area");
    const mainArea = document.getElementById("main-categories-area");
    const mainOptions = document.getElementById("main-categories");

    // Handle scroll effect for navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.remove("transparent");
        navbar?.classList.add("solid");

        smallNav?.classList.remove("transparent");
        smallNav?.classList.add("solid");

        active?.classList.add("actual-active");
      } else {
        navbar?.classList.remove("solid");
        navbar?.classList.add("transparent");

        smallNav?.classList.remove("solid");
        smallNav?.classList.add("transparent");

        active?.classList.remove("actual-active");
      }
    };`,
  `export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const getClassName = (path) => {
    return pathname === path ? (scrolled ? "actual-active" : "") : "";
  };

  useEffect(() => {
    const btn = document.getElementById("toggle-btn");
    const nav = document.getElementById("right-nav");
    const quickOptions = document.getElementById("quick-navigation");
    const quickArea = document.getElementById("quick-navigation-area");
    const mainArea = document.getElementById("main-categories-area");
    const mainOptions = document.getElementById("main-categories");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };`
);

// Replace the nav class
content = content.replace(
  `<nav className="navbar transparent" id="navbar">`,
  `<nav className={\`navbar \${scrolled ? "solid" : "transparent"}\`} id="navbar">`
);

// Replace small nav class
content = content.replace(
  `<div className="small-nav transparent" id="small-nav">`,
  `<div className={\`small-nav \${scrolled ? "solid" : "transparent"}\`} id="small-nav">`
);

// Replace the ul block
const oldUl = `        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""} id={pathname === "/" ? "active" : undefined}>Home</Link>
          </li>
          <li>
            <Link href="/iphone-page" className={pathname === "/iphone-page" ? "active" : ""} id={pathname === "/iphone-page" ? "active" : undefined}>iPhone</Link>
          </li>
          <li>
            <Link href="/mac-page" className={pathname === "/mac-page" ? "active" : ""} id={pathname === "/mac-page" ? "active" : undefined}>Mac</Link>
          </li>
          <li>
            <Link href="/ipad-page" className={pathname === "/ipad-page" ? "active" : ""} id={pathname === "/ipad-page" ? "active" : undefined}>iPad</Link>
          </li>
          <li>
            <Link href="/watch-page" className={pathname === "/watch-page" ? "active" : ""} id={pathname === "/watch-page" ? "active" : undefined}>Watch</Link>
          </li>
          <li>
            <Link href="/airpods-page" className={pathname === "/airpods-page" ? "active" : ""} id={pathname === "/airpods-page" ? "active" : undefined}>AirPods</Link>
          </li>
          <li>
            <Link href="/accessories-page" className={pathname === "/accessories-page" ? "active" : ""} id={pathname === "/accessories-page" ? "active" : undefined}>Accessories</Link>
          </li>
        </ul>`;

const newUl = `        <ul className="nav-links">
          <li>
            <Link href="/" className={getClassName("/")}>Home</Link>
          </li>
          <li>
            <Link href="/iphone-page" className={getClassName("/iphone-page")}>iPhone</Link>
          </li>
          <li>
            <Link href="/mac-page" className={getClassName("/mac-page")}>Mac</Link>
          </li>
          <li>
            <Link href="/ipad-page" className={getClassName("/ipad-page")}>iPad</Link>
          </li>
          <li>
            <Link href="/watch-page" className={getClassName("/watch-page")}>Watch</Link>
          </li>
          <li>
            <Link href="/airpods-page" className={getClassName("/airpods-page")}>AirPods</Link>
          </li>
          <li>
            <Link href="/accessories-page" className={getClassName("/accessories-page")}>Accessories</Link>
          </li>
        </ul>`;

content = content.replace(oldUl, newUl);

fs.writeFileSync(path, content, 'utf8');
console.log('Navbar refactored to use state for scrolling.');
