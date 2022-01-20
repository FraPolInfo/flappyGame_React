import "./CoreGame.css"
import React, { useState, useEffect } from "react"

const CoreGame = () => {

    let topBorder = 10
    let bottomBorder = 90
    let jumpingSpeed = 4
    let fallingSpeed = 4

    const [state, setState] = useState({
        top: 50,
        startingFlag: true,
        jumpingFlag: false
    })

    /* Component Did Update
    /*continua a muovere il personaggio in basso finchè la jumpingFlag è falsa, e
    e verso l'alto quando è vera.*/
    useEffect(() => {
        if (state.startingFlag === false) {

            let top = null;
            if (state.jumpingFlag) {
                top = state.top - jumpingSpeed
            } else {
                top = state.top + fallingSpeed
            }

            /* Controlla che il personaggio non stia saltando oltre il limite superiore   o cadendo oltre il limite inferiore*/
            if ((state.top > topBorder && state.jumpingFlag) || (state.top < bottomBorder && !state.jumpingFlag)) {
                const interval = setTimeout(() => {
                    setState({
                        ...state,
                        top: top
                    })
                }, 30)

                return () => clearTimeout(interval)
            }
        }
    })
    /* Component Did Update listening state.top  */
    useEffect(() => {
            endGame()
    }, [state.top])
    /*  */
    /* funzioni movimento */
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
    /* funzione run game */
    const startGame = () => {
        setState({
            ...state,
            startingFlag: false,
        })
    }
    /* funzione end game */
    const endGame = () => {
        if (state.top === bottomBorder || state.top === topBorder) {
            alert("Hai perso!")
            setState({
                ...state,
                top: 50,
                startingFlag: true
            })
        }
    }

    return (
        <div className="core-game" onClick={startGame} onMouseDown={characterJumping} onMouseUp={characterFalling}>
            <div
                className="top-margin bg-red"
                style={{ top: (topBorder).toString() + "%" }}
            >
                sopra
            </div>
            <span className="character" style={{ left: "50%", top: state.top.toString() + "%" }}>XXXXXXX</span>
            {
                state.startingFlag === true &&
                <span className="start-game" > Clicca per Cominciare </span>
            }
            <div
                className="bottom-margin bg-red"
                style={{ top: (bottomBorder).toString() + "%" }}
            >sotto
            </div>
        </div>
    );
}

export default CoreGame;