import MainPanel from "../main-panel/MainPanel";
import NavPanel from "../nav-panel/NavPanel";

import styles from './main.module.css'

export default function Main() {
    return (    
        <main className={styles['main-section']}>
            <NavPanel />

            <MainPanel />
            
        </main>

    );
}