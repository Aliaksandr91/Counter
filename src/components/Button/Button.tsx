import React from "react";
import "./Button.css"
type PropsType = {
    name: string
    callBack: ()=> void
    disabledStatus: boolean
}

export const Button = (props: PropsType) => {
    return (
        <button onClick={props.callBack} disabled={props.disabledStatus}>{props.name}</button>
    )
}