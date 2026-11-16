import type { ReactNode } from "react";
import { Metadata } from "next";  
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Qalbe Abbas",
    template: "%s | Qalbe Abbas"
  },
  description: "Learn We development",
  openGraph: {
    siteName: "General Testing Website",
    title: "Qalb Abbas",    
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Abbas Next.Js Course</title>
      </head>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
