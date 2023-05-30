import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [query, setNewQuery] = useState<string>('')
    const navigate = useNavigate()

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewQuery(e.target.value)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        return navigate(`/search/${query}`)
    }

    return <header className='w-full flex mb-10 justify-between h-[90px] px-11 items-center fixed z-10'>
        <div></div>
        <form onSubmit={handleSearch}>
            <input type="text" onChange={handleChangeInput} placeholder='Space, Marvel...' />
            <button>Search</button></form>
        <div className='flex items-center gap-2'>
            <span>Michael Santucho</span>
            <div className='w-[40px] text-white font-semibold flex justify-center items-center  h-[40px] bg-orange-500 rounded-full'>MS</div>
        </div>
    </header>
}
