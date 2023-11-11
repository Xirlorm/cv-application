import { useState } from 'react'
import Section from './Section'
import CloseButton from './CloseButton'

export default function Education(props) {
	const [school, setSchool] = useState('')
	const [course, setCourse] = useState('')
	const [beginDate, setBeginDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [education, setEducation] = useState([])
	const [id, setId] = useState(982.397)

	const addEducation = (e) => {
		e.preventDefault()
		
		if (!(school || course || beginDate || endDate))
			return

		setEducation(list => [
			...(list.map(item => ({...item}))),
			{ school, course, beginDate, endDate, id},
		])

		setSchool('')
		setCourse('')
		setBeginDate('')
		setEndDate('')
		setId(id => id +  29.133)
	}

	const removeEducation = (id) => {
		setEducation(list => list.filter(item => item.id !== id))
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
						education.map(item => <li key={item.id} className='flex p-0.5 my-0.5 mx-2 items-center'>
								<div className='text-cyan-600 font-bold italic px-1 py-0'	>
									<div className="from border-cyan-500 border-b-2 m-0 py-1">{item.beginDate}</div>
									<div className="to m-0 py-1">{item.endDate}</div>
								</div>
								<div className="flex-1 border-l-2 my-0.5 px-1 border-cyan-500 ml-3 font-bold">
									<div className='text-right p-0 m-0'>
										<CloseButton onClick={() => removeEducation(item.id)} isActive={props.active}/>
									</div>
									<h3 className="school m-0 py-0.5 text-xl">{item.school}</h3>
									<div className="course m-0 py-0.5 italic">{item.course}</div>
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
					<div className='flex-1'>
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
					<div className='flex-1'>
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
