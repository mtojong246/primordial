import { Component } from 'react';
import { Link } from 'react-router-dom';
import './title.styles.scss';

import sound from '../mixkit-cool-interface-click-tone-2568.wav';

const audio = new Audio(sound);


class Title extends Component {

    click = () => {
        audio.play();
    }

    render() {
        return(
            <div className='title-container'>
                <span>Primordial</span>
                <Link to='/home'><button onClick={this.click}>PLAY</button></Link>
            </div>
        )
    }
}

export default Title;