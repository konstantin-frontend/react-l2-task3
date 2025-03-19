import { useState } from 'react';
import './App.css';
import NumberButtons from './components/NumberButtons';
import ActionButtons from './components/ActionButtons';
import Monitor from './components/Monitor';

function App() {
	const [enteredNumberFirst, setEnteredNumberFirst] = useState('');
	const [enteredNumberSecond, setEnteredNumberSecond] = useState('');
	const [enteredAction, setEnteredAction] = useState('');
	const [monitorClass, setMonitorClass] = useState('');

	const handleNumberChange = (newNumber) => {
		if (enteredAction === '') {
			setEnteredNumberFirst(newNumber);
			setMonitorClass('');
		} else if (enteredAction === '+') {
			setEnteredNumberSecond(newNumber);
			setMonitorClass('');
		} else if (enteredAction === '-') {
			setEnteredNumberSecond(newNumber);
			setMonitorClass('');
		}
	};

	const handleActionChange = (newAction) => {
		setEnteredAction(newAction);
		if (newAction !== 'C' && enteredAction === '+') {
			setEnteredNumberFirst(enteredNumberFirst + enteredNumberSecond);
			setEnteredNumberSecond('');
			setMonitorClass('monitorResult');
		} else if (newAction !== 'C' && enteredAction === '-') {
			setEnteredNumberFirst(enteredNumberFirst - enteredNumberSecond);
			setEnteredNumberSecond('');
			setMonitorClass('monitorResult');
		} else if (newAction === 'C' || enteredAction === 'C') {
			setEnteredNumberFirst('');
			setEnteredNumberSecond('');
			setEnteredAction('');
			setMonitorClass('');
		}
		if (newAction === '=') {
			setEnteredAction('');
		}
	};

	return (
		<>
			<div className="calculator">
				<Monitor
					typedNumberFirst={enteredNumberFirst}
					typedAction={enteredAction}
					typedNumberSecond={enteredNumberSecond}
					monitorClass={monitorClass}
				/>
				<div className="calculator-body">
					<NumberButtons onNumberChange={handleNumberChange} />
					<ActionButtons onActionChange={handleActionChange} />
				</div>
			</div>
		</>
	);
}

export default App;
