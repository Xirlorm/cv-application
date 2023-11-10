import { useState } from "react"
import Section from "./Section"

export default function Reference(props) {
	const [fullName, setFullName] = useState('')
	const [comment, setComment] = useState('')
	const [telephone, setTelephone] = useState('')
	const [email, setEmail] = useState('')
	const [references, setReferences] = useState([])

	const addRef = (e) => {
		e.preventDefault()

		if (!(fullName || telephone || email))
			return

		setReferences((list) => [
			...(list.map(item => ({...item}))),
			{fullName, comment, telephone, email},
		])

		setFullName('')
		setComment('')
		setTelephone('')
		setEmail('')
	}

	return (
		<Section
			className={props.className}
			active={props.active}
			editEnabled={props.editEnabled}
			setActiveSection={props.setActiveSection}
			section={props.section}
		>
			<div className="content">
				<ul>
					{
						references.map(item => {
							return (
								<li key={item.id}>
									<div className="fullname">{item.fullName}</div>
									<div className="comment">{item.comment}</div>
									<div className="telephone">{item.telephone}</div>
									<div className="email">{item.email}</div>
								</li>
							)
						})
					}
				</ul>
			</div>
			<form className={props.active ? '' : 'hidden'} onSubmit={addRef}>
				<div>
					<label htmlFor="full-name">
						<input 
							type="text"
							id="full-name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="Full name"
							required
						/>
					</label>
				</div>
				<div>
					<label htmlFor="comment">
						<input 
							type="text"
							id="comment"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							placeholder="Comment"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="telephone">
						<input 
							type="tel"
							id="telephone"
							value={telephone}
							onChange={(e) => setTelephone(e.target.value)}
							placeholder="Telephone"
							required
						/>
					</label>
				</div>
				<div>
					<label htmlFor="email">
						<input 
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email Address"
							required
						/>
					</label>
				</div>
				<input type="submit" value="Add" />
			</form>
		</Section>
	)
}
