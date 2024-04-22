import styles from './tasks-notes.module.css'


export default function TasksNotes() {
    return (
        <>
            <section className={styles['tasks-notes']}>
                <div className={styles['switch-section']}>
                    <p>Recent Notes</p>

                    <div className={styles['switch-button']}>
                        <span>Switch to Tasks</span>
                        <label className={styles['switch']}>
                            <input type="checkbox" />
                            <span className={styles['slider']}></span>
                        </label>
                    </div>
                </div>

                <ul className={styles['notes-list']} role='list'>

                    <li className={styles['single-note']}>
                        <p className={styles['note-subject']}>
                            This is the subject
                        </p>

                        <div className={styles['note-preview-wrapper']}>
                            <span className={styles['note-day']}>
                                Monday
                            </span>

                            <span className={styles['note-preview']}>
                                This is the actual note preview
                            </span>
                        </div>

                        <div className={styles['note-space']}>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3335 2.00001H7.00016L5.66683 0.666672H1.66683C0.933496 0.666672 0.340163 1.26667 0.340163 2.00001L0.333496 10C0.333496 10.7333 0.933496 11.3333 1.66683 11.3333H12.3335C13.0668 11.3333 13.6668 10.7333 13.6668 10V3.33334C13.6668 2.60001 13.0668 2.00001 12.3335 2.00001ZM12.3335 10H1.66683V3.33334H12.3335V10Z" fill="#9B9BAC" />
                            </svg>
                            <p>
                                Marketing
                            </p>
                        </div>
                    </li>

                    <li className={styles['single-note']}>
                        <p className={styles['note-subject']}>
                            This is the subject
                        </p>

                        <div className={styles['note-preview-wrapper']}>
                            <span className={styles['note-day']}>
                                Monday
                            </span>

                            <span className={styles['note-preview']}>
                                This is the actual note preview
                            </span>
                        </div>

                        <div className={styles['note-space']}>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3335 2.00001H7.00016L5.66683 0.666672H1.66683C0.933496 0.666672 0.340163 1.26667 0.340163 2.00001L0.333496 10C0.333496 10.7333 0.933496 11.3333 1.66683 11.3333H12.3335C13.0668 11.3333 13.6668 10.7333 13.6668 10V3.33334C13.6668 2.60001 13.0668 2.00001 12.3335 2.00001ZM12.3335 10H1.66683V3.33334H12.3335V10Z" fill="#9B9BAC" />
                            </svg>
                            <p>
                                Marketing
                            </p>
                        </div>
                    </li>

                    <li className={styles['single-note']}>
                        <p className={styles['note-subject']}>
                            This is the subject
                        </p>

                        <div className={styles['note-preview-wrapper']}>
                            <span className={styles['note-day']}>
                                Monday
                            </span>

                            <span className={styles['note-preview']}>
                                This is the actual note preview
                            </span>
                        </div>

                        <div className={styles['note-space']}>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3335 2.00001H7.00016L5.66683 0.666672H1.66683C0.933496 0.666672 0.340163 1.26667 0.340163 2.00001L0.333496 10C0.333496 10.7333 0.933496 11.3333 1.66683 11.3333H12.3335C13.0668 11.3333 13.6668 10.7333 13.6668 10V3.33334C13.6668 2.60001 13.0668 2.00001 12.3335 2.00001ZM12.3335 10H1.66683V3.33334H12.3335V10Z" fill="#9B9BAC" />
                            </svg>
                            <p>
                                Marketing
                            </p>
                        </div>
                    </li>
                    
                    <li className={styles['single-note']}>
                        <p className={styles['note-subject']}>
                            This is the subject
                        </p>

                        <div className={styles['note-preview-wrapper']}>
                            <span className={styles['note-day']}>
                                Monday
                            </span>

                            <span className={styles['note-preview']}>
                                This is the actual note preview
                            </span>
                        </div>

                        <div className={styles['note-space']}>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3335 2.00001H7.00016L5.66683 0.666672H1.66683C0.933496 0.666672 0.340163 1.26667 0.340163 2.00001L0.333496 10C0.333496 10.7333 0.933496 11.3333 1.66683 11.3333H12.3335C13.0668 11.3333 13.6668 10.7333 13.6668 10V3.33334C13.6668 2.60001 13.0668 2.00001 12.3335 2.00001ZM12.3335 10H1.66683V3.33334H12.3335V10Z" fill="#9B9BAC" />
                            </svg>
                            <p>
                                Marketing
                            </p>
                        </div>
                    </li>
                </ul>

            </section>
        </>
    )
}