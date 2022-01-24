import "./ScreenGame.css"
import React, { useState, useEffect } from 'react'

/* hooks functions */
import StartMenu from "../StartMenu/StartMenu"
import CoreGame from "../CoreGame/CoreGame"
import RulesGame from "../RulesGame/RulesGame"


const ScreenGame = () => {

    const [state, setState] = useState(
        {
            showStartMenu: true,
            showRunGame: false,
            showRulesGame: false
        }
    )
    /* Component did Mount */
    useEffect(() => {
        localStorage.setItem("points", 0);
    }, [])

    /* funzioni di visualizzazione */
    const showScreens = () => {
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
                showStartMenu: showStartMenu
            }
        )
    }
    const showRules = () => {
        let shouldRulesShow = state.showRulesGame
        let shouldStartShow = state.showStartMenu

        setState({
            ...state,
            showRulesGame: !shouldRulesShow,
            showStartMenu: !shouldStartShow
        }) 
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
                        callbackShowRules={showRules}
                    />
                }
                {
                    state.showRunGame === true &&
                    <CoreGame
                        callbackReturnToStart={showScreens}
                    />
                }
                {
                    state.showRulesGame === true &&
                    <RulesGame callbackReturnToStart={showRules}/>
                }
            </div>
        </div>
    )
}
export default ScreenGame










/*        */