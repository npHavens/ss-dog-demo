import { Dispatch, SetStateAction } from 'react'
import './BreedSelection.scss'
import classnames from 'classnames'

interface BreedSelectionProps {
    breeds: string[], 
    selectedBreed: string,
    setSelectedBreed: Dispatch<SetStateAction<string>>,
}

const BreedSelection = ({ breeds, selectedBreed, setSelectedBreed }: BreedSelectionProps) => {
    return (<div className='breedsContainer'>
        {   !breeds.length ? <div>'No breed matches found'</div> :
            breeds.slice(0, 12).map((breed, i) => {
                return (<div
                    key={ 'breed-' + i }
                    onClick={ () => setSelectedBreed(breed) }
                    className={ classnames({
                        button: true,
                        selected: breed === selectedBreed
                    })}>{ breed }</div>)
            })
        }
    </div>)
}

export default BreedSelection
