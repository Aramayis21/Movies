import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movies from '../../componnets/Movies/Movies'
import { changePage } from '../../store/slices/movieSlice'
import './HomePage.css'

const HomePage = () => {
   const {movies, isLoading} = useSelector((state) => state.moviesData)
   const dispatch = useDispatch()
  return (
    <>
    <div className='home'>
   
         {
            movies.map((m) => {
                return <Movies key={m.id} movie={m}/>
            })
        }
    </div>
    <div className='btn-block'>
      <button disabled={isLoading} onClick={() => dispatch(changePage())}>{isLoading ? 'loading...' : 'more'}</button>
    </div>
    </>
  )
}

export default HomePage