import SaleForm from "../components/SaleForm"
import '../styles/NewSale.css'
import { useNavigate } from 'react-router-dom'

function NewSale() {
    const navigate = useNavigate()

    function addItemHandler(saleData) {
        fetch('https://second-life-aeb08-default-rtdb.firebaseio.com/sale.json',
        {
            method: 'POST',
            body: JSON.stringify(saleData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => {
            navigate('/', {replace:true})
        })
    }
    return(
        <section>
            <h1 className="newSale-title">Mettez un article en vente</h1>
            <SaleForm onAddItem={addItemHandler} />
        </section>
    )

}

export default NewSale