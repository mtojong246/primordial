import { Component } from "react";
import './home.styles.scss';

import NavBar from "../NavBar/navBar.component";
import PlayField from "../PlayField/playField.component";
import SearchBar from "../SearchBar/searchBar.component";
import IconStorage from "../IconStorage/iconStorage.component";

import { gameData } from "../Data/data.component";
import { MainContext } from "../Data/MainContext/main-context";


class Home extends Component {   

    setItemList = (itemList) => {
      this.setState({ itemList })
    }

    setReset = (reset) => {
      this.setState({ reset })
    }
  
    constructor() {
        super()
        this.state = {
          icons: [],
          searchField: '',
          itemList: [],
          setItemList: this.setItemList,
          reset: false,
          setReset: this.setReset,
        }
      }

      componentDidMount() {
        this.setState({icons: gameData})                
      }
    
      onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
      }
    
      clearSearch = () => {
        this.setState({searchField: ''})
      }
    
      render () {
    
        let filteredIcons = this.state.icons.filter(icon => icon.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    
        return (
            <MainContext.Provider value={this.state}>
              <div className="body-container" onChange={this.onChangeHandler}>
                <NavBar />
                <PlayField />
                <SearchBar onSearchChange={this.onSearchChange} clearSearch={this.clearSearch}/>
                <IconStorage filteredIcons={filteredIcons} />
              </div>
            </MainContext.Provider>
        )
      }
}

export default Home;