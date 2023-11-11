import { useState } from 'react'
import Section from './Section'

export default function Intro(props) {
	const	[occupation, setOccupation] = useState('')
	const [fullName, setFullName] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		props.setActiveSection('')
	}

	return (
		<Section
			section={props.section}
			active={props.active}
			editEnabled={props.editEnabled}
			setActiveSection={props.setActiveSection}
			className={props.className}
		>
			<div className='content'>
				<h1 className="text-2xl font-bold">{fullName}</h1>
				<h3 className="text-xl font-bold">{occupation}</h3>
			</div>
			<form onSubmit={onSubmit} className={props.active ? '' : 'hidden'}>
				<div>
					<label htmlFor="fullname">
						<input
							type="text"
							name="fullname"
							id="fullname"
							value={fullName}
							placeholder="Full name"
							onChange={(e) => setFullName(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="occupation">
						<input
							type="text"
							name="occupation"
							id="occupation"
							value={occupation}
							placeholder="Occupation"
							onChange={(e) => setOccupation(e.target.value)}
						/>
					</label>
				</div>
				<input type="submit" value='Done' />
			</form>
		</Section>
	)
}


