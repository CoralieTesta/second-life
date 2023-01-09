import SaleItem from "./SaleItem"
import "../styles/SaleList.css"

function SaleList({items}) {
    return(
        <ul className="saleList">
            {items.map((item) => 
                <SaleItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    price={item.price}
                />
            )
            }
        </ul>
    )
}

export default SaleList