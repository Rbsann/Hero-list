import React from 'react'
import './HeroModal.scss'

const HeroModal = ({heroData, modalClose}) => {
  return(
    <div className="hero-modal">
      <h1>{heroData.name}</h1>
      <img src={heroData.image.url} alt={heroData.name} />
      <button onClick={modalClose} className='close-modal-button'>X</button>
      <h2>Biography</h2>
      <div className="quality">
        {Object.entries(heroData.biography).map((entry,index) => {
          if(!entry[1]) return <p key={entry[1] + index}><span className='Span'>{`${entry[0]} : `}</span>{'[Data unavailable]'}</p>
          return <p key={index+ entry[1]}><span className='Span'>{entry[0]+' : '}</span>{entry[1]}</p>
        })}
      </div>
      <h2>Appearance</h2>
      <div className="quality">
        {Object.entries(heroData.appearance).map((entry,index) => {
          if(!entry[1]) return <p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{'[Data unavailable]'}</p>
          return <p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{entry[1]}</p>
        })}
      </div>
      <h2>Work</h2>
      <div className="quality">
        {Object.entries(heroData.work).map((entry,index) => {
          if(!entry[1]) return <p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{'[Data unavailable]'}</p>
          return<p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{entry[1]}</p>
        })}
      </div>
      <h2>Connections</h2>
      <div className="quality">
        {Object.entries(heroData.connections).map((entry,index) => {
          if(!entry[1]) return <p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{'[Data unavailable]'}</p>
          return <p key={index+ entry[1]}><span className='Span'>{`${entry[0]} : `}</span>{entry[1]}</p>
        })}
      </div>
    </div>
  )
}

export default HeroModal