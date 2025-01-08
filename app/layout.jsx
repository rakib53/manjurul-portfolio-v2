import Navbar from "@components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Md Manjurul Islam | Senior Product Designer | UI/UX & Design Systems Expert ",
  description:
    "Experienced Product Designer with over 5 years of expertise in crafting intuitive user interfaces and developing scalable design systems. Proven ability to lead cross-functional teams, solve complex design challenges, and deliver user-centered solutions that align with business goals. Adept at translating user needs into innovative designs, with a focus on efficiency, creativity, and attention to detail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
