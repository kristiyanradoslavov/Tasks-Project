import style from './resources-nav-panel.module.css';


export default function ResourcesNavPanel({
    BTN_NAMES,
    activeSetterHandler,
    activeBtn,
    sideSectionState,
}) {
    return (
        <div className={`${style['resources']} ${style[sideSectionState ? 'closed-nav' : 'nav-panel']}`}>
            <h2 className={`${style['section-heading']} ${style[sideSectionState]}`}>Resources</h2>

            <ul role='list' className={style['main-btns']}>
                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.teamView}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.teamView ? 'active-nav-btn' : ""]}`
                        }
                    >
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
                        <span className={style[sideSectionState]}>{BTN_NAMES.teamView}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.history}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.history ? 'active-nav-btn' : ""]}`
                        }
                    >
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
                        <span className={style[sideSectionState]}>{BTN_NAMES.history}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.files}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.files ? 'active-nav-btn' : ""]}`
                        }
                    >
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
                        <span className={style[sideSectionState]}>{BTN_NAMES.files}</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}