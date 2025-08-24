import './global.css';
import './home.css';
import LayoutWrapper from './components/LayoutWrapper'; // relative path to components folder

export const metadata = {
  title: 'My App',
  description: 'Best Next.js app with SEO',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}