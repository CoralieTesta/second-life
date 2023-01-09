

function Categories() {
    return(
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
    )
}

export default Categories