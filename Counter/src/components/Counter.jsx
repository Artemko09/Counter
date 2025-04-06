import styles from './Counter.module.css'
import React, {useState} from 'react'

function Counter(){

    const[num, setNum] = useState(0)

    function plusButton(){
        setNum(num + 1)
    }

    function minusButton(){
        setNum(num - 1)
    }
    function resetButton(){
        setNum(0)
    }

    return(
        <>
            <h1 className={styles.title}>Counter</h1>
            <h1 className={styles.display}>{num}</h1>
            <div>
                <button className={styles.plus} onClick={plusButton}>Plus</button>
                <button className={styles.minus} onClick={minusButton}>Reset</button>
                <button className={styles.reset} onClick={resetButton}>Minus</button>
            </div>
        </>
    )
}

export default Counter