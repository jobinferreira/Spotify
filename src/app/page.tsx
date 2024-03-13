import {Home as HomeIcon, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Card } from './components/Card'
import { Cardbottom } from './components/Card-bottom'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        <Sidebar/>

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='w-6 h-6 rounded-full bg-black/20'><ChevronLeft /></button>
            <button className='w-6 h-6 rounded-full bg-black/20'><ChevronRight /></button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4'>
            <Card caminho={"/days.jpg"} name={"Wasting Light"}/>

            <Card caminho={"/wasting-light.jpg"} name={"Wasting Light"}/>

            <Card caminho={"/mer-de-noms.jfif"} name={"Wasting Light"}/>

            <Card caminho={"/audioslave.jpg"} name={"Wasting Light"}/>

            <Card caminho={"/cbjr.jfif"} name={"Wasting Light"}/>

            <Card caminho={"/toxicity.jpg"} name={"Wasting Light"}/>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Made for Job Ferreira</h1>

          <div className='grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 gap-4 mt-4'>
            <Cardbottom caminho={"/godsmack.jfif"} name={"Daily Mix"} text={"Wallows, COIN, girl in red and more"}/>

            <Cardbottom caminho={"/ratm.jpg"} name={"Daily Mix"} text={"Wallows, COIN, girl in red and more"}/>

            <Cardbottom caminho={"/good-charlotte.jfif"} name={"Daily Mix"} text={"Wallows, COIN, girl in red and more"}/>

            <Cardbottom caminho={"/avenged.jpg"} name={"Daily Mix"} text={"Wallows, COIN, girl in red and more"}/>
          </div>
    
        </main>
      </div>
      
      <Footer />

    </div>
  )
}
