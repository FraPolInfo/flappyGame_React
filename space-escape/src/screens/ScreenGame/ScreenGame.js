import "./ScreenGame.css"
import React, { useState, useEffect } from 'react'
import audio from '../../assets/audio/MountainTrials.mp3'
/* hooks functions */
import StartMenu from "../StartMenu/StartMenu"
import CoreGame from "../CoreGame/CoreGame"
import RulesGame from "../RulesGame/RulesGame"
/* func Components */
import Button from "../../components/funcComponents/Button/Button"


const ScreenGame = () => {

    const [state, setState] = useState(
        {
            music: new Audio(audio),
            soundFlag: false,
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
        let flag = null;
        if (state.soundFlag === false) {
            state.music.play();
            state.music.volume = 0.1;
            state.music.loop = true;
            flag = true;
        } else {
            state.music.pause();
            flag = false;
        }
        setState({
            ...state,
            soundFlag: flag,
        })
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
        <div className="cover-screen-game">

            <div className="screen-game-background">
            </div>
            <div className="screen-game">
                <Button
                    clickButton={activeSound}
                    label="sound"
                    specialClass="sound-bottom"
                />
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