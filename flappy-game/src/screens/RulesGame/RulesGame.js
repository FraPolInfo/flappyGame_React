import './RulesGame.css'
import icon from '../../assets/images/click-icon.png'

import PropTypes from 'prop-types';

/* funcComponets */
import Button from '../../components/funcComponents/Button/Button'

const RulesGame = (props) => {
    const handlerReturnToStart = () => {
        if (props.callbackReturnToStart !== undefined) {
            props.callbackReturnToStart();
        }
    }

    return (
        <div className='game-rules'>
            <p className='rules-container'>
                Tanto tempo fa, in una galassia lontana lontana...
                Un astronave si trova sotto attacco dai laser nemici!
            </p>

            <img className='icon-cointainer' src={icon}/>

            <p className='rules-container'>
                Tieni premuto il tasto sinistro del mouse per salire, rilascialo per scendere!
                Se vieni colpito dai laser, perdi una vita.
                Se finisci le vite, hai perso!
            </p>

            <div className='button-cointainer'>
                <Button label="Ok, ho capito!" clickButton={handlerReturnToStart} />
            </div>
        </div>
    )
}

RulesGame.propTypes = {
    callbackReturnToStart: PropTypes.func
};

export default RulesGame