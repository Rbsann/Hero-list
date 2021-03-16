import './SearchBar.scss'

export const SearchBar = ({handleChange}) => (
  <input placeholder='search for your hero!' onChange={(event) => handleChange(event.target.value)} className='search-bar' />
)