'use strict'

import closeIcon from '/src/assets/icons/close.svg'

export default function List({list, setList}) {
	if (list.length === 0) {
		return
	}

	return (
		<ul>
			{list.map(item => {
				return (
					<li key={item.key}>
						{item.icon !== undefined ? <img src={item.icon} alt="Icon" /> : undefined}
						<div>{item.value}</div>
						<button
							key={item.key} 
							className="close" 
							onClick={(e) => {
								setList((list) => {
									list.filter((value) => {
										if (`${value.key}` === e.target.key) {
											return
										}

										return value;
									})
								})
							}}
						>
							<img src={closeIcon} alt="Close button icon" />
						</button>
					</li>
				)
			})}
		</ul>
	)
}
