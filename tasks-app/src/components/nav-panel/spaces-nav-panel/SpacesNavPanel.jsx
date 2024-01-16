import style from './spaces-nav-panel.module.css';


export default function SpacesNavPanel({
    BTN_NAMES,
    activeSetterHandler,
    activeBtn,
    sideSectionState,
}) {
    return (
        <div className={`${style['spaces']} ${style[sideSectionState ? 'closed-nav' : 'nav-panel']}`}>
            <h2 className={`${style['section-heading']} ${style[sideSectionState]}`}>Spaces</h2>

            <ul role='list' className={style['main-btns']}>
                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.marketing}
                        className={
                            `${style['main-wrapper']} 
                                ${style[activeBtn === BTN_NAMES.marketing ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <div className={style['svg-wrapper']}>
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={22} height={22} rx={4} fill="#0E9888" />
                            </svg>

                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.marketing}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.product}
                        className={
                            `${style['main-wrapper']} 
                                ${style[activeBtn === BTN_NAMES.product ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <div className={style['svg-wrapper']}>
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={22} height={22} rx={4} fill="#D93D42" />
                            </svg>


                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.product}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.engineering}
                        className={
                            `${style['main-wrapper']} 
                                ${style[activeBtn === BTN_NAMES.engineering ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <div className={style['svg-wrapper']}>
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={22} height={22} rx={4} fill="#FFC53D" />
                            </svg>

                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.engineering}</span>
                    </button>
                </li>

                <li className={style['nav-btn']}>
                    <button
                        onClick={activeSetterHandler}
                        name={BTN_NAMES.finance}
                        className={
                            `${style['main-wrapper']} 
                                ${style[activeBtn === BTN_NAMES.finance ? 'active-nav-btn' : ""]}`
                        }
                    >
                        <div className={style['svg-wrapper']}>
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={22} height={22} rx={4} fill="#8445BC" />
                            </svg>
                        </div>
                        <span className={style[sideSectionState]}>{BTN_NAMES.finance}</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}