import { Link } from "react-router-dom"
import "../../styles/MainNavigation.css"
import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext)

    return(
        <header className="header">
            <div className="siteName"> 
            🪶Second Life 
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li className="navEl">
                        <Link to='/'>À vendre</Link>
                    </li>
                    <li className="navEl">
                        <Link to='/newSale'>Mettre en vente</Link>
                    </li>
                    <li className="navEl">
                        <Link to='/favorite'>Vos Favoris</Link>
                        <span className="navTotalFav">{favoritesCtx.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation