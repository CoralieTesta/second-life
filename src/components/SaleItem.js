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
        <li className="saleItem">
            <div className='saleItem__content'>
                {itemIsFavorite && 
                    <span onClick={toggleFavoriteStatusHandler} className='saleItem__heart'>
                    ❤️
                    </span>
                }
                <div className="saleItem__title">
                    <h3>{title}</h3>
                </div>
                <div className="saleItem__image">
                    <img src={image} alt={title}/>
                </div>
                <div className="saleItem__price">
                    {price}€
                </div>
                {itemIsFavorite ?
                    (<div className="saleItem__btn saleItem__btn-remove">
                        <button onClick={toggleFavoriteStatusHandler}>
                            Retirez des favoris ❤️ 
                        </button>
                        
                </div>) : 
                    (<div className="saleItem__btn saleItem__btn-add">
                    <button onClick={toggleFavoriteStatusHandler}>
                        Ajoutez aux Favoris ❤️ 
                    </button>
            </div>

                    ) }

                
            </div>
        </li>
    )
}

export default SaleItem