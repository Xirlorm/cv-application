import { useState } from 'react'
import Section from './Section'
import CloseButton from './CloseButton'

export default function Skills(props) {
	const [skillList, setSkillList] = useState([])
	const [skill, setSkill] = useState('')
	const [id, setId] = useState(23.317)

	const addSkill = (e) => {
		e.preventDefault()

		if (!skill.trim()) return

		setSkillList(list => {
			const newList = list.map(skill => ({...skill}))
			newList.push({value: skill, id})
			return newList
		})

		setId(id => id + 83.207)
		setSkill('')
	}

	const removeSkill = (id) => {
		setSkillList(list => list.filter(skill => skill.id !== id))
	}

	return (
		<Section
			className={props.className}
			active={props.active}
			editEnabled={props.editEnabled}
			setActiveSection={props.setActiveSection}
			section={props.section}
		>
			<div className="content">
				{skillList.map(skill => {
					return (
						<li
							key={skill.id}
							className="text-l mx-2 my-0 py-0 flex flex-wrap items-center justify-around"
						>
							<div className='text-left font-bold m-0 py-0 px-2 flex-1'>{skill.value}</div>
							<CloseButton
								isActive={props.active}
								onClick={() => removeSkill(skill.id)}
							/>
						</li>
					)
				})}
			</div>
			<form className={props.active ? '' : 'hidden'} onSubmit={addSkill}>
				<div>
					<label htmlFor="skill-input">
						<input
							type="text"
							name="skill"
							id="skill-input"
							placeholder='Skill'
							value={skill}
							onChange={(e) => setSkill(e.target.value)}
						/>
					</label>
				</div>
				<input type="submit" value="Add" />
			</form>
		</Section>
	)
}
