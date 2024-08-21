import { ClerkProvider } from "@clerk/nextjs";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export const metadata = {
  title: 'Faa"a , Your Only Way to Job success',
  description: " ",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <main>{children}</main>
      <Footer/>
    </main>
  );
}
