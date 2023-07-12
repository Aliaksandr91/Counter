import React from "react";
import {Button} from "../Button/Button";
import './Counter.css'

type PropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
}

export const Counter = (props:PropsType) => {
    return (
        <div className='counter'>
            <div className='counter__screen'>{props.count}</div>
            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.addCount}
                    className={props.count < 5 ? 'active' : 'disabled'}
                />
                <Button
                    name={'reset'}
                    callBack={props.resetCount}
                    className={props.count <= 5 && props.count !== 0 ? 'active' : 'disabled'}
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