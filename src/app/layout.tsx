import type { Metadata } from "next";
import "./globals.css";
import ReduxLayout from "@/redux/ReduxLayout";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Redux Toolkit Nextjs",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-200">
      <ReduxLayout>
        <body>
          <Header />
          {children}
        </body>
      </ReduxLayout>
    </html>
  );
}
