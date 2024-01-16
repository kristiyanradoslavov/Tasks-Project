import { useState } from 'react';
import style from './nav-panel.module.css'
import MainNavPanel from './main-nav-panel/MainNavPanel';
import ResourcesNavPanel from './resources-nav-panel/ResourcesNavPanel';

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
    const [activeBtn, setActiveBtn] = useState('');

    const activeSetterHandler = (e) => {
        const currentBtn = e.currentTarget.name;
        setActiveBtn(currentBtn);
    }

    const sideSectionBtnHandler = () => {
        if (sideSectionState) {
            openSideSection();
        } else {
            closeSideSection();
        }
    }

    const closeSideSection = () => {
        setSideSectionState('closed');
    }

    const openSideSection = () => {
        setSideSectionState('');
    }

    return (
        <section className={style[sideSectionState ? 'closed-nav' : 'nav-panel']}>
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

            <MainNavPanel
                BTN_NAMES={BTN_NAMES}
                activeSetterHandler={activeSetterHandler}
                activeBtn={activeBtn}
                sideSectionState={sideSectionState}
            />

            {/* Resources section */}

            <ResourcesNavPanel
                BTN_NAMES={BTN_NAMES}
                activeSetterHandler={activeSetterHandler}
                activeBtn={activeBtn}
                sideSectionState={sideSectionState}
            />

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