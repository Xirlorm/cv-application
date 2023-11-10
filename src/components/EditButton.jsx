import EditIcon from '../assets/icons/edit.svg'

export default function EditButton({onClick, className}) {
	return (
		<button
			onClick={onClick}
			className={className}
		>
			<img src={EditIcon} alt="Edit" />
		</button>
	)
}
