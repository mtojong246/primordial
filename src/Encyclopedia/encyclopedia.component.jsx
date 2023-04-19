import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './encyclopedia.styles.scss';

class Encyclopedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {

        return (
            <div className='encyclopedia-popup-container'>
                <div className='encyclopedia-popup-overlay' onClick={this.props.openEncyclopedia}></div>
                <div className='encyclopedia-popup-content popup'>
                    <div className='encyclopedia-content-container'>
                        <div className='encyclopedia-title-container'>
                            <button onClick={this.props.openEncyclopedia}><FontAwesomeIcon icon={faXmark} id='close-encyclopedia'/></button>
                            <span>ENCYCLOPEDIA</span>
                            <div></div>
                        </div>
                        <div className='encyclopedia-menu-container'>
                            <div className='stats'>
                                <span>{this.props.elements.length}/720</span>
                                <p>discovered items</p>
                            </div>
                            <div className='item-search-container'>
                                <input type='text' onChange={this.props.onSearchChange} id='enc-search-input'/>
                                <button onClick={this.props.clearSearch}><FontAwesomeIcon icon={faXmark} id='clear-encyclopedia-search'/></button>
                            </div>
                            {this.props.elements.length === 0 ? (
                                <h1>Loading...</h1>
                            ) : (
                                <div className='item-container'>
                                {this.props.filteredElements.map(icon => (
                                    <div className='item' key={icon.id}>
                                        <img src={icon.image} alt={icon.name} style={{ filter: `${icon.filter}` }}/>
                                        <span>{icon.name}</span>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Encyclopedia;