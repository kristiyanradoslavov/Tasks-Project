import style from './nav-panel.module.css'

export default function NavPanel() {

    return (
        <section className={style['nav-panel']}>
            <div className={style['personal-menu']}>
                <button onClick={() => console.log("Hello")} className={style['personal-menu-dropdown']}>
                    <span>Bozhidar Kostov</span>
                    <i className={`fa-solid fa-caret-down ${style['personal-arrow']}`}></i>
                </button>
            </div>
        </section>
    ); s
}