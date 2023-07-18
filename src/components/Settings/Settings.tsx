import React from "react";
import {Button} from "../Button/Button";
import './Settings.css'
type PropsType = {
    setValue: () => void
}
export const Settings = (props:PropsType) => {
    return(
        <div className='settings'>
            <div className='settings__screen'>
                <div>max value<input type="number"/></div>
                <div>start value<input type="number"/></div>
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={props.setValue} className={'active'}/>
            </div>
        </div>
    )
}