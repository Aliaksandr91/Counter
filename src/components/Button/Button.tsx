import React from "react";
import "./Button.css"
type PropsType = {
    name: string
    callBack: ()=> void
    className: string
}

export const Button = (props: PropsType) => {
    return (
        <button onClick={props.callBack} className={props.className}>{props.name}</button>
    )
}