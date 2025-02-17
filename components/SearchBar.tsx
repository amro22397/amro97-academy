'use client'

import React from 'react'
import { Input } from './ui/input'
import { IoSearch } from "react-icons/io5";


const SearchBar = ({ setSearch }: {
    setSearch?: any;
}) => {
  return (
    <div className='bg-zinc-200/95 w-[400px] mb-8 rounded-full px-6 py-[9.35px]
    flex flex-row items-center justify-center gap-1'>
      <input className='bg-transparent w-full text-[18px] focus:outline-none
    tracking-wide'
    onChange={(e) => setSearch(e.target.value)}
      style={{fontFamily: 'Arial'}}/>

      <IoSearch size={25} className='text-gray-500' />
    </div>
  )
}

export default SearchBar
