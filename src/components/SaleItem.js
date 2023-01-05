import '../styles/SaleItem.css'

function SaleItem({title, sex, category, image, price}) {
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
                    <button>
                        Favoris ❤️
                    </button>
                </div>
            </div>
        </li>
    )
}

export default SaleItem