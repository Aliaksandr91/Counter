import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    let startValue = 0
    let maxValue = 5

    const [count, setCount] = useState(startValue)
    const addCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => setCount(startValue)

    const onStartValueChange = () => {

    }

    const setValue = (newStartValue:number) => {
        setCount(newStartValue)
    }
  return (
    <div className="App">
        <Settings
            count = {count}
            setValue = { setValue }
            startValue = { startValue }
            maxValue={ maxValue }
            onStartValueChange = { onStartValueChange }
        />
        <Counter
            startValue = { startValue }
            maxValue={ maxValue }
            count={ count }
            addCount={ addCount }
            resetCount={ resetCount }
        />
    </div>
  );
}

export default App;
