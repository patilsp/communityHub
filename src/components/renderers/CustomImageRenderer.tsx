'use client'

import Image from 'next/image'

function CustomImageRenderer({ data }: any) {
  const src = data.file.url

  return (
    <div className='relative w-full min-h-[15rem]'>
      <Image 
       alt='image' 
       className='object-contain rounded-sm' 
       width={500}
       height={300}
       sizes="(max-width: 640px) 100vw, 640px"
       src={src} />
    </div>
  )
}

export default CustomImageRenderer
