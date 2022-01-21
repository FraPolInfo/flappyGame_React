import "./StartMenu.css"

import PropTypes from 'prop-types';


const StartMenu = (props) => {

    const handlerRunGame = () => {
        if (props.callbackRunGame !== undefined) {
            props.callbackRunGame();
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

            Il record Attuale è {localStorage.getItem('points')}
            <button onClick={handlerRunGame} > avvia gioco </button>
        </div>
    )
}

StartMenu.defaultProps = {

}

StartMenu.propTypes = {
    callbackRunGame: PropTypes.func
};

export default StartMenu;