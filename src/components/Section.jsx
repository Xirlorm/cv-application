import EditButton from "./EditButton"

export default function Section(props) {
	const toggleEditState = () => {
		props.setActiveSection(!props.active ? props.className : '')
	}
	
	return (
		<div className={`section ${props.className} p-2 my-2 mx-2 h-auto`}>
			<div className="title">
				{
					(props.section === 'intro')
					? undefined
					: <h3 className='text-capitalize'>{props.section}</h3>
				}
				<EditButton onClick={toggleEditState} className={props.editEnabled ? 'edit-btn' : 'hidden'} />
			</div>
			{props.children}
		</div>
	)
}
