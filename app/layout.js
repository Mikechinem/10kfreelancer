// ./app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "10X Your Productivity",
  description: "Portfolio and services by Michael Ehumadu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}
