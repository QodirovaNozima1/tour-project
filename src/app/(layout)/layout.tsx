import React from 'react'
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout