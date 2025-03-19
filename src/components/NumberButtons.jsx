import styles from './NumberButtons.module.css';
import { useContext, useState } from 'react';

const numbers = [];

for (let i = 0; i < 10; i++) {
	numbers.unshift({ id: i, value: i });
}

function NumberButtons({ onNumberChange }) {
	const onClick = (value) => {
		onNumberChange((updatedNumber) => Number(updatedNumber + '' + value));
	};

	const renderNumberButtons = numbers.map(({ id, value }) => {
		return (
			<button
				className={styles.numberButton}
				key={'number' + id}
				onClick={() => {
					onClick(value);
				}}
			>
				{value}
			</button>
		);
	});

	return <div className={styles.numbers}>{renderNumberButtons}</div>;
}

export default NumberButtons;
