import "./globals.css";

export const metadata = {
  title: "10kFreelancer",
  description: "Portfolio for modern freelance projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
