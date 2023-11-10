import { useState } from "react"
import Section from "./Section"

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
								<li key={item.id}>
									<div>
										<div className="from">{item.beginDate}</div>
										<div className="to">{item.endDate}</div>
									</div>
									<div>
										<h3 className="company">{item.company}</h3>
										<div className="position">{item.position}</div>
										<div className="duties">{item.duties}</div>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
			<form onSubmit={addExperience} className={props.active ? '' : 'hidden'}>
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
				<input type="submit" value="Add" />
			</form>
		</Section>
	)
}
