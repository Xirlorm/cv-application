import CloseIcon from '../assets/icons/close.svg'

export default function CloseButton({onClick, isActive}) {
	return (
		<button
			onClick={onClick}
			className={'close-btn m-0 p-1 rounded-full ' + (isActive ? '' : 'hidden')}>
			<img src={CloseIcon} alt="Close" />
		</button>
	)
}
