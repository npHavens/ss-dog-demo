import './Dogs.scss';

interface DogsProps {
    images: string[]
}

const Dogs = ({ images }: DogsProps) => {
    return (<div className='dogsContainer'>
       {
        images.slice(0, 12)
        .map((image, i) => {
           return (<img
                    key={ 'dog-' + i }
                    width='200'
                    src={ image }>
                   </img>)
        })
       }
    </div>)
}

export default Dogs
