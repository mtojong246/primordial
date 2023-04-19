import { Component } from 'react';
import './iconStorage.styles.scss';
import { gameData, moreGameData } from '../Data/data.component';
import successSound from '../button-pressed-38129.mp3';
import { MainContext } from '../Data/MainContext/main-context';

const success = new Audio(successSound);

let count = 0;
let revealed = [];


const enterDroppable = (elem) => {
    if (elem.id === 'icon-storage') {
        return;
    }
    elem.style.transform = 'scale(1.2)';
}

const leaveDroppable = (elem) => {
    if (elem.id === 'icon-storage') {
        return;
    }
    elem.style.transform = '';
}

const revealedList = (list) => {
    revealed = list;
}

document.addEventListener('pointerdown', function(event) {
    
    //pointer
    // apply event to all icon elements 
    const target = event.target.closest('.icon');

    if (target === null) {
        return;
    }

    event.stopPropagation();

    let draggable = event.target.cloneNode(true);
    draggable.id = event.target.id + `-clone-${count}`;
    draggable.classList.add('droppable');
    draggable.classList.add('removable');

    // if already cloned, don't create new clone
    if (target.id.includes('clone')) {
        draggable = event.target;
    }

    draggable.style.position = 'absolute';
    draggable.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(draggable);
  
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        draggable.style.left = pageX - draggable.offsetWidth / 2 + 'px';
        draggable.style.top = pageY - draggable.offsetHeight / 2 + 'px';
        
    }
  
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);

    let currentDroppable = null;   
    let position = null;
  
    function onPointerMove(event) {

        position = event;
        
        if (event.target.id === 'html') {
            draggable.classList.add('hide');
        }

        moveAt(event.pageX, event.pageY);
        draggable.classList.remove('animate__animated');
        draggable.classList.remove('animate__shakeX');

        draggable.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        draggable.hidden = false;

        // mousemove events may trigger out of the window (when the ball is dragged off-screen)
        // if clientX/clientY are out of the window, then elementFromPoint returns null
        if (!elemBelow) return;

        // potential droppables are labeled with the class "droppable" (can be other logic)
        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable !== droppableBelow) {
            // we're flying in or out...
            // note: both values can be null
            //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
            //   droppableBelow=null if we're not over a droppable now, during this event

            if (currentDroppable) {
            // the logic to process "flying out" of the droppable (remove highlight)
            leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
            // the logic to process "flying in" of the droppable
            enterDroppable(currentDroppable);
            }
        }

        
    }
  
    // move the ball on mousemove
    document.addEventListener('pointermove', onPointerMove);
  
    // drop the ball, remove unneeded handlers
    draggable.onpointerup = function(event) {
        document.removeEventListener('pointermove', onPointerMove);
        
        
        // hovered over droppable object
        if(currentDroppable) {
            

            let exists = gameData.find(data => data.recipes[currentDroppable.name] === draggable.name) || gameData.find(data => data.recipes[draggable.name] === currentDroppable.name);

            // 'trash'
            if (currentDroppable.id === 'icon-storage') {
                draggable.classList.add('hide');
            } else if (exists !== undefined) {
                currentDroppable.classList.add('hide');
                draggable.classList.add('hide');
                
                // if combination exists, add new element to playfield 
                let newElement = document.getElementById(exists.name).cloneNode(true);
                newElement.id = exists.name + `-clone-${count}`;
                newElement.style.position = 'absolute';
                newElement.style.zIndex = 1000;
                newElement.classList.remove('hide');
                newElement.classList.add('droppable');
                newElement.classList.add('removable');

                // add new element to storage list 
                let revealElement = document.getElementById(exists.name);
                let revealLabel = document.getElementById(`${exists.name}-span`);
                revealElement.classList.remove('hide');
                revealLabel.classList.remove('hide');

                document.body.append(newElement);
                
                function moveElement(pageX, pageY) {
                    newElement.style.left = pageX - newElement.offsetWidth / 2 + 'px';
                    newElement.style.top = pageY - newElement.offsetHeight / 2 + 'px';
                } 
            
                moveElement(event.pageX, event.pageY);

                if (!revealed.includes(exists.name)) {
                    let newIcons = revealed.concat([exists.name]);
                    success.play();

                    revealedList(newIcons);

                }

            } else {
                draggable.classList.add('animate__animated');
                draggable.classList.add('animate__shakeX');
            }
            
        } 

        draggable.onpointerup = null;
        draggable.onpointermove = null;
        
    };

    draggable.ondragstart = function() {
        return false;
    };

    if (event.pointerType === 'touch') {
        document.ontouchend = function() {
            document.removeEventListener('pointermove', onPointerMove);

            if(currentDroppable) {
            

                let exists = gameData.find(data => data.recipes[currentDroppable.name] === draggable.name) || gameData.find(data => data.recipes[draggable.name] === currentDroppable.name);
    
                // 'trash'
                if (currentDroppable.id === 'icon-storage') {
                    draggable.classList.add('hide');
                } else if (exists !== undefined) {
                    currentDroppable.classList.add('hide');
                    draggable.classList.add('hide');
                    
                    // if combination exists, add new element to playfield 
                    let newElement = document.getElementById(exists.name).cloneNode(true);
                    newElement.id = exists.name + `-clone-${count}`;
                    newElement.style.position = 'absolute';
                    newElement.style.zIndex = 1000;
                    newElement.classList.remove('hide');
                    newElement.classList.add('droppable');
                    newElement.classList.add('removable');
    
                    // add new element to storage list 
                    let revealElement = document.getElementById(exists.name);
                    let revealLabel = document.getElementById(`${exists.name}-span`);
                    revealElement.classList.remove('hide');
                    revealLabel.classList.remove('hide');
    
                    document.body.append(newElement);
                    
                    function moveElement(pageX, pageY) {
                        newElement.style.left = pageX - newElement.offsetWidth / 2 + 'px';
                        newElement.style.top = pageY - newElement.offsetHeight / 2 + 'px';
                    } 
                
                    moveElement(position.clientX, position.clientY);
    
                    if (!revealed.includes(exists.name)) {
                        let newIcons = revealed.concat([exists.name]);
                        success.play();
    
                        revealedList(newIcons);
    
                    }
    
                } else {
                    draggable.classList.add('animate__animated');
                    draggable.classList.add('animate__shakeX');
                }
                
            } 

            document.ontouchend = null;
        }
    }
    
})


class IconStorage extends Component {
    static contextType = MainContext;

    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            reset: false,
        }
    }

    componentDidMount() {
        const context = this.context;

        context.setItemList(revealed);
        context.setReset(false);

        this.setState({itemList: context.itemList})
        this.setState({reset: context.reset})
    }

    componentDidUpdate(prevProps, prevState) {
        const context = this.context;

        if (context.reset === true && context.itemList.length !== 0) {
            revealed = [];
            this.setState({itemList: []})
            context.setReset(false);
        } else if (context.reset === true && prevState.itemList.length !== 0) {
            revealed = [];
            this.setState({itemList: []})
            context.setReset(false);
        } else if (prevState.itemList !== revealed) {
            context.setItemList(revealed);
            this.setState({itemList: context.itemList})
        }
        
    }
    

    render () {

        return (
            <>
            <div className="icon-storage-container droppable" id='icon-storage'>
            {this.props.filteredIcons.map(icon => (
                <div key={icon.id}>
                    <img src={icon.image} alt={icon.name} name={icon.name} id={icon.name} className={`${icon.name} ${moreGameData.includes(icon.id) && !this.state.itemList.includes(icon.name) ? 'hide' : ''} icon`}/>
                    <span className={`${moreGameData.includes(icon.id) && !this.state.itemList.includes(icon.name) ? 'hide' : ''} span`} id={`${icon.name}-span`}>{icon.name}</span>
                </div>
            ))}
            </div>
            </>
        )
    }
}

export default IconStorage;