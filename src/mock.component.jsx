import { Component } from "react";
import { MainContext } from "./Data/MainContext/main-context";
import { gameData } from "./Data/data.component";

class Mock extends Component {
    static contextType = MainContext;

    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
        }
    }

    componentDidMount() {
        const context = this.context;

        const startingList = gameData.slice(0, 4);

        context.setItemList(startingList);
    }


    render() {

        return (
            <div id='mock'>{this.props.revealed}</div>
        )
    }
}

export default Mock;