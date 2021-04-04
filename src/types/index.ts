import { Dispatch, SetStateAction } from 'react'

export interface Dogs {
    breeds: string[],
    selectedBreed: string,
    setSelectedBreed: Dispatch<SetStateAction<string>>,
    images: string[],
    setSearchTerm: Dispatch<SetStateAction<string>>,
    filteredBreeds: string[],
    loading: Loading
}

export interface Loading {
    breeds?: boolean,
    images?: boolean
}

export interface BreedsApiResponse {
    data: {
        message: {
            [key: string]: string[]
        }
    }
}

export interface ImagesApiResponse {
    data: {
        message: string[]
    }
}
