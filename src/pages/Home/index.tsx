import React, { useEffect, useMemo, useState } from 'react'
import { createClient } from 'pexels'

export default function Home() {
  const [photo, setPhoto] = useState()
  const client = useMemo(() => createClient(import.meta.env.VITE_KEY_API), [])

  useEffect(() => {
    client.photos.search({ page: 321, per_page: 1, query: 'ocean' }).then(photo => setPhoto(photo.photos[0].src.original));
  }, [])

  return <div>
    <div className='w-full h-[500px] overflow-hidden relative'>
      <div className='w-[100%] h-[100%] bg-[#00000031] absolute top-0 left-0 z-[1]'>
      </div>
      <img src={photo} alt="" className='w-full h-full object-cover absolute' />

      <div className='w-full h-full text-white z-[3] bg-transparent top-0 left-0 relative items-center flex flex-col'>
        <div className='w-full h-[80px]'>
        </div>
        <div className='flex flex-col justify-self-center mt-[110px] max-w-[700px]'>
          <h1 className='text-3xl font-bold mb-3'>The best free stock photos, royalty free images & videos shared by creators.</h1>
          <input type="Seach" className='py-3 px-6 rounded-xl' placeholder='Space, Ocean, Univerce...' />
        </div>
      </div>
    </div>
  </div>
}
