import {Scrap} from "../model/scrap";
import React from "react";
import {SnackbarType} from "../model/snackbarType";
import {SnackbarState} from "../model/snackbarState";


export const Snackbar = (state: SnackbarState) => {
    return (
        <div className={"snackdiv"} style={{display: state.isOpen ? 'block' : 'none'}}>

            <p>{state.text} : {state.text}</p>
        </div>
    )
}