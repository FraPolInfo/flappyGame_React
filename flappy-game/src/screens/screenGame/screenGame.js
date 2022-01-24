import "./ScreenGame.css"
import React, { useState, useEffect } from 'react'

/* hooks functions */
import StartMenu from "../StartMenu/StartMenu"
import CoreGame from "../CoreGame/CoreGame"


const ScreenGame = () => {

    const [state, setState] = useState(
        {
            character: null,
            showStartMenu: true,
            showRunGame: false,
        }
    )
    /* Component did Mount */
    useEffect(() => {
        localStorage.setItem("points", 0);
    }, [])

    /*  */
    /* funzione di visualizzazione */
    const showScreens = (string) => {
        let showRunGame = null;
        let showStartMenu = null;
        if (state.showRunGame === false) {
            showRunGame = true;
            showStartMenu = false
        } else if (state.showRunGame === true) {
            showRunGame = false;
            showStartMenu = true;
        }
        setState(
            {
                ...state,
                showRunGame: showRunGame,
                showStartMenu: showStartMenu,
                character: string
            }
        )
    }


    return (
        <div>
            <div className="screen-game-background">
            </div>
            <div className="screen-game">
                {
                    state.showStartMenu === true &&
                    <StartMenu
                        callbackRunGame={showScreens}
                    />
                }
                {
                    state.showRunGame === true &&
                    <CoreGame
                        callbackReturnToStart={showScreens}
                        character={state.character}
                    />
                }
            </div>
        </div>
    )
}
export default ScreenGame










/*        */