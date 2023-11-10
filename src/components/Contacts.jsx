import { useState } from 'react'
import Section from './Section'
import ContactsList from './ContactList'
import AddressIcon from '/src/assets/icons/address.svg'
import PhoneIcon from '/src/assets/icons/phone.svg'
import EmailIcon from '/src/assets/icons/mail.svg'
import WebsiteIcon from '/src/assets/icons/website.svg'

function Contacts(props) {
	const [contactKind, setContactKind] = useState('text')
	const [contactValue, setContactValue] = useState('')
	const [contactList, setContactList] = useState({})
	const contactKindList = [
		{value: 'text', text: 'Address', icon: AddressIcon},
		{value: 'tel', text: 'Telephone', icon: PhoneIcon},
		{value: 'email', text: 'Email', icon: EmailIcon},
		{value: 'url', text: 'Website', icon: WebsiteIcon},
	]
		
	const onSubmit = (e) => {
		e.preventDefault()

		if (contactValue === '') return

		setContactList((list) => {
			let newList = {}

			for (let kind of contactKindList) {
				if (list[kind.text] !== undefined) {
					newList[kind.text] = [...list[kind.text]]
				}

				if (kind.value === contactKind) {
					if (list[kind.text] === undefined) {
						newList[kind.text] = []
					}

					newList[kind.text].push({
						value: contactValue,
						id: newList[kind.text].length,
					})
				}
			}

			return newList
		})

		setContactValue('')
		// props.setActiveSection('')
	}

	return (
		<Section
			className={props.className}
			active={props.active}
			editEnabled={props.editEnabled}
			section={props.section}
			setActiveSection={props.setActiveSection}
		>
			<div className="content px-4">
				<ContactsList list={contactList} setList={setContactList} listIndex={contactKindList} />
			</div>
			<form onSubmit={onSubmit} className={props.active ? '' : 'hidden'}>
				<div>
					<label htmlFor="contact-kind">
						<select
							id="contact-kind"
							onChange={(e) => setContactKind(e.target.value)}
							value={contactKind}
						>
							{contactKindList.map(({value, text}) => {
								return <option value={value}>{text}</option>
							})}
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="contact">
						<input
							id="contact"
							type={contactKind}
							placeholder={
								'Enter ' + (
									(contactKind === 'tel')
									? 'telephone' :
									(contactKind === 'text')
									? 'Address' :
									contactKind
								)
							}
							onChange={(e) => setContactValue(e.target.value.trim())}
							value={contactValue}
						/>
					</label>
				</div>
				<input type="submit" value="Add" />
			</form>
		</Section>
	)
}

export default Contacts
