import React from 'react'
import Filter from '../search-filter/Filter'

const SearchLeft = () => {
  return (
    <div className='Search-left-side'>
      <p className="mini-title">Filters</p>
      <Filter name={"Company Sectors"}/>
      <Filter name={"Country"}/>
      <Filter name={"Metatags"}/>
      <Filter name={"Alexa points"}/>
      <Filter name={"Colors"}/>
    </div>
  )
}

export default SearchLeft
