import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const ItemDetails = () => {

    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({})
    const [error, setError] = useState('')

    console.log(id)

    useEffect(() => {
       axios
       .get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            setIsLoading(false)
            setItem(res.data) 
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
    }, [])

    console.log(item)
    return (
            <div className='item-details'>
                <img style={{height:'200px', width: '200px'}} src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
            </div>
    )
}
