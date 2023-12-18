import styles from './ToolLabel.module.css';

const ToolLabel = ({text}) => {
    return(
        <>
        <div className={styles.toolLabelWrapper}>
            <p className={styles.toolLabelText}>{text}</p>
        </div>
        </>
    )
}

export default ToolLabel;