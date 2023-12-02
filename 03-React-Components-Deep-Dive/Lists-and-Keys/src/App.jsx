import { useState, useEffect } from 'react';
import Starwars from './starWars';
import styles from './App.module.css'


function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        // console.log('mount component')
    }, []);

    useEffect(() => {
        // console.log(`Update Component - ${numbers.length}`)
    }, [numbers])

    useEffect(() => {
        // setTimeout(() => setCount(s => s + 1), 1000)
    }, [count])

    const onCLick = () => {
        setNumbers(oldstate => oldstate.slice(0, oldstate.length - 1));
    }

    if(!numbers.length) {
        return null;
    }

    return (
        <div className={styles.app}>
            <Starwars />
            <ul>
                {numbers.map((number, index) => 
                    <li 
                        data-key={index} 
                        key={index}
                        className={styles.listItem}
                    >
                            {number * 2}
                   </li>
            )}
            </ul>
            <p>Count: {count}</p>
            <button onClick={onCLick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}

export default App
