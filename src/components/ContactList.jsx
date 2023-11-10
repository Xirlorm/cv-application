import { Fragment } from "react"

function ContactsList({list, setList, listIndex}) {

	return <>
		{
			listIndex.map(kind => {
				if (!(kind.text in list) || !(list[kind.text].length))
					return undefined

				return (
					<Fragment key={kind.text}>
						<h3 className="text-left text-xl text-slate-700 font-bold flex items-center">
							<img src={kind.icon} className="p-0 m-0 w-5 h-5" />&nbsp;{kind.text}
						</h3>
						<ul>
							{
								list[kind.text].map(({value, id}) => {
									return <li id={id} className="text-slate-700 text-right font-bold italic">{value}</li>
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
