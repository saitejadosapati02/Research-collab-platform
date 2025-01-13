import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Research Sphere",
  description:
    "Research Sphere is a platform for researchers to share their work and collaborate with others.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={`font-sans ${geistSans.className}`} suppressHydrationWarning>
        <Toaster richColors={true} position="top-center" duration={2000} closeButton={true} />
        {children}
      </body>
    </html>
  );
}
