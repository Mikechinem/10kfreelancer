// ./app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "10X Your Productivity",
  description: "Portfolio and services by Michael Ehumadu",
};

// vercel web speed here >>>
     <SpeedInsights/>


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
