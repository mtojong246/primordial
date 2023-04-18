import { Component } from 'react';
import './searchBar.styles.scss';
import sound from '../mixkit-cool-interface-click-tone-2568.wav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const audio = new Audio(sound);

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearchOn: false
        }
    }

    toggleSearchBar = () => {
        this.setState(prevState => ({isSearchOn: !prevState.isSearchOn}))
        this.props.clearSearch();
        audio.play();
    };


    render () {
        return (
            <div className="search-bar-container">
                {this.state.isSearchOn ? (
                <div className="search-bar">
                    <input type="text" onChange={this.props.onSearchChange}/>
                    <FontAwesomeIcon icon={faXmark} className='i pointer' onClick={this.toggleSearchBar}/>
                </div>
                ) : (
                <FontAwesomeIcon icon={faMagnifyingGlass} className='i pointer' onClick={this.toggleSearchBar}/>
                )}
            </div>
        )
    }
}

export default SearchBar;