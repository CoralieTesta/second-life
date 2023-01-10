import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories__select'
			>
				<option value=''> -- Catégorie -- </option>
				{categories.map((cat) => (
					<option className='categories__option' key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='categories__btn' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories