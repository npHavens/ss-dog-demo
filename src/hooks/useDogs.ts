import { useEffect, useState } from 'react'
import  {
    BreedsApiResponse,
    Dogs,
    ImagesApiResponse,
    Loading
} from '../types'
import axios from 'axios'

const useDogs = (): Dogs => {
    const [breeds, setBreeds] = useState<string[]>([])
    const [filteredBreeds, setFilteredBreeds] = useState<string[]>([])
    const [selectedBreed, setSelectedBreed] = useState<string>('')
    const [images, setImages] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [loading, setLoading] = useState<Loading>({
        breeds: false,
        images: false
    })

    useEffect(() => {
      getBreeds()
    }, [])

    useEffect(() => {
        if (selectedBreed) {
            getImages()
        }
    }, [selectedBreed])

    useEffect(() => {
        if (!searchTerm && breeds) {
            // reset selected breeds in search input is cleared
            setFilteredBreeds(breeds)
        } else {
            const filtered = breeds.filter((breed) => {
                return breed.includes(searchTerm)
                // make typescript allow sorting strings alphabetically by coercing them to numbers JS style
             }).sort((a, b) =>  (a as any) - (b as any))

             setFilteredBreeds(filtered)
             setImages([])
        }
    }, [searchTerm])

    const getBreeds = async () => {
        setLoading({ breeds: true })
        try {
            const { data }: BreedsApiResponse = await axios('https://dog.ceo/api/breeds/list/all')

            const breedsList = Object.keys(data.message)
            // set both breeds and filteredBreeds after fetch to keep a copy of the unfiltered breeds and save extra API calls
            setBreeds(breedsList)
            setFilteredBreeds(breedsList)
            setLoading({ breeds: false })
        } catch (error) {
            console.log('ERROR FETCHING BREEDS', error)
        }
      }

    const getImages = async () => {
        setLoading({ images: true })

        try {
            const { data }: ImagesApiResponse = await axios(`https://dog.ceo/api/breed/${ selectedBreed }/images`)
            setLoading({ images: false })
            setImages(data.message)
        } catch(error) {
            console.log('ERROR FETCHING IMAGES', error)
        }

    }

    return {
        breeds,
        selectedBreed,
        setSelectedBreed,
        images,
        setSearchTerm,
        filteredBreeds,
        loading
    }
}

export default useDogs
