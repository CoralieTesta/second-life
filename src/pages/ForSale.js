import SaleList from "../components/SaleList"
import '../styles/ForSale.css'
import { useState, useEffect } from 'react'

function ForSale() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        fetch('https://second-life-aeb08-default-rtdb.firebaseio.com/sale.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const items =[]
            for (const key in data) {
                const item = {
                    id:key,
                    ...data[key]
                }
                items.push(item)
            }
            setIsLoading(false)
            setLoadedItems(items)
        })
    }, [])
    if(isLoading) {
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return(
        <section>
            <h1 className="forSale-title">À vendre</h1>
            <SaleList items={loadedItems}/>
        </section>
    )
}

export default ForSale