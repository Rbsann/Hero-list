import './HeroImage.scss'

export const HeroImage = ({imageUrl, imageName}) => (
  <img src={imageUrl} className='hero-img' alt={imageName} />
)