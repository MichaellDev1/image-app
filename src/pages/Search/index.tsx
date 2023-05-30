import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createClient } from 'pexels'
import ListPhotos from '../../components/ListPhotos'

export default function Search() {
    const [photos, setPhotos] = useState([])
    const [isLoading, setLoading] = useState(false)
    const { keyword } = useParams()
    const client = useMemo(() => createClient(import.meta.env.VITE_KEY_API), [])

    useEffect(() => {
        setLoading(true)
        client.photos.search({ query: keyword, per_page: 30 }).then(photos => {
            setPhotos(photos.photos)
            setLoading(false)
        })
    }, [keyword])

    return <div>
        {isLoading 
          ? <h3>Cargando...</h3> 
          : photos.length > 0 
            ? <ListPhotos photos={photos} /> 
            : <h3>Sin resultados...</h3>}
    </div>
}
