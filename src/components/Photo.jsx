import { useState } from 'react'
import defaultImage from '/src/assets/images/profile3.jpg'
import addIcon from '/src/assets/icons/add.svg'

export default function Photo({editEnabled}) {
	const [photo, setPhoto] = useState(null);

	const showSelectedImage = (e) => {
		setPhoto(URL.createObjectURL(e.target.files[0]))
	}

	return (
		<div className='photo m-0 p-0 relative'> 
			<img
				src={photo !== null ? photo : defaultImage}
				alt="User Photo"
				/>
			<form className={
				'rounded-full absolute p-2 ' + (editEnabled ? 'show' : 'hidden')
			}>
				<div>
					<label htmlFor="photo-input">
						<img src={addIcon} alt="Add profile photo icon" />
						<input
							type="file"
							id='photo-input'
							accept='.jpeg, .jpg, .png'
							className='hidden'
							onChange={showSelectedImage}
						/>
					</label>
				</div>
			</form>
		</div>
	)
}
