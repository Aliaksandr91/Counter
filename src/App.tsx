import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


export const getStartInputValue = () => {
    const valueAsString = localStorage.getItem('inputValue')
    return valueAsString ? JSON.parse(valueAsString) : 0
}
export const getMaxInputValue = () => {
    const valueAsString = localStorage.getItem('counterValueMax')
    return valueAsString ? JSON.parse(valueAsString) : 5
}

function App() {
    let startValue = 0
    let maxValue = getMaxInputValue()

    const getStartValue = () => {
        const valueAsString = localStorage.getItem('counterValue')
        return valueAsString ? JSON.parse(valueAsString) : 0
    }



    const [count, setCount] = useState<number>(getStartValue)


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.getItem('counterValue')
    }, [count])


    const addCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => setCount(getStartInputValue)



    const setValue = (newStartValue: number) => {
        setCount(newStartValue)
    }


    return (
        <div className="App">
            <Settings
                count={count}
                setValue={setValue}
                startValue={startValue}
                maxValue={maxValue}

            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                addCount={addCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App;
