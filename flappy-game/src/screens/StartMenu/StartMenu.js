import "./StartMenu.css"

import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react"

/* funcComponets */
import Button from "../../components/funcComponents/Button/Button";



const StartMenu = (props) => {


    const [state, setState] = useState({
        arrCharacter: ["character1", "character2", "character3"],
        indexOfCharacter: 0
    })

    /* choose character */
    const nextCharacter = () => {
        if (state.indexOfCharacter < state.arrCharacter.length - 1) {
            setState(
                {
                    ...state,
                    indexOfCharacter: state.indexOfCharacter + 1
                }
            )
        }
    }
    const prevCharacter = () => {
        if (state.indexOfCharacter > 0) {
            setState(
                {
                    ...state,
                    indexOfCharacter: state.indexOfCharacter - 1
                }
            )
        }
    }
    /*  */
    const handlerRunGame = () => {
        if (props.callbackRunGame !== undefined) {
            props.callbackRunGame(state.arrCharacter[state.indexOfCharacter]);
        }
    }

    const handlerShowRules = () => {
        if (props.callbackShowRules !== undefined) {
            props.callbackShowRules();
        }       
    }

    return (
        <div className="start-menu">
            <div className="title-svg">
                <svg width="100%" height="100%">
                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text width="500">
                        <textPath href="#curve">
                            Space Escape
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="container-interaction-menu">
                <div className="margin-title"></div>
                <div className={"choose-character"} >
                    <Button label="<" specialClass="prevButton" clickButton={prevCharacter} />
                    <div className={`show-caracter  ${state.arrCharacter[state.indexOfCharacter]}`}>
                    </div>
                    <Button label=">" specialClass="nextButton" clickButton={nextCharacter} />
                </div>
                <div className="container-buttons">
                    <div className="one-button">
                        <Button label={"AVVIA GIOCO"} clickButton={handlerRunGame}></Button>
                    </div>
                    <div className="one-button">
                        <Button label={"COME GIOCARE"} clickButton={handlerShowRules}></Button>
                    </div>
                </div>
            </div>


            Il record Attuale è {localStorage.getItem('points')}

        </div>
    )
}

StartMenu.defaultProps = {

}

StartMenu.propTypes = {
    callbackRunGame: PropTypes.func,
    callbackShowRules: PropTypes.func

};

export default StartMenu;