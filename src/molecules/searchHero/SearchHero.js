import React from 'react'
import { SearchBar } from '../../atoms/searchBar/SearchBar'
import { SearchButton } from '../../atoms/searchButton/SearchButton'
import './SearchHero.scss'

const SearchHero = ({handleChange, handleClick}) => (
  <div className='search-hero-div'>
    <SearchBar handleChange={handleChange} />
    <SearchButton handleClick={handleClick} />
  </div>
)

export default SearchHero