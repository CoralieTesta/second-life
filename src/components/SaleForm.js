import '../styles/SaleForm.css'
import { useRef } from 'react'
import { useState } from 'react'

function SaleForm({onAddItem}) {
    const [isSex, setIsSex] = useState('')
    const [isCategory, setIsCategory] = useState('T-shirt')

    function handleChange(e) {
        setIsSex(e.currentTarget.value)
    }

    function handleChangeCategory(e) {
        setIsCategory(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const priceInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value
        const enteredPrice = priceInputRef.current.value
        const saleData = {
            title: enteredTitle,
            sex: isSex,
            category: isCategory,
            image: enteredImage,
            price: enteredPrice
        }
        console.log(saleData);
        onAddItem(saleData)
    }
    
    return(
        <div className='saleForm'>
            <form onSubmit={submitHandler}>
                <fieldset className='saleForm__fieldset'>
                    <legend>Complétez le formulaire</legend>
                    <div className="saleForm__element">
                        <label htmlFor="title">Nom de l'article </label>
                        <input type="text" id="title" ref={titleInputRef} autoFocus/>
                    </div>
                    <div className="saleForm__element">
                        Sexe 
                        <input type="radio" name="sex" id="Homme" value='Homme' 
                        onChange={handleChange}/>
                        <label htmlFor="Homme">Homme </label>
                        
                        <input type="radio" name="sex" id="Femme" value='Femme' 
                        onChange={handleChange}/>
                        <label htmlFor="Femme">Femme </label>

                        <input type="radio" name="sex" id="Autre" value='Autre' 
                        onChange={handleChange}/>
                        <label htmlFor="Autre">Autre </label>
                    </div>
                    <div className="saleForm__element">
                        <label htmlFor="category">Catégorie </label>
                        <select name="category" id="category" onChange={handleChangeCategory}>
                            <option value="T-shirt" >T-shirt</option>
                            <option value="Pull">Pull</option>
                            <option value="Veste">Veste</option>
                            <option value="Pantalon">Pantalon</option>
                            <option value="Robe">Robe</option>
                            <option value="Jupe">Jupe</option>
                            <option value="Bijou">Bijou</option>
                            <option value="Chaussures">Chaussures</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div className="saleForm__element">
                        <label htmlFor="image">Photo </label>
                        <input type="img" id="image" ref={imageInputRef} />
                    </div>
                    <div className="saleForm__element">
                        <label htmlFor="price">Prix </label>
                        <input type="number" id="price" ref={priceInputRef} />
                    </div>

                    <div className="submit">
                        <input type="submit" value="Mettre en vente" className="button-blue"/>
                        <div className="ease"></div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default SaleForm