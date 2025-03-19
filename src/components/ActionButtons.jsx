import styles from './ActionButtons.module.css';

const actions = ['C', '+', '-', '='];
const actionsObj = [];

for (let i = 0; i < actions.length; i++) {
	actionsObj.push({ id: i, value: actions[i] });
}

function ActionButtons({ onActionChange }) {
	const onClick = (value) => {
		onActionChange(value);
	};

	const renderActionButtons = actionsObj.map(({ id, value }) => {
		return (
			<button
				className={styles.actionButton}
				key={'action' + id}
				onClick={() => {
					onClick(value);
				}}
			>
				{value}
			</button>
		);
	});
	return <div className={styles.actions}>{renderActionButtons}</div>;
}

export default ActionButtons;
