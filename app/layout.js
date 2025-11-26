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
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
      (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '321246067225032');
      fbq('track', 'PageView');
    `,
  }}
/>

<noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=321246067225032&ev=PageView&noscript=1"
  />
</noscript>

      </head>

      <body className="bg-black text-white">
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}
