import  Header  from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Maria's portifolio",
  description: "Maria's portifolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} 
      bg-blue-950 text-gray-950 relative h-[5000px]
      pt-28 sm:pt-36`}>
        <div className='bg-[#41058f] absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#3f0191] absolute top-[-1rem] -z-10 right-[35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2x1:left-[-5rem]'></div>
        {children}
        <Header />
      </body>
    </html>
  )
}
