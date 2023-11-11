import CloseButton from "./CloseButton"
import LinkIcon from "/src/assets/icons/link.svg"

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
						<h3 className="mx-1 my-0 text-l font-bold text-left flex flex-1">
							<img src={LinkIcon} className="w-4 h-4 m-0 p-0" />&nbsp;
							{item.platform}
						</h3>
						<div className="mx-2 text-l font-extrabold text-right flex-1">{item.username}</div>
						<CloseButton isActive={props.active} onClick={() => deleteItem(item.id)} />
					</li>
				)
			})}
		</ul>
	)
}
