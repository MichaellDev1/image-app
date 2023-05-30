import React from "react"

function ListPhotos({ photos }: any) {

    return <div className="w-full justify-center flex flex-wrap gap-6 items-center">
        {
            photos.map(photo => (
                <a href={`/photo/${photo.id}`} className="max-w-[400px] max-h-[500px] overflow-hidden relative" key={photo.id}>
                    <img src={photo.src.portrait} alt={photo.alt} />
                </a>
            ))
        }
    </div>
}

export default React.memo(ListPhotos)