import { Component } from 'react';
import './navBar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faSliders, faLightbulb, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import sound from '../mixkit-cool-interface-click-tone-2568.wav';
import Settings from '../Settings/settings.component';
import Encyclopedia from '../Encyclopedia/encyclopedia.component';
import { gameData } from '../Data/data.component';

const audio = new Audio(sound);
//const defaultVals = ['air', 'water', 'fire', 'earth'];
//const defaultLabels = ['air-span', 'water-span', 'fire-span', 'earth-span']

class NavBar extends Component {
    

    constructor() {
        super();
        this.state = {
            isSettingsOpen: false,
            isEncyclopediaOpen: false,
            elements: [],
        }
    }
 
    cleanUp = () => {
        const removables = document.querySelectorAll('.removable');
        removables.forEach(icon => icon.classList.add('hide'));
        audio.play();
    }

    click = () => {
        audio.play();
    }

    openSettings = () => {
        this.setState(prevState => ({isSettingsOpen: !prevState.isSettingsOpen}));
        audio.play();
    }

    openEncyclopedia = () => {
        this.setState(prevState => ({isEncyclopediaOpen: !prevState.isEncyclopediaOpen}));
        audio.play();

        let array = Array.from(document.querySelectorAll('.icon'));
        let newElements = array.filter(icon => !Array.from(icon.classList).includes('hide') && !icon.id.includes('icon'));
        let elementId = newElements.map(el => el.id);
        let icons = gameData.filter(data => elementId.includes(data.name));
        if (this.state.elements !== icons) {
            this.setState({elements: icons})
        }
    }

    componentDidMount() {
        let array = Array.from(document.querySelectorAll('.icon'));
        let newElements = array.filter(icon => !Array.from(icon.classList).includes('hide') && !icon.id.includes('icon'));
        let elementId = newElements.map(el => el.id);
        let icons = gameData.filter(data => elementId.includes(data.name));
        this.setState({elements: icons})
    }

    render () {
        return (
            <>
                <div className="nav-bar-container">
                    <div className="clean-up" onClick={this.cleanUp}>
                        <FontAwesomeIcon icon={faBroom} className='i'/>
                        <p>clean up</p>
                    </div>
                    <div className="settings" onClick={this.openSettings}>
                        <FontAwesomeIcon icon={faSliders} className='i'/>
                        <p>settings</p>
                    </div>
                    <div className="encyclopedia" onClick={this.openEncyclopedia}>
                        <FontAwesomeIcon icon={faBookBookmark} className='i'/>
                        <p>encyclopedia</p>
                    </div>
                    <a href='https://hints.littlealchemy2.com/' target="_blank" rel="noopener noreferrer" onClick={this.click}>
                        <div className="hints">
                            <FontAwesomeIcon icon={faLightbulb} className='i'/>
                            <p>hints</p>
                        </div>
                    </a>
                </div>
                {this.state.isSettingsOpen && <Settings openSettings={this.openSettings} cleanUp={this.cleanUp} reset={this.reset} />}
                {this.state.isEncyclopediaOpen && <Encyclopedia openEncyclopedia={this.openEncyclopedia} elements={this.state.elements}/>}
            </>
        )
    }
}

export default NavBar;

//const array = Array.from(document.querySelectorAll('.icon'));
//        const spans = Array.from(document.querySelectorAll('.span'));
//        array.forEach(icon => {
//            if (!Array.from(icon.classList).includes('hide') && !defaultVals.includes(icon.id)) {
//                icon.classList.add('hide');
//            }
//        })

//        spans.forEach(label => {
//            if (!Array.from(label.classList).includes('hide') && !defaultLabels.includes(label.id)) {
//                label.classList.add('hide');
//            }
//        })