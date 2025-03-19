import styles from './Monitor.module.css';

function Monitor({ typedNumberFirst, typedAction, typedNumberSecond, monitorClass }) {
	return (
		<div className={styles.monitor}>
			<div className={monitorClass ? styles.monitorResult : ''}>
				{typedNumberFirst || '0'} {typedAction || ''} {typedNumberSecond || ''}
			</div>
		</div>
	);
}

export default Monitor;
