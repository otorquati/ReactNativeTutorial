import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}> 
      <label htmlFor="search">Pesquisar</label>
      <input
      id='search'
        type="text"
        role="searchbox"
        placeholder="Search items"
        values={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
