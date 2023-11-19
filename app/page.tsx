import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-col item-center justify-center w-full h-full'>
      <Link href={'./html-editor'}><h1 className='text-9xl text-fuchsia-700'>Basic Editor </h1>  </Link> 
      <Link href={'./html-editor-plus'}> <h1 className='text-9xl text-rose-500'>Advance Editor</h1> </Link> 
    </div>
   
    </>
  )
}
