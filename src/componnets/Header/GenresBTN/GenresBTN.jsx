import React from 'react'
import './GenresBTN.css'
import { fetchGenresId } from '../../../store/slices/movieSlice'
import { useDispatch,useSelector } from 'react-redux'
const GenresBTN = ({genre}) => {

const dispatch = useDispatch()
const {genresId,pageNumber} = useSelector((state) => state.moviesData)

const click = (genre) => {
  if (genre === genresId) {return}
  dispatch(fetchGenresId(genresId,pageNumber))
  
}


  return (
    <button onClick={() => click(genre.id)}>{genre.name}</button>
  )
}

export default GenresBTN