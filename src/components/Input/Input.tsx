import React, {ChangeEvent} from "react";
import "./Input.css"

type PropsType = {
    value: number
    callBack: (event: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const Input = (props: PropsType) => {
    return (
        <div>
            {props.name}
            <input
                type="number"
                value={props.value}
                onChange={props.callBack}
            />
        </div>
    )
}