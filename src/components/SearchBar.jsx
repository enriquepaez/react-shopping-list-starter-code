import { useState } from "react"

function SearchBar({searchValue, setSearchValue}) {

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
    // ! nunca tenemos acceso al nevo valor del estado en la misma secuencia de código donde lo estamos actualizando
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearchChange} value={searchValue} type="text" />

    </div>
  )
}

export default SearchBar