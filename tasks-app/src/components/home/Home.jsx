import styles from './home.module.css'

export default function Home() {
    return (

        <section className={styles["home-wrapper"]}>
            <header className={styles['home-header']}>
                <div className={styles['head-label']}>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0002 0.274536L0.0834961 11H3.3335V20.75H9.8335V14.25H14.1668V20.75H20.6668V11H23.9168L12.0002 0.274536Z" fill="#E3E2E7" />
                    </svg>

                    <span className={styles['text']}>
                        Home
                    </span>
                </div>
            </header>

            <main>
                <div className={styles['main-section-header']}>
                    <div className={styles['greeting-msg']}>
                        <p>Good Evening, Someone</p>
                    </div>
                    
                    <div className={styles['add-task-btn']}>
                        <button>Add Task</button>
                    </div>
                </div>
            </main>


        </section>
    );
}