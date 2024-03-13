import Image from 'next/image'

export function Cardbottom(props: {caminho:string, name: string, text: string}) {
    return (
        <a href='#' className='bg-white/5 flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image src={props.caminho} className='w-full' alt="Capa do álbum" width={104} height={104}/>
            <strong className='font-semibold flex'>{props.name}</strong>
            <span className='text-sm text-zinc-500'>{props.text}</span>
        </a>
  )
}