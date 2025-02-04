import { useEffect, useState } from "react"
import styles from './app.module.css'
const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => {
            const newCount = Math.min(108, prev + 1);
            if (newCount === 108) {
                triggerNotification();
            }
            return newCount;
        });
    }
    const triggerNotification = () => {
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
        audio.play().catch(err => console.error("Failed to play sound", err));
    }
    // useEffect(() => {
    //     document.addEventListener("click", handleClick);
    //     return () => document.removeEventListener("click", handleClick);
    // }, [])
    return (
        <div className={styles.body} onClick={() => handleClick()}>
            {count}
        </div>
    )
}

export default App