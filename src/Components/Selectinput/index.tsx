import React from 'react';

import { Container, } from './styles';

// interface ChildrenProps {
// 	children: React.ReactNode;
// }
 
interface IselectInputProps{
	options: { 
		value: String | number;
		label: String | number;
	}[],
}

const Selectinput: React.FC<IselectInputProps> = ({ options }) => {
	return (
		<Container>
			<select> 
			{
				options.map(option => (
				<option value={option.value}>{option.label}</option>
				))
            }
            </select>
		</Container>
	);
}
 
export default Selectinput;