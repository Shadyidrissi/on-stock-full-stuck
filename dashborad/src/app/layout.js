import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navabr'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
