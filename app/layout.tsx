import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Next Demo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-50">
          <div className="h-24">
          <Header />
          </div>
          <div className="h-24">
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}