import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import classes from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "first Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={classes.navbar}>
          <h1> {`let's try Next.js`} </h1>
          <nav className={classes.links}>
            <Link href={"/"}>Home</Link>
            <Link href={"/posts"}>Posts</Link>
            <Link href={"/about"}>About</Link>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
