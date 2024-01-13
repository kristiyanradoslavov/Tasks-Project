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
                        {/* <i className="fa-solid fa-house"></i> */}
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.924652L0.916656 10H3.66666V18.25H9.16666V12.75H12.8333V18.25H18.3333V10H21.0833L11 0.924652Z" fill="#E3E2E7" />
                        </svg>
                        <span>Home</span>
                    </button>
                </li>
                <li>
                    <button className={style['main-wrapper']}>
                        {/* <i className="fa-solid fa-inbox"></i> */}
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
                        {/* <i className="fa-solid fa-angles-right"></i> */}
                        <div className={style['svg-wrapper']}>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00001 3.34417L7.90584 6.25L9.19834 4.9575L5.00001 0.75L0.792511 4.9575L2.09418 6.25L5.00001 3.34417ZM5.00001 14.6558L2.09418 11.75L0.801678 13.0425L5.00001 17.25L9.20751 13.0425L7.90584 11.75L5.00001 14.6558Z" fill="#E3E2E7" />
                            </svg>
                        </div>
                        <span>More</span>
                    </button>
                </li>

            </ul>
        </section>
    );
}