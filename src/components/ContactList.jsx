import { Fragment } from "react"

function ContactsList({list, setList, listIndex}) {

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
						<ul className="text-right font-bold italic">
							{
								list[kind.text].map(({value, id}) => {
									return <li id={id}>{value}</li>
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
