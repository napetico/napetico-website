import styles from './Accordion.module.css';
import { useState } from 'react';

const Accordion = ({data}) => {

    const [activeItem, setActiveItem] = useState(null);

    const toggleActive = (index) => {
        if (activeItem === index) {
            return setActiveItem(null)
        }
        
        setActiveItem(index);
    }

    return (
        <ul className={styles.accordionList}>
            
            {data.map((item, index) => {
                return (
                    <li className={styles.accordionItem} key={index}>
                        <div className={styles.accordionQuestion} onClick={() => toggleActive(index)}>
                            <div className={styles.togglePhaseTag}>
                                <p className={styles.togglePhaseText}>{item.tag}</p>
                            </div>
                            <div className={styles.toggleInfoBox}>
                                <h3 className={styles.toggleTitle}>{item.title}</h3>
                                <p className={styles.toggleText}>{item.span}</p>
                            </div>
                            <div className={activeItem === index ? styles.toggleArrowBoxActive : styles.toggleArrowBox}>
                                <img className={styles.toggleArrow} src='./images/napo-accordion-arrow.svg' alt=''/>
                            </div>
                        </div>
                        <div className={activeItem === index ? styles.accordionAnswerActive : styles.accordionAnswer}>
                            <p className={styles.accordionAnswerText}>{item.content}</p>
                        </div>
                    </li>
                )
            })}

        </ul>
    )
}

export default Accordion;