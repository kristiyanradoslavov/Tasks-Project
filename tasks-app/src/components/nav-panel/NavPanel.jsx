import style from './nav-panel.module.css'

export default function NavPanel() {
    return (
        <section className={style['nav-panel']}>
            <div>
                <span>Bozhidar Kostov</span>
                <button>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
        </section>
    );
}