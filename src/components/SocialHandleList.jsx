import CloseButton from "./CloseButton"

export default function SocialHandleList(props) {

	const deleteItem = (id) => {
		props.setSocialHandles((list) => {
			return list.filter(item => item.id !== id)
		})
	}

	return (
		<ul>
			{props.socialHandles.map(item => {
				return (
					<li key={item.id} className="px-2 flex flex-wrap justify-evenly items-center">
						<h3 className="mx-1 my-0 text-l font-bold text-left text-slate-700 flex-1">{item.platform}</h3>
						<div className="mx-2 text-l font-extrabold text-slate-800 text-right flex-1">{item.username}</div>
						<CloseButton isActive={props.active} onClick={() => deleteItem(item.id)} />
					</li>
				)
			})}
		</ul>
	)
}
