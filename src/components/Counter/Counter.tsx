import React from "react";
import {Button} from "../Button/Button";
import './Counter.css'

type PropsType = {
    count: number
    startValue: number
    maxValue: number
    addCount: () => void
    resetCount: () => void
}

export const Counter = (props: PropsType) => {
    const value = props.count
    const startValue = props.startValue
    const maxValue = props.maxValue
    return (
        <div className='counter'>
            <div className='counter__screen'>{value}</div>
            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.addCount}
                    className={value < maxValue ? 'active' : 'disabled'}
                />
                <Button
                    name={'reset'}
                    callBack={props.resetCount}
                    className={value <= maxValue && value !== startValue ? 'active' : 'disabled'}
                />
            </div>
        </div>
    )
}
//------------------------------------------------------------
// import React from "react";
// import {Button} from "./Button";
//
// type PropsType = {
//     count: number
//     addCount: () => void
//     resetCount: () => void
// }
//
// export const Counter = (props:PropsType) => {
//     return (
//         <div>
//             <div className='count-screen'>{props.count}</div>
//             <div>
//                 <button className={count < 5 ? 'active' : 'disabled'} onClick={onClickAddHandler}>inc</button>
//                 <button className={count <= 5 && count !== 0 ? 'active' : 'disabled'} onClick={onClickResetHandler}>reset</button>
//             </div>
//         </div>
//     )
// }