import { useEffect, useMemo, useState } from "react"
import { createClient } from 'pexels';
import { useParams } from 'react-router-dom'

export default function SinglePhoto() {
  const { id } = useParams()
  const client = useMemo(() => createClient(import.meta.env.VITE_KEY_API), [])
  const [photo, setPhoto] = useState()

  useEffect(() => {
    client.photos.show({ id }).then(photo => setPhoto(photo));
  }, [id])

  return <div>
    {
      photo && <img src={photo.src.portrait
      } alt="" />
    }
  </div>
}
