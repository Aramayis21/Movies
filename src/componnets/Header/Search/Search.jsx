import React from 'react'
import './Search.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Search = ({ setOpenPopup}) => {

    const {searchFilms} = useSelector((state) => state.searchData)
  return (
    <div className='searchBlock'>
      <button onClick={() => setOpenPopup(false)}>X</button>
        {
            searchFilms.map((el) => {
                return <div key={el.id}>
                  <NavLink to={`/${el.id}`}>

                    <p>{el.title}</p>

                  </NavLink>

                    </div>
            })
        }
    </div>
  )
}

export default Search