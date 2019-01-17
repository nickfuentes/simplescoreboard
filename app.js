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

            <Counter
                score={props.score}
            />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrment"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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
                    score={player.score}
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