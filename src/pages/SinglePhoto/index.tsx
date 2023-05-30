import { useEffect } from "react"
import { createClient } from 'pexels';
import { useParams } from 'react-router-dom'

export default function SinglePhoto() {
  const { id } = useParams()

  useEffect(() => {
    const client = createClient(import.meta.env.VITE_API_KEY);
    client.photos.show({ id: 2014422 }).then(photo => console.log(photo));
  }, [id])

  return (
    <div>SinglePhoto</div>
  )
}
