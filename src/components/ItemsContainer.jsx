import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchItems } from '../features/itemsSlice'
import { ItemsList } from './ItemsList'


export const ItemsContainer = () => {

    const items = useSelector(store => store.items.items)
    const isLoading = useSelector(store => store.items.loading)
    const error = useSelector(store => store.items.error)

    const maleSelected = useSelector(store => store.gender.male)
    const femaleSelected = useSelector(store => store.gender.female)
    const allSelected = useSelector(store => store.gender.all)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    return (
        <div>
            { isLoading && <div>Loading...</div> }
            { error && <div>Ooooops, Couldn't fetch items</div> }
            { items && 
            <div className='items-container'>
            
                { allSelected && items.filter(item => item.category.includes('men')).map(item => (
                    <ItemsList key={item.id} {...item} />
                )) 
                }

                { femaleSelected && items.filter(item => item.category.includes('women')).map(item => (
                    <ItemsList key={item.id} {...item} />
                )) 
                }

                { maleSelected && items.filter(item => item.category === "men's clothing").map(item => (
                    <ItemsList key={item.id} {...item} />
                )) 
                }
            </div>        
             }
        </div>
    )
}