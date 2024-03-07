import styles from './StatsTable.module.css';

const StatsTable = ({labels, stats}) => {
    return (
        <div>
            <p className='bold-tag'>n.details</p>
            <div className={styles.tableHolder}>
                <table className={styles.statsTable}>
                    <tbody>
                        <tr>
                            <th>{labels[0]}</th>
                            <th>{labels[1]}</th>
                            <th>{labels[2]}</th>
                            <th>{labels[3]}</th>
                        </tr>
                        <tr>
                            <td>{stats[0]}</td>
                            <td>{stats[1]}</td>
                            <td>{stats[2]}</td>
                            <td>{stats[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StatsTable;