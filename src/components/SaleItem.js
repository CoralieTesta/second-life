import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import '../styles/SaleItem.css'

function SaleItem({title, sex, category, image, price, id}) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(id)
    
    function toggleFavoriteStatusHandler() {
        console.log(id)
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(id)
        }
        else {
            favoritesCtx.addFavorite({
                id : id,
                title : title,
                sex : sex,
                category : category,
                image : image,
                price : price
            })
        }
    }
    return(
        <li className="item">
            <div className='item-content'>
                <div className="item-title">
                    <h3>{title}</h3>
                </div>
                <div className="item-image">
                    <img src={image} alt={title}/>
                </div>
                <div className="item-price">
                    {price}€
                </div>
                <div className="btn-favorite">
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Retirez des ' : 'Ajoutez aux ' }Favoris ❤️ 
                    </button>
                </div>
            </div>
        </li>
    )
}

export default SaleItem