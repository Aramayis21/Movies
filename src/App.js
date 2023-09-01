import './App.css';
import Header from './componnets/Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { fetchMovies } from './store/slices/movieSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmsPage from './pages/FilmsPage/FilmsPage';

function App() {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.moviesData)

  useEffect(() => {
    dispatch(fetchMovies(pageNumber))
  }, [pageNumber])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<FilmsPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
