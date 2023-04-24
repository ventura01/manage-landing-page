import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400", "500", "700"],
});

export const metadata = {
  title: "Manage",
  description: "Manage next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={be_vietnam_pro.className}>{children}</body>
    </html>
  );
}
