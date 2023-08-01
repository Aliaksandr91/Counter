import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [count, setCount] = useState<number>(() => {
        const storedValue = localStorage.getItem('count');
        return storedValue ? Number(storedValue) : 0;
    });

    const [initialValue, setInitialValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('initialValue');
        return storedValue ? Number(storedValue) : 0;
    });

    const [maxValue, setMaxValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('maxValue');
        return storedValue ? Number(storedValue) : 5;
    });

    const [screenStatus, setscreenStatus] = useState<boolean>(true);

    useEffect(() => {
        // Сохраняем текущее значение счетчика в localStorage
        localStorage.setItem('count', count.toString());
    }, [count]);

    useEffect(() => {
        // Сохраняем начальное значение счетчика в localStorage
        localStorage.setItem('initialValue', initialValue.toString());
    }, [initialValue]);

    useEffect(() => {
        // Сохраняем максимальное значение счетчика в localStorage
        localStorage.setItem('maxValue', maxValue.toString());
    }, [maxValue]);

    const handleIncrementCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const handleResetCount = () => setCount(initialValue)

    const handleApplyChanges = (newInitialValue: number, newMaxValue: number) => {
        setInitialValue(newInitialValue);
        setCount(newInitialValue);
        setMaxValue(newMaxValue);

        localStorage.setItem('initialValue', newInitialValue.toString());
        localStorage.setItem('count', newInitialValue.toString());
        localStorage.setItem('maxValue', newMaxValue.toString());
    };


    return (
        <div className="App">
            <Settings
                initialValue={initialValue}
                maxValue={maxValue}
                onApplyChanges={handleApplyChanges}
            />
            <Counter
                initialValue={initialValue}
                maxValue={maxValue}
                count={count}
                onIncrementCount={handleIncrementCount}
                onResetCount={handleResetCount}
                screenStatus={screenStatus}
            />
        </div>
    );
}

export default App;