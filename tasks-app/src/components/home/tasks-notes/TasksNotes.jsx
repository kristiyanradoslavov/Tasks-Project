import styles from './tasks-notes.module.css'


export default function TasksNotes() {
    return (
        <>
            <section className={styles['tasks-notes']}>
                <div className={styles['switch-section']}> 
                    <p>Recent Notes</p>

                    <div className={styles['switch-button']}>
                        <span>Switch to Tasks</span>
                        <button>Switch</button>
                    </div>
                </div>
            </section>
        </>
    )
}