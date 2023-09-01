import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './FilmsPage.css'
import { fetchFilm } from '../../store/slices/filmSlice'


const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const FilmsPage = () => {
  const dispatch = useDispatch()
  const { filmPage } = useSelector((state) => state.filmData)
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFilm(id))
  }, [filmPage])
  return (
    <div className='filmsPage'>
      <div className='filmInfo'>
        <div className='filmInfoIMG'>
          <img src={IMG_URL + filmPage?.poster_path} />
        </div>
        <div className='filmInfoDesc'>
          <h2>{filmPage?.title}</h2>
          <p>description : {filmPage?.overview}</p>
          <b>relese Date : {filmPage?.release_date}</b>
          <p>rateing : {filmPage?.vote_average} / 10</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default FilmsPage