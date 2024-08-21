import { ClerkProvider } from "@clerk/nextjs";
import { Public_Sans } from "next/font/google";
import "./globals.css"; 

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export const metadata = {
  title: "Faa\"a , Your Only Way to Job success",
  description: "At Faa\"a, We always make our seekers find the best jobs and employers find the best candidates.",
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
    <ClerkProvider
      appearance={{
        signIn: {
          variables: { colorPrimary: "#2a68ff" },
        },
        signUp: {
          variables: { colorPrimary: "#2a68ff" },
        },
      }}
    >
      <html lang="en">
        <body className="body">
           
          {children} 

        </body>
      </html>
    </ClerkProvider>
  );
}
