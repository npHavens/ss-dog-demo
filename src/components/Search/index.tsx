import { Dispatch, SetStateAction } from 'react'
import './Search.scss';

interface SearchProps {
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const Search = ({ setSearchTerm }: SearchProps) => {
    return (<div>
        <input
            className='searchInput'
            placeholder='Search'
            onChange={ ({ target }) => setSearchTerm(target.value) }
        >
        </input>
    </div>)
}

export default Search
