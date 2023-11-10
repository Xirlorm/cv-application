import { useState } from 'react'
import Section from './Section'

export default function Education(props) {
	const [school, setSchool] = useState('')
	const [course, setCourse] = useState('')
	const [beginDate, setBeginDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [education, setEducation] = useState([])

	const addEducation = (e) => {
		e.preventDefault()
		
		if (!(school || course || beginDate || endDate))
			return

		setEducation(list => [
			...(list.map(item => ({...item}))),
			{ school, course, beginDate, endDate },
		])

		setSchool('')
		setCourse('')
		setBeginDate('')
		setEndDate('')
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
				<ul>
					{
						education.map(item => <li key={item.id}>
								<div>
									<div className="from">From: {item.beginDate}</div>
									<div className="to">To: {item.endDate}</div>
								</div>
								<div>
									<div className="school">{item.school}</div>
									<div className="course">{item.course}</div>
								</div>
							</li>
						)
					}
				</ul>
			</div>
			<form onSubmit={addEducation} className={props.active ? '' : 'hidden'}>
				<div>
					<label htmlFor="school">
						<input
							type="text"
							id='school'
							placeholder='School'
							onChange={(e) => setSchool(e.target.value)}
							value={school}
						/>
					</label>		
				</div>	
				<div>
					<label htmlFor="course">
						<input
							type="text"
							id='course'
							placeholder='Study/Course'
							onChange={(e) => setCourse(e.target.value)}
							value={course}
						/>
					</label>		
				</div>	
				<div className='dates flex flex-wrap'>
					<div>
						<div className='text-center'>From</div>
						<label htmlFor="begin-date">
							<input
								type="number"
								id='begin-date'
								onChange={(e) => setBeginDate(e.target.value)}
								value={beginDate}
								min={1900}
							/>
						</label>		
					</div>	
					<div>
						<div className='text-center'>To</div>
						<label htmlFor="end-date">
							<input
								type="number"
								id='end-date'
								onChange={(e) => setEndDate(e.target.value)}
								value={endDate}
								min={1900}
							/>
						</label>		
					</div>	
				</div>
				<input type="submit" value='Add' />
			</form>
		</Section>
	)
}
