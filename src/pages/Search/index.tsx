import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createClient } from 'pexels'
import ListPhotos from '../../components/ListPhotos'

export default function Search() {
  const { keyword } = useParams()
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const [isShow, setShow] = useState(false)
  const client = useMemo(() => createClient(import.meta.env.VITE_KEY_API), [])

  const refElementVisibility: any = useRef()

  useEffect(() => {
    setPage(1)
    setLoading(true)
    client.photos.search({ query: keyword, per_page: 10, page: 1 }).then(photos => {
      setPhotos(photos.photos)
      setLoading(false)
    })
  }, [keyword])

  useEffect(() => {
    if (page !== 1) {
      client.photos.search({ query: decodeURI(keyword), per_page: 10, page }).then(photos => {
        if (photos.photos.length > 0) {
          setPhotos(lastPage => lastPage.concat(photos.photos))
        }
      })
    }
  }, [page])

  useEffect(() => {
    if (isShow) {
      setPage(lastpage => lastpage + 1)
    }
  }, [isShow])

  const onChange = useCallback((entrie) => {
    setShow(entrie[0].isIntersecting)
  }, [])

  const options = {
    rootMargin: '2000px'
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, options)
    if (refElementVisibility.current) observer.observe(refElementVisibility.current)
    return () => {
      if (refElementVisibility.current) observer.unobserve(refElementVisibility.current)
    }
  }, [refElementVisibility, options])


  return <div>
    {isLoading
      ? <h3>Cargando...</h3>
      : photos.length > 0
        ? <div className='min-h-[200vh]'>
          <ListPhotos photos={photos} refElementVisibility={refElementVisibility} />
          <div className="w-full h-[3px]" ref={refElementVisibility}></div>
        </div>
        : <h3>Sin resultados...</h3>}
  </div>
}
