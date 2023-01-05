import '../styles/SaleForm.css'
import { useRef } from 'react'
import { useState } from 'react'

function SaleForm({onAddItem}) {
    const [isSex, setIsSex] = useState('')
    const [isCategory, setIsCategory] = useState('')

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
        <div>
            <form onSubmit={submitHandler}>
                <fieldset className='saleForm-fieldset'>
                    <legend>Complétez le formulaire</legend>
                    <div className="form-element">
                        <label htmlFor="title">Nom de l'article </label>
                        <input type="text" id="title" ref={titleInputRef} autoFocus/>
                    </div>
                    <div className="form-element">
                        Sexe 
                        <input type="radio" name="sex" id="man" value='man' 
                        onChange={handleChange}/>
                        <label htmlFor="man">Homme </label>
                        
                        <input type="radio" name="sex" id="woman" value='woman' 
                        onChange={handleChange}/>
                        <label htmlFor="woman">Femme </label>

                        <input type="radio" name="sex" id="other" value='other' 
                        onChange={handleChange}/>
                        <label htmlFor="other">Autre </label>
                    </div>
                    <div className="form-element">
                        <label htmlFor="category">Catégorie </label>
                        <select name="category" id="category" onChange={handleChangeCategory}>
                            <option value="Tshirt" >T-shirt</option>
                            <option value="Pull">Pull</option>
                            <option value="Veste">Veste</option>
                            <option value="Pantalon">Pantalon</option>
                            <option value="Robe">Robe</option>
                            <option value="Jupe">Jupe</option>
                            <option value="Bijou">Bijou</option>
                            <option value="Chaussures">Chaussures</option>
                        </select>
                    </div>
                    <div className="form-element">
                        <label htmlFor="image">Photo </label>
                        <input type="img" id="image" ref={imageInputRef} />
                    </div>
                    <div className="form-element">
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