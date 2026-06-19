"use client";

import { usePathname } from "next/navigation";
import Navbar from './Navbar';   // relative to LayoutWrapper.js
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Pages where navbar & footer should NOT be shown
  const noLayoutPages = ["/User_profile", "/login", "/register"];
  const hideLayout = noLayoutPages.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}