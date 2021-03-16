import React from 'react'
import { HeroImage } from '../../atoms/heroImage/HeroImage'
import { HeroNameText } from '../../atoms/heroText/HeroNameText'
import './HeroCard.scss'

const HeroCard = ({heroImage, imageText}) => (
  <div className='hero-card'>
    <HeroImage imageUrl={heroImage} imageName={imageText} />
    <HeroNameText heroName={imageText} />
  </div>
)

export default HeroCard