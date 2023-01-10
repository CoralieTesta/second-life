import '../styles/Gender.css'

function Gender({ setActiveGender, genders, activeGender }) {
	return (
		<div className='gender'>
			<select
				value={activeGender}
				onChange={(e) => setActiveGender(e.target.value)}
				className='gender__select'
			>
				<option value=''> -- Genre -- </option>
				{genders.map((gender) => (
					<option key={gender} value={gender}>
						{gender}
					</option>
				))}
			</select>
			<button className='gender__btn' onClick={() => setActiveGender('')}>Réinitialiser</button>
		</div>
	)
}

export default Gender