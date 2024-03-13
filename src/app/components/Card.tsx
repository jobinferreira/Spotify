import { Play } from "lucide-react";
import Image from 'next/image'

export function Card(props: {caminho: string, name: string}) {
    return (
        <a href="#" className='bg-white/5 group group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors min-w-32'>
            <Image src={props.caminho} alt="Capa do álbum" width={104} height={104}/>
            <strong>{props.name}</strong>
            <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
            </button>
        </a>  
  )
}