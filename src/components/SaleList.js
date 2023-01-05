import SaleItem from "./SaleItem"
import "../styles/SaleList.css"

let list = [
    {
        title: "Robe à carreaux",
        image: "https://images.pexels.com/photos/859195/pexels-photo-859195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Robe",
        price: 30
    },
    {
        title: "Bague serpent",
        image: "https://images.pexels.com/photos/7588194/pexels-photo-7588194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Bijoux",
        price: 5
    }
]

function SaleList({items}) {
    return(
        <ul className="saleList">
            {items.map((item) => 
                <SaleItem 
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