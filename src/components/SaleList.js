import SaleItem from "./SaleItem"
import "../styles/SaleList.css"
import Categories from "./Categories"
import { useState } from "react"
import Gender from "./Gender"

function SaleList({items}) {
    const [activeCategory, setActiveCategory] = useState('')
    const [activeGender, setActiveGender] = useState('')
    const categories = ['T-shirt', 'Pull', 'Veste', 'Pantalon', 'Robe', 'Jupe', 'Bijou', 'Chaussures', 'Autre']
    const genders = ['Homme', 'Femme', 'Autre']
    return(
        <div>
            <div className="saleList__filters">
                <h3>Filtres</h3>
                <Gender
                    genders={genders}
                    setActiveGender={setActiveGender}
                    activeGender={activeGender}
                />
                <Categories
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                />
            </div>
            <ul className="saleList">
                {items.map((item) => 
                    (!activeCategory || activeCategory === item.category) && 
                    (!activeGender || activeGender=== item.sex) ? (
                    <SaleItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        price={item.price}
                    />
                    ) : null
                )
                }
            </ul>
        </div>
    )
}

export default SaleList