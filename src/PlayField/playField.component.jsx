import { Component } from 'react';
import './playField.styles.scss';

class PlayField extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='playField-container' id='play-field'></div>
        )
    }
}

export default PlayField;