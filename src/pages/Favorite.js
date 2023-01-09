import { useContext } from "react"
import SaleList from "../components/SaleList"
import FavoritesContext from "../store/favorites-context"
import "../styles/Favorite.css"


function Favorite() {
    const favoritesCtx = useContext(FavoritesContext)
    return(
        <section>
            <h1 className="favorite-title">Mes Favoris</h1>
            <SaleList items = {favoritesCtx.favorites} />
        </section>
    )
}

export default Favorite