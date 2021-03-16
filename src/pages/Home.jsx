import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { triggerGetHeroesData, triggerSearchHeroByName } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import HeroGrid from '../organisms/HeroGrid'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Pagination from 'react-responsive-pagination';

import './Home.scss'

const Home = () => {
  const heroesPages = 73
  const pageSize = 10
  // 73 pages for 730 heroes, array from 10 to 10 elements
  const allHeroes = useMemo(() => [...Array(heroesPages * 10).keys()].slice(1),[])
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const [modalHero, setModalHero] = useState({})
  const [heroesIds, setHeroesRange] = useState([1,2,3,4,5,6,7,8,9,10])
  const [heroSearched, setHeroSearched] = useState(false)
  const [heroName, setHeroName] = useState('')
  const [displayedHeroes, setDisplayedHeroes] = useState([])
  const dispatch = useDispatch()

  const heroesData = useSelector(state => state.heroes)
  const loading = useSelector(state => state.loading)

  const fetchHeroes = useCallback(() => {
    dispatch(triggerGetHeroesData(heroesIds))
  },[dispatch, heroesIds])

  useEffect(() => {
    fetchHeroes()
  },[dispatch, heroesIds, fetchHeroes])

  useEffect(() => {
    setHeroesRange(allHeroes.slice((page -1) * pageSize, page * pageSize))
  },[page, allHeroes])

  useEffect(() => {
    setDisplayedHeroes(heroesData)
  },[heroesData])

  const handleSearchBar = (heroName) => {
    setHeroName(heroName)
  }

  const searchHeroName = () => {
    if(!heroName) {
      setHeroSearched(false)
      setDisplayedHeroes([])
      setPage(1)
      fetchHeroes()
    }
    else{
      setHeroSearched(true)
      dispatch(triggerSearchHeroByName(heroName))
    }
    setHeroName('')
  }

  const handleOpenModalClick = (index) => {
    if(modal) {
      setModal(false)
      setModalHero({})
    } else {
      setModal(true)
      setModalHero(displayedHeroes[index])
    }
  }

  const handleCloseModalClick = () => {
    setModal(false)
    setModalHero({})
  }


  return (
    <>
    {loading ? (
      <>
      <div className='loader-div'>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
      </>
    ):(
      <>
        <HeroGrid
          modalClose={handleCloseModalClick}
          modalOpen={modal}
          modalHero={modalHero}
          handleModalOpen={handleOpenModalClick}
          handleChange={handleSearchBar}
          handleClick={searchHeroName}
          handleModalClose={handleCloseModalClick}
          heroes={displayedHeroes}
        />
      </>
    )
    }
    {!heroSearched && (
      <Pagination
        current={page}
        total={73}
        onPageChange={setPage}

    />
    )}
    </>
  )
}

export default Home