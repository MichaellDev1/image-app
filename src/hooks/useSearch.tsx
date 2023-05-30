import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels'
export default function useSearch() {
    const [photos, setPhotos] = useState<any>([])
    const [query, setQuery] = useState<string>('random')

    useEffect(() => {
        const client = createClient()
    }, [query])

    return { photos, setPhotos, setQuery }
}
