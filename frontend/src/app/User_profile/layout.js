import "./user.module.css";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}{/* No Navbar and Footer here */}
        </main>
         
      </body>
    </html>
  );
}