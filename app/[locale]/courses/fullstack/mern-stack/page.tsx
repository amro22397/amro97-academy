'use client'

import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'

const page = () => {

    const [search, setSearch] = useState<string | undefined | null>("");
  
  return (
    <div>
      <SearchBar setSearch={setSearch} />

    </div>
  )
}

export default page
