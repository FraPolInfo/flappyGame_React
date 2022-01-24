import "./ScreenGame.css"
import React, { useState, useEffect } from 'react'
import audio from '../../assets/audio/MountainTrials.mp3'
/* hooks functions */
import StartMenu from "../StartMenu/StartMenu"
import CoreGame from "../CoreGame/CoreGame"
import RulesGame from "../RulesGame/RulesGame"


const ScreenGame = () => {

    const music = new Audio(audio);
    const soundFlag = false;
    const [state, setState] = useState(
        {
            character: null,
            showStartMenu: true,
            showRunGame: false,
            showRulesGame: false
        }
    )
    /* Component did Mount */
    useEffect(() => {
        localStorage.setItem("points", 0);
    }, [])
    /*  */
    /* attiva audio */
    const activeSound = () => {
        if (soundFlag === false) {
            music.play()
            soundFlag = true;
        } else {
            music.pause()
            soundFlag = false;
        }
    }
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
                <button onClick={activeSound}>attiva audio</button>
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
                        character={state.character}
                    />
                }
                {
                    state.showRulesGame === true &&
                    <RulesGame callbackReturnToStart={showRules} />
                }
            </div>
        </div>
    )
}
export default ScreenGame










/*        */