import { useState } from 'react'
import '/src/styles/index.css'
import settingsIcon from '/src/assets/icons/settings.svg'
import Photo from '/src/components/Photo.jsx'
import Intro from '/src/components/Intro.jsx'
import Profile from '/src/components/Profile.jsx'
import Contacts from '/src/components/Contacts.jsx'
import SocialMedia from '/src/components/SocialMedia.jsx'
import Education from '/src/components/Education.jsx'
import Experience from '/src/components/Experience.jsx'
import Skills from '/src/components/Skills.jsx'
import Reference from '/src/components/Reference.jsx'
import SettingsButton from './components/SettingsButton'

export default function App() {
	const [activeSection, setActiveSection] = useState('')
	const [editEnabled, setEditEnabled] = useState(false)

	const toggleEditStatus = () => {
		setEditEnabled(status => {
			status = !status;
			setActiveSection(!status ? '' : activeSection)

			return status
		})
		
	}

  return (
    <div className="bg-stone-800 font-sans">
			<div className="header bg-cyan-700 py-2 px-3 text-black">
				<h1 className="text-3xl text-white">CV Builder</h1>
				<SettingsButton onClick={toggleEditStatus} />
			</div>
			<div className="cv text-center px-2 mx-1 my-4 rounded-md">
				<div className="side p-0 pb-5 m-0 bg-cyan-600">
					<Photo editEnabled={editEnabled}/>
					<Intro
						editEnabled={editEnabled}
						active={activeSection === 'intro'}
						setActiveSection={setActiveSection}
						section='intro'
						className='intro'
					/>
					<Profile
						editEnabled={editEnabled}
						active={activeSection === 'profile'}
						setActiveSection={setActiveSection}
						section='profile'
						className='profile'
					/>
					<Contacts
						editEnabled={editEnabled}
						active={activeSection === 'contacts'}
						setActiveSection={setActiveSection}
						section='contacts'
						className='contacts'
					/>
					<SocialMedia
						editEnabled={editEnabled}
						active={activeSection === 'social-media'}
						setActiveSection={setActiveSection}
						section='social media'
						className='social-media'
					/>
				</div>
				<div className='main p-0 py-5 m-0 bg-gray-300'>
					<Education
						editEnabled={editEnabled}
						active={activeSection === 'education'}
						setActiveSection={setActiveSection}
						section='education'
						className='education'
					/>
					<Experience
						editEnabled={editEnabled}
						active={activeSection === 'experience'}
						setActiveSection={setActiveSection}
						section='experience'
						className='experience'
					/>
					<Skills
						editEnabled={editEnabled}
						active={activeSection === 'skills'}
						setActiveSection={setActiveSection}
						section='skills'
						className='skills'
					/>
					<Reference
						editEnabled={editEnabled}
						active={activeSection === 'reference'}
						setActiveSection={setActiveSection}
						section='reference'
						className='reference'
					/>
				</div>
			</div>
    </div>
  )
}
