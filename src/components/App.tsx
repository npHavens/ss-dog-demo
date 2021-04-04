import './App.scss';
import BreedSelection from './BreedSelection'
import Dogs from './Dogs'
import Search from './Search'
import useDogs from '../hooks/useDogs'

function App() {
  const {
    filteredBreeds,
    images,
    loading,
    selectedBreed,
    setSearchTerm,
    setSelectedBreed,
   } = useDogs()

  return (
    <div className='app'>
      <header className='appHeader'>
        <div>Dogs!</div>
        <Search setSearchTerm={ setSearchTerm }></Search>
      </header>
      {
        loading.breeds ? <div>LOADING...</div> :
          <BreedSelection
            selectedBreed={ selectedBreed }
            setSelectedBreed={ setSelectedBreed }
            breeds={ filteredBreeds }
          ></BreedSelection>
      }
      {
        loading.images ? <div>LOADING...</div> :
        <Dogs images={ images }></Dogs>
      }
    </div>
  )
}

export default App
