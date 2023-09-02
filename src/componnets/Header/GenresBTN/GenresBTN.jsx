import React from 'react'
import './GenresBTN.css'
import { fetchGenresId } from '../../../store/slices/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

const GenresBTN = ({ genre }) => {
  const dispatch = useDispatch()
  const { genresId, pageNumber } = useSelector((state) => state.moviesData)

  console.log(genre.id, genresId);

  const click = () => {
    if (genre.id === genresId) { return }
    dispatch(fetchGenresId(genre.id, pageNumber))
  }

  return (
    <button onClick={click}>{genre.name}</button>
  )
}

export default GenresBTN