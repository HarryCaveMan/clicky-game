import React from "react";
import {Scoreboard} from "./scoreboard";
import Images from "./images";


class Game extends React.Component{
    state = {
        highScore:0,
        guessed:[]
    };

    handleGuess = index => {
        this.state.guessed
        .indexOf(index) < 0 ?
        this.setState({guessed:[...this.state.guessed,index]}):
        this.setState({guessed:[]});
        this.setState({
            highScore:
            Math.max(
                this.state.guessed.length,
                this.state.highScore
            )
        })
    };

    render (){return (
    <div>
     <Scoreboard highScore={this.state.highScore} score={this.state.guessed.length}/>
     <Images onGuess={this.handleGuess}/>
    </div>
    );}
}

export default Game;