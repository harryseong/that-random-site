import React from 'react';
import axios from 'axios';

class DadJokes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            youAskedForIt: false,
            dadJoke: "",
            requestTexts: [
                'Fill my masochistic needs and tell me another dad joke.',
                'Hit me with another one, pops.',
                'My eyes haven\'t rolled far enough back into my head yet.',
                'Last I checked, my food has yet to lurch out of my gut',
                'Gosh dad, you are SO embarrassing!!! Why do you do this every time???',
                'NOT LISTENING!!! STOP DAD, ENOUGH!!! D:',
                'Dad, my friends are home right now!',
                'My ears......',
                'Dad, why did you grow up to the way you are?',
                'Please, sir... may I have some moar?',
                'Gosh, I need my fix. Bring it!',
                'I\'m bored... wait... never mind, I\'m not bored!!!'
            ],
            randomRequestText: ""
        };

        this.iAskedForIt = this.iAskedForIt.bind(this);
        this.pleaseStop = this.pleaseStop.bind(this);
        this.getRandomDadJoke = this.getRandomDadJoke.bind(this);
    }

    componentDidMount() {
    }

    iAskedForIt() {
        this.setState({youAskedForIt: true});
        this.getRandomDadJoke();
    }

    pleaseStop() {
        this.setState({youAskedForIt: false});
    }

    getRandomDadJoke() {
        const requestTexts = this.state.requestTexts;
        const randomRequestText = requestTexts[Math.floor(Math.random()*requestTexts.length)];

        axios.get("https://icanhazdadjoke.com/", {headers: {Accept: 'text/plain'}}).then(
            rsp => {
                this.setState({dadJoke: rsp.data, randomRequestText: randomRequestText});
                console.log("Dad joke successfully blurted out much to the chagrin of the kids.");
            }
        ).catch(
            error => console.error(error)
        )
    }

    render() {
        const dadJoke = this.state.dadJoke;
        const youAskedForIt = this.state.youAskedForIt;
        const randomRequestText = this.state.randomRequestText;
        let didYouAskForIt;

        if(!youAskedForIt) {
            didYouAskForIt =
                <button onClick={() => this.iAskedForIt()}>I think I can stomach a dad joke right now...</button>
        } else {
            didYouAskForIt =
                <>
                    <div>Oh brother, you asked for it...</div>
                    <div className="random-dad-joke">{dadJoke}</div>
                    <div>
                        <button onClick={() => this.getRandomDadJoke()}>{randomRequestText}</button>
                    </div>
                    <div>
                        <button onClick={() => this.pleaseStop()}>No, dad. Really, please stop.</button>
                    </div>
                </>
        }

        return (
            <div className="random-dad-joke-div">
                {didYouAskForIt}
            </div>
        )

    }
}

export default DadJokes;