import { Inter } from "next/font/google";
import Navbar from './components/navbar'
import Footer from './components/footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Avanzado",
  description: "Validacion de Next Avanzado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
          <Navbar />
          {children}
          <Footer />
        </main> 
      </body>
    </html>
  );
}
