import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import '@/styles/globals.css'
export default function App({ Component, pageProps }) 
{
  return (
    <>
    <ThemeProvider attribute="class">
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </ThemeProvider>
    </>
  )
}
