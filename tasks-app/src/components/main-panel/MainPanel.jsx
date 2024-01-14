import styles from './main-panel.module.css'

export default function MainPanel() {
    return (
        <section className={styles['main-panel']}>
            <ul role='list' className={styles['nav-panel']}>
                <li>
                    <svg
                        width={20}
                        height={12}
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.25 7.08325H2.41667V4.91659H0.25V7.08325ZM0.25 11.4166H2.41667V9.24992H0.25V11.4166ZM0.25 2.74992H2.41667V0.583252H0.25V2.74992ZM4.58333 7.08325H19.75V4.91659H4.58333V7.08325ZM4.58333 11.4166H19.75V9.24992H4.58333V11.4166ZM4.58333 0.583252V2.74992H19.75V0.583252H4.58333Z"
                            fill="#E3E2E7"
                        />
                    </svg>

                    <span>List</span>
                </li>

                <li>
                    <svg
                        width={17}
                        height={13}
                        viewBox="0 0 17 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.16666 12.4999H10.75V0.583252H6.16666V12.4999ZM0.666664 12.4999H5.25V0.583252H0.666664V12.4999ZM11.6667 0.583252V12.4999H16.25V0.583252H11.6667Z"
                            fill="#E3E2E7"
                        />
                    </svg>

                    <span>Kanban</span>
                </li>

                <li>
                    <svg
                        width={20}
                        height={22}
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.3333 2.75008H16.4167V0.916748H14.5833V2.75008H5.41667V0.916748H3.58333V2.75008H2.66667C1.65833 2.75008 0.833332 3.57508 0.833332 4.58341V19.2501C0.833332 20.2584 1.65833 21.0834 2.66667 21.0834H17.3333C18.3417 21.0834 19.1667 20.2584 19.1667 19.2501V4.58341C19.1667 3.57508 18.3417 2.75008 17.3333 2.75008ZM17.3333 19.2501H2.66667V7.33341H17.3333V19.2501Z"
                            fill="#E3E2E7"
                        />
                    </svg>

                    <span>Calender</span>
                </li>

                <li>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75ZM13.5833 9.91667H9.91667V13.5833H8.08333V9.91667H4.41667V8.08333H8.08333V4.41667H9.91667V8.08333H13.5833V9.91667Z"
                            fill="#E3E2E7"
                        />
                    </svg>

                    <span>Add</span>
                </li>
            </ul>
        </section>
    );
}