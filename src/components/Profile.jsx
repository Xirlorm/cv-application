import { useState } from 'react'
import Section from '/src/components/Section';

export default function Profile(props) {
	const [profile, setProfile] = useState();

	const onSubmit = (e) => {
		e.preventDefault()
		props.setActiveSection('')
	}

	return (
		<Section
			className={props.className}
			active={props.active}
			editEnabled={props.editEnabled}
			section={props.section}
			setActiveSection={props.setActiveSection}
		>
			<div className='content text-justify font-bold'>{profile}</div>
			<form onSubmit={onSubmit} className={props.active ? '' : 'hidden'}>
				<div>
					<label htmlFor="profile">
						<textarea
							name="profile" 
							id="profile" 
							rows="5"
							onChange={(e) => setProfile(e.target.value)}
							value={profile}
						></textarea>
					</label>
				</div>
				<input type="submit" value="Done" />
			</form>
		</Section>
	)
}
