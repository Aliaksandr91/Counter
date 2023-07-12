import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    const [count, setCount] = useState(0)
    const addCount = () => {
        if (count < 5) {
           setCount(count + 1)
        }
        return
    }
    const resetCount = () => setCount(0)

  return (
    <div className="App">
        <Counter
            count={ count }
            addCount={ addCount }
            resetCount={ resetCount }
        />
    </div>
  );
}

export default App;

//--------------------------------------------------------------------
// import React, {useState} from 'react';
// import './App.css';
// import {Counter} from "./components/Counter";
//
// function App() {
//     const [count, setCount] = useState(0)
//     const onClickAddHandler = () => {
//         if (count < 5) {
//            return  setCount(count + 1)
//         }
//         return
//     }
//     const onClickResetHandler = () => {
//         return setCount(0)
//     }
//
//     const addCount = () => {
//         if (count < 5) {
//             setCount(count + 1)
//         }
//         return
//     }
//     const resetCount = () => setCount(0)
//
//     return (
//         <div className="App">
//             <div>
//               <div className='count-screen'>{count}</div>
//               <div>
//                 <button className={count < 5 ? 'active' : 'disabled'} onClick={onClickAddHandler}>inc</button>
//                 <button className={count <= 5 && count !== 0 ? 'active' : 'disabled'} onClick={onClickResetHandler}>reset</button>
//               </div>
//             </div>
//         </div>
//     );
// }