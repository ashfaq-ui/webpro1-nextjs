import './global.css';
import './home.css';
import LayoutWrapper from './components/LayoutWrapper'; // relative path to components folder

export const metadata = {
  title: 'BlackOlives-IStore',
  description: 'Best Iphone sellers',
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