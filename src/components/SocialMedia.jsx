import { useState } from 'react'
import Section from './Section'
import SocialHandleList from './SocialHandleList'

export default function SocialMedia(props) {
	const [platform, setPlatform] = useState('')
	const [username, setUsername] = useState('')
	const [socialHandles, setSocialHandles] = useState([])
	const [id, setId] = useState(27.38)

	function onSubmit(e) {
		e.preventDefault()

		if (!(platform || username)) {
			props.setActiveSection('')
			return
		}
		
		setSocialHandles(list => {
			const newList = list.map((item) => ({...item}))
			newList.push({
				platform: platform.trim(),
				username: username.trim(),
				id: `${id}`
			})

			return newList
		})

		setId(id => id + 341.98)
		setPlatform('')
		setUsername('')
	}

	return (
		<Section
			active={props.active}
			editEnabled={props.editEnabled}
			setActiveSection={props.setActiveSection}
			section={props.section}
			className={props.className}
		>
			<div className="content">
				<SocialHandleList
					socialHandles={socialHandles}
					setSocialHandles={setSocialHandles}
					active={props.active}
				/>
			</div>
			<form onSubmit={onSubmit} className={props.active ? '' : 'hidden'}>
				<div>
					<label htmlFor='platform'>
						<input
							id='platform'
							type="text"
							placeholder="Platform"
							value={platform}
							onChange={(e) => setPlatform(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label htmlFor='username'>
						<input
							id='username'
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</label>
				</div>
				<input type="submit" value="Done" />
			</form>
		</Section>
	)
}
