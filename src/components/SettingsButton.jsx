import SettingsIcon from '../assets/icons/settings.svg'

export default function SettingsButton({onClick}) {
	return (
		<button onClick={onClick} className='settings-btn border-black rounded-l px-3' >
			<img src={SettingsIcon} alt="Settings" />
		</button>
	)
}

