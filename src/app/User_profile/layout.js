import "./user.module.css";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* No Navbar and Footer here */}
      </body>
    </html>
  );
}