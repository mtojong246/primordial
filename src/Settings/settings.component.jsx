import { Component } from 'react';
import './settings.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MainContext } from '../Data/MainContext/main-context';

class Settings extends Component {
    static contextType = MainContext;
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    cleanUpSettings = () => {
        this.props.cleanUp()
        this.props.openSettings()
    }

    resetSettings = () => {
        this.props.openSettings();
        this.context.setItemList([]);
        this.context.setReset(true);

        const removables = document.querySelectorAll('.removable');
        removables.forEach(icon => icon.classList.add('hide'));
    }

    render() {
        return (
            <div className='settings-popup-container'>
                <div className='settings-popup-overlay' onClick={this.props.openSettings}></div>
                <div className='settings-popup-content popup'>
                    <div className='settings-content-container'>
                        <div className='settings-title-container'>
                            <button onClick={this.props.openSettings}><FontAwesomeIcon icon={faXmark} id='close-settings'/></button>
                            <span>SETTINGS</span>
                            <div></div>
                        </div>
                        <div className='settings-buttons-container'>
                            <button onClick={this.cleanUpSettings}>CLEAN UP</button>
                            <button onClick={this.resetSettings}>RESET PROGRESS</button>
                            <a href='https://help.littlealchemy2.com/' target="_blank" rel="noopener noreferrer"><button>CONTACT US</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;