import "./StartMenu.css"

import PropTypes from 'prop-types';

/* funcComponets */
import Button from "../../components/funcComponents/Button/Button";



const StartMenu = (props) => {

    const handlerRunGame = () => {
        if (props.callbackRunGame !== undefined) {
            props.callbackRunGame();
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