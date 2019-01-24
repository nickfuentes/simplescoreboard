const players = [
    {
        name: "Nick",
        score: 50,
        id: 1
    },
    {
        name: "Andrea",
        score: 100,
        id: 2
    },
    {
        name: "Natalie",
        score: 68,
        id: 3
    },
    {
        name: "Lili",
        score: 93,
        id: 4
    }
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers} </span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }



    render() {
        return (
            <div className="counter" >
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={props.intialPlayers.length}
            />

            {/* Players list */}
            {props.intialPlayers.map(player =>
                <Player
                    name={player.name}
                    key={player.id.toString()}
                />
            )}
        </div>
    );
}


ReactDOM.render(
    <App intialPlayers={players} />,
    document.getElementById('root')
);