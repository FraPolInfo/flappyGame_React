import "./CoreGame.css"
import React, { useState, useEffect } from "react"

const CoreGame = () => {

    let bottomBorder = 10
    let topBorder = 90
    let jumpingSpeed = 1
    let fallingSpeed = 1

    const [state, setState] = useState({
        top: 20,
        jumpingFlag: false
    })

    /* Component Did Update
    /*continua a muovere il personaggio in basso finchè la jumpingFlag è falsa, e
    e verso l'alto quando è vera.*/
    useEffect(() => {
        let top = null;
        if(state.jumpingFlag) {
            top = state.top - jumpingSpeed 
        } else {
            top = state.top + fallingSpeed
        }

        /* Controlla che il personaggio non stia saltando oltre il limite superiore   o cadendo oltre il limite inferiore*/
        if ( (state.top < topBorder && !state.jumpingFlag) || (state.top > bottomBorder && state.jumpingFlag)) {
            const interval = setTimeout(() => {
                setState({
                    ...state,
                    top: top
                })
            }, 10)

            return () => clearTimeout(interval)
        }
    })
    /*  */
    const characterJumping = () => {
    setState({
            ...state,
            jumpingFlag: true
        })  
    }
    const characterFalling = () => {
        setState({
            ...state,
            jumpingFlag: false
        })
    }

    return (
        <div className="core-game" onMouseDown={characterJumping} onMouseUp={characterFalling}>
            <span className="character" style={{ left: "50%", top: state.top.toString() + "%" }}>XXXXXXX</span>
        </div>
    );
}

export default CoreGame;