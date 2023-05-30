
export default function ListPhotos({ photos }: any) {
    return <div className="w-full justify-center flex flex-wrap gap-6 items-center">
        {
            photos.map(photo => (
                <div className="max-w-[400px] max-h-[500px] overflow-hidden relative">
                    <img src={photo.src.portrait} alt={photo.alt} />
                </div>
            ))
        }
    </div>
}
