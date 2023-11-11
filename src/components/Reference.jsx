import { useState } from "react"
import Section from "./Section"
import CloseButton from "./CloseButton"

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
				<ul className="flex flex-wrap">
					{
						references.map(item => {
							return (
								<li key={item.id} className="flex-1 text-capitalize text-justify m-2">
									<div className='text-right p-0 m-0'>
										<CloseButton onClick={() => {}} isActive={props.active}/>
									</div>
									<div className="fullname text-lg font-bold">{item.fullName}</div>
									{
										item.comment
										? <div className="comment italic">{item.comment}</div>
										: undefined
									}
									<div className="telephone flex">
										<h3 className="font-bold">Phone:&nbsp;</h3> {item.telephone}
									</div>
									<div className="email flex">
										<h3 className="font-bold">Email:&nbsp;</h3> {item.email}
									</div>
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
