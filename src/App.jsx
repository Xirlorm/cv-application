import { useState } from 'react'
import '/src/styles/index.css'
import Photo from '/src/components/Photo.jsx'
import Intro from '/src/components/Intro.jsx'
import Profile from '/src/components/Profile.jsx'
import Contacts from '/src/components/Contacts.jsx'
import SocialMedia from '/src/components/SocialMedia.jsx'
import Education from '/src/components/Education.jsx'
import Experience from '/src/components/Experience.jsx'
import Skills from '/src/components/Skills.jsx'
import Reference from '/src/components/Reference.jsx'
import SettingsButton from '/src/components/SettingsButton.jsx'

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
    <div className="bg-teal-700 p-1 font-sans">
			<div className="header p-3 -m-1">
				<h1 className="text-3xl font-bolder text-white">&lt;/CV Build&gt;</h1>
				<SettingsButton
					onClick={toggleEditStatus}
				/>
			</div>
			<div className="cv text-center m-3 rounded-xl shadow-lg shadow-stone-900">
				<div className="side p-0 pb-5 m-0 bg-blue-400">
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
				<div className='main p-0 py-3 m-0 bg-gray-300'>
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
