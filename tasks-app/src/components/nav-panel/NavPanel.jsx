import style from './nav-panel.module.css'

export default function NavPanel() {

    return (
        <section className={style['nav-panel']}>
            <div className={style['personal-menu']}>
                <button className={style['personal-menu-dropdown']}>
                    <span>Bozhidar Kostov</span>
                    <i className={`fa-solid fa-caret-down ${style['personal-arrow']}`}></i>
                </button>
            </div>

            <ul role='list' className={style['main-btns']}>
                <li>
                    <button className={style['main-wrapper']}>
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.924652L0.916656 10H3.66666V18.25H9.16666V12.75H12.8333V18.25H18.3333V10H21.0833L11 0.924652Z" fill="#E3E2E7" />
                        </svg>
                        <span>Home</span>
                    </button>
                </li>
                <li>
                    <button className={style['main-wrapper']}>
                        <div className={style['svg-wrapper']}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4167 0.75H2.57417C1.55667 0.75 0.759167 1.56583 0.759167 2.58333L0.75 15.4167C0.75 16.425 1.55667 17.25 2.57417 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.56583 16.425 0.75 15.4167 0.75ZM15.4167 11.75H11.75C11.75 13.2717 10.5125 14.5 9 14.5C7.4875 14.5 6.25 13.2717 6.25 11.75H2.57417V2.58333H15.4167V11.75Z" fill="#E3E2E7" />
                            </svg>
                        </div>
                        <span>Inbox</span>
                    </button>
                </li>
                <li>
                    <button className={style['main-wrapper']}>
                        <div className={style['svg-wrapper']}>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00001 3.34417L7.90584 6.25L9.19834 4.9575L5.00001 0.75L0.792511 4.9575L2.09418 6.25L5.00001 3.34417ZM5.00001 14.6558L2.09418 11.75L0.801678 13.0425L5.00001 17.25L9.20751 13.0425L7.90584 11.75L5.00001 14.6558Z" fill="#E3E2E7" />
                            </svg>
                        </div>
                        <span>More</span>
                    </button>
                </li>
            </ul>

            <div className={style['resources']}>
                <h2>Resources</h2>

                <ul role='list' className={style['main-btns']}>
                    <li>
                        <button className={style['main-wrapper']}>
                            <div className={style['svg-wrapper']}>
                                <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.75 0.75V8.08333H8.08333V0.75H0.75ZM6.25 6.25H2.58333V2.58333H6.25V6.25ZM0.75 9.91667V17.25H8.08333V9.91667H0.75ZM6.25 15.4167H2.58333V11.75H6.25V15.4167ZM9.91667 0.75V8.08333H17.25V0.75H9.91667ZM15.4167 6.25H11.75V2.58333H15.4167V6.25ZM9.91667 9.91667V17.25H17.25V9.91667H9.91667ZM15.4167 15.4167H11.75V11.75H15.4167V15.4167Z"
                                        fill="white"
                                    />
                                </svg>

                            </div>
                            <span>Team View</span>
                        </button>
                    </li>

                    <li>
                        <button className={style['main-wrapper']}>
                            <div className={style['svg-wrapper']}>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99999 4.58333V0.916666L3.41666 5.5L7.99999 10.0833V6.41667C11.0342 6.41667 13.5 8.8825 13.5 11.9167C13.5 14.9508 11.0342 17.4167 7.99999 17.4167C4.96582 17.4167 2.49999 14.9508 2.49999 11.9167H0.666656C0.666656 15.9683 3.94832 19.25 7.99999 19.25C12.0517 19.25 15.3333 15.9683 15.3333 11.9167C15.3333 7.865 12.0517 4.58333 7.99999 4.58333Z"
                                        fill="white"
                                    />
                                </svg>

                            </div>
                            <span>History</span>
                        </button>
                    </li>

                    <li>
                        <button className={style['main-wrapper']}>
                            <div className={style['svg-wrapper']}>
                                <svg
                                    width={20}
                                    height={16}
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.3333 2.5H10L8.16668 0.666666H2.66668C1.65834 0.666666 0.84251 1.49167 0.84251 2.5L0.833344 13.5C0.833344 14.5083 1.65834 15.3333 2.66668 15.3333H17.3333C18.3417 15.3333 19.1667 14.5083 19.1667 13.5V4.33333C19.1667 3.325 18.3417 2.5 17.3333 2.5ZM17.3333 13.5H2.66668V4.33333H17.3333V13.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span>Files</span>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
}