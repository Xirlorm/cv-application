import { Fragment } from "react"
import CloseButton from "./CloseButton"

function ContactsList({list, setList, listIndex, isActive}) {
	const removeContact = (contactKind, id) => {
		setList(list => {
			let newList = {}

			for (let kind of listIndex) {
				if (list[kind.text] !== undefined) {
					newList[kind.text] = [...list[kind.text]]
				}

				if (kind.text === contactKind) {
					newList[kind.text] = newList[kind.text].filter(item => item.id !== id)

					if (!list[kind.text].length) {
						delete newList[kind.text]
					}
				}
			}

			return newList
		})
	}

	return <>
		{
			listIndex.map(kind => {
				if (!(kind.text in list) || !(list[kind.text].length))
					return undefined

				return (
					<Fragment key={kind.text}>
						<h3 className="text-left text-xl font-bold items-center">
							<img src={kind.icon} className="inline p-0 m-0 w-4 h-4" />
							&nbsp;{kind.text}
						</h3>
						<ul className="font-bold italic">
							{
								list[kind.text].map(({value, id}) => {
									return <div className="flex justify-end items-center" id={id}>
										<li className="flex-1 text-right">{value}</li>
										<CloseButton onClick={() => removeContact(kind.text, id)} isActive={isActive} />
									</div>
								})
							}
						</ul>
					</Fragment>
				)
			})
		}
	</>
}

export default ContactsList
