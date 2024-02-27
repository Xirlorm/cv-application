import { useState } from "react"
import Section from "./Section"
import CloseButton from './CloseButton'

export default function Experience(props) {
	const [company, setCompany] = useState('')
	const [position, setPosition] = useState('')
	const [duties, setDuties] = useState('')
	const [beginDate, setBeginDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [experiences, setExperiences] = useState([])
	const [id, setId] = useState(982.397)

	const addExperience = (e) => {
		e.preventDefault()
		
		if (!(company || position || duties || beginDate || endDate))
			return

		setExperiences(list => [
			...(list.map(item => ({...item}))),
			{
				company,
				position,
				duties,
				beginDate,
				endDate,
				id,
			}
		])

		setCompany('')
		setPosition('')
		setDuties('')
		setBeginDate('')
		setEndDate('')
		setId(id => id +  29.133)
	}

	const removeExperience = (id) => {
		setExperiences(list => list.filter(item => item.id !== id))
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
						experiences.map(item => {
							return (
								<li key={item.id} className='flex p-0.5 my-0.5 mx-2 items-center'>
									<div className='text-cyan-600 font-bold italic px-1 py-0'>
										<div className="from border-cyan-500 border-b-2 m-0 py-1">{item.beginDate}</div>
										<div className="to m-0 py-1">{item.endDate}</div>
									</div>
									<div className="flex-1 border-l-2 my-0.5 px-1 border-cyan-500 ml-3 font-bold">
										<div className='text-right p-0 m-0'>
											<CloseButton onClick={() => removeExperience(item.id)} isActive={props.active}/>
										</div>
										<h3 className="company font-bold m-0 text-xl py-0.5">{item.company}</h3>
										<div className="position font-bold m-0 py-0.5 italic">{item.position}</div>
										<div className="duties font-bold m-0 py-0.5 italic">{item.duties}</div>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
			<form onSubmit={addExperience} className={props.active ? 'flex flex-col items-center' : 'hidden'}>
				<div>
					<label htmlFor="company">
						<input
							type="text"
							placeholder="Company"
							id="company"
							value={company}
							onChange={(e) => setCompany(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="position">
						<input
							type="text"
							placeholder="Position"
							id="position"
							value={position}
							onChange={(e) => setPosition(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="duties">
						<input
							type="text"
							placeholder="Duties"
							id="duties"
							value={duties}
							onChange={(e) => setDuties(e.target.value)}
						/>
					</label>
				</div>
				<div className='dates'>
					<div className=''>
						<div className='text-center'>From</div>
						<label htmlFor="begin-date">
							<input
								type="date"
								id='begin-date'
								onChange={(e) => setBeginDate(e.target.value)}
								value={beginDate}
								min={1900}
							/>
						</label>		
					</div>	
					<div className=''>
						<div className='text-center'>To</div>
						<label htmlFor="end-date">
							<input
								type="date"
								id='end-date'
								onChange={(e) => setEndDate(e.target.value)}
								value={endDate}
							/>
						</label>		
					</div>	
				</div>
				<input type="submit" value="Add" />
			</form>
		</Section>
	)
}
