import { useState } from 'react';
import style from './nav-panel.module.css'

const BTN_NAMES = {
    home: 'Home',
    inbox: 'Inbox',
    docs: 'Docs',
    goals: 'Goals',
    teamView: 'Team View',
    history: 'History',
    files: 'Files',
    marketing: 'Marketing',
    product: 'Product',
    engineering: 'Engineering',
    finance: 'Finance',
}

export default function NavPanel() {

    const [sideSectionState, setSideSectionState] = useState('');
    const [navPanelClass, setNavPanelClass] = useState('nav-panel');
    const [activeBtn, setActiveBtn] = useState('');

    const activeSetterHandler = (e) => {
        const currentBtn = e.currentTarget.name;
        console.log(currentBtn)
        setActiveBtn(currentBtn)
    }

    const sideSectionBtnHandler = () => {
        if (sideSectionState) {
            openSideSection()
        } else {
            closeSideSection()
        }
    }

    const closeSideSection = () => {
        setSideSectionState('closed')
        setNavPanelClass('closed-nav')
    }

    const openSideSection = () => {
        setSideSectionState('')
        setNavPanelClass('nav-panel')
    }

    return (
        <section className={style[navPanelClass]}>
            <div className={style['personal-menu']}>
                <button className={style['personal-menu-dropdown']}>
                    <span className={style['first-letter']}>B</span>
                    <span className={`${style['first-name']} ${style[sideSectionState]}`}>Bozhidar Kostov</span>
                    <i className={`fa-solid fa-caret-down ${style['personal-arrow']} ${style[sideSectionState]}`}></i>

                </button>

                <button className={style['hide-btn']} onClick={sideSectionBtnHandler}>
                    <svg
                        className='test'
                        width={20}
                        height={14}
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.25917 8.83331H0.833334V10.6666H7.25917V13.4166L10.9167 9.74998L7.25917 6.08331V8.83331ZM12.7408 7.91665V5.16665H19.1667V3.33331H12.7408V0.583313L9.08333 4.24998L12.7408 7.91665Z"
                            fill="#E3E2E7"
                        />
                    </svg>
                </button>
            </div>

            <div className={style['main-section']}>
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

            {/* Resources section */}
            <div className={style['resources']}>
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

            {/* Spaces section */}

            <div className={style['spaces']}>
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
        </section>
    );
}