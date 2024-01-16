import style from './main-nav-panel.module.css'

export default function MainNavPanel({
    BTN_NAMES,
    activeSetterHandler,
    activeBtn,
    sideSectionState,
}) {
    return (
        <div className={`${style['main-section']} ${style[sideSectionState ? 'closed-nav' : 'nav-panel']}`}>
            <ul role='list' className={style['main-btns']}>
                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.home}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.home ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.924652L0.916656 10H3.66666V18.25H9.16666V12.75H12.8333V18.25H18.3333V10H21.0833L11 0.924652Z" fill="#E3E2E7" />
                        </svg>
                        <span className={style[sideSectionState]}>{BTN_NAMES.home}</span>
                    </button>
                </li>
                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.inbox}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.inbox ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <div className={style['svg-wrapper']}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4167 0.75H2.57417C1.55667 0.75 0.759167 1.56583 0.759167 2.58333L0.75 15.4167C0.75 16.425 1.55667 17.25 2.57417 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.56583 16.425 0.75 15.4167 0.75ZM15.4167 11.75H11.75C11.75 13.2717 10.5125 14.5 9 14.5C7.4875 14.5 6.25 13.2717 6.25 11.75H2.57417V2.58333H15.4167V11.75Z" fill="#E3E2E7" />
                            </svg>
                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.inbox}</span>
                    </button>
                </li>
                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.docs}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.docs ? 'active-nav-btn' : ""]}`
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
                                    d="M9.83332 0.833374H2.49999C1.49166 0.833374 0.675823 1.65837 0.675823 2.66671L0.666656 17.3334C0.666656 18.3417 1.48249 19.1667 2.49082 19.1667H13.5C14.5083 19.1667 15.3333 18.3417 15.3333 17.3334V6.33337L9.83332 0.833374ZM11.6667 15.5H4.33332V13.6667H11.6667V15.5ZM11.6667 11.8334H4.33332V10H11.6667V11.8334ZM8.91666 7.25004V2.20837L13.9583 7.25004H8.91666Z"
                                    fill="#E3E2E7"
                                />
                            </svg>

                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.docs}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.goals}
                        className={
                            `${style['main-wrapper']} 
                        ${style[activeBtn === BTN_NAMES.goals ? 'active-nav-btn' : ""]}`
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
                                    d="M15.4167 2.58333H13.5833V0.75H4.41667V2.58333H2.58333C1.575 2.58333 0.75 3.40833 0.75 4.41667V5.33333C0.75 7.67083 2.51 9.5775 4.77417 9.86167C5.35167 11.2367 6.58917 12.2725 8.08333 12.575V15.4167H4.41667V17.25H13.5833V15.4167H9.91667V12.575C11.4108 12.2725 12.6483 11.2367 13.2258 9.86167C15.49 9.5775 17.25 7.67083 17.25 5.33333V4.41667C17.25 3.40833 16.425 2.58333 15.4167 2.58333ZM2.58333 5.33333V4.41667H4.41667V7.91833C3.35333 7.53333 2.58333 6.525 2.58333 5.33333ZM15.4167 5.33333C15.4167 6.525 14.6467 7.53333 13.5833 7.91833V4.41667H15.4167V5.33333Z"
                                    fill="#E3E2E7"
                                />
                            </svg>
                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.goals}</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}