import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "IEEE Communications Society Chapter",
  description: "Official Website for IEEE ComSoc Student Branch Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000d1a] text-slate-100 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}