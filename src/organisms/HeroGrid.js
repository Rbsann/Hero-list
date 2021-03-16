import React from 'react'
import HeroCard from '../molecules/heroCard/HeroCard'
import { SuperHeroTitle } from '../atoms/heroTitle/HeroTitle'
import SearchHero from '../molecules/searchHero/SearchHero'
import HeroModal  from '../molecules/heroModal/HeroModal'
import {isEmpty} from 'lodash'
import './HeroGrid.scss'


const HeroGrid = ({heroes, handleClick, handleChange, handleModalOpen, modalHero, modalClose}) => {
  return (
    <>
      <div className='modal-container'>
        {!isEmpty(modalHero) && (
          <HeroModal modalClose={modalClose} heroData={modalHero} />
        )}
      </div>
      <div className='header'>
        <SuperHeroTitle>Heroes List</SuperHeroTitle>
        <SearchHero handleChange={handleChange} handleClick={handleClick} />
      </div>
      <div className='hero-grid'>
        {heroes?.map((hero, index) => (
          <div onClick={() => handleModalOpen(index)}>
            <HeroCard key={hero.name + String(index)} heroImage={hero.image.url} imageText={hero.name}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroGrid