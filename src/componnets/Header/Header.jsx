import React, { useEffect, useState } from 'react'
import GenresBTN from './GenresBTN/GenresBTN'
import './Header.css'
import { fetchGenres } from '../../store/slices/genresSlice'
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search/Search';
import { fetchSearch, searchText } from '../../store/slices/searchSlice';

const Header = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const disaptch = useDispatch()
    const { genres } = useSelector((state) => state.genresData)
    const { text } = useSelector((state) => state.searchData)
    
    useEffect(() => {
        disaptch(fetchGenres())
    }, [])

    useEffect(() => {
        if(text.length > 3) {
            disaptch(fetchSearch(text))
            setOpenPopup(true)
        }else {
            setOpenPopup(false)
        }
    }, [text])
    return (
        <header>
            <div>
                <h5>logo</h5>
            </div>
            <div className='genres'>
 
                {
                    genres.map((genre) => {
                        return <GenresBTN key={genre.id} genre={genre} />
                    })
                }
            </div>
           

            
            <div className='input'>
                <input 
                placeholder='search' 
                value={text}
                onChange={(e) => disaptch(searchText(e.target.value))}
                />
                <div>
                    {
                        openPopup ? <Search setOpenPopup={setOpenPopup} /> : ''
                    }

                </div>
            </div>
        </header>
    )
}

export default Header