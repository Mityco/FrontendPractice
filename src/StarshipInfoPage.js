import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './ListPage.css';
import './Button.css';

class StarshipInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            item: null
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    render() {
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div>
                    <header className="listPage-header">
                        <table height="70px">
                            <tr>
                                <td>
                                    <img src={logo} height="70px" align="left" />
                                </td>
                                <td>
                                    <h1>Star Wars</h1>
                                </td>
                            </tr>
                        </table>
                    </header>
                    <body className="listPage-Body">
                        <div>
                            <h2>{item.name}</h2>
                            <ul>
                                <li>height: {item.height}</li>
                                <li>model: {item.model}</li>
                                <li>manufacturer: {item.manufacturer}</li>
                                <li>cost in credits: {item.cost_in_credits}</li>
                                <li>length: {item.length}</li>
                                <li>max atmosphering speed: {item.max_atmosphering_speed}</li>
                                <li>crew: {item.crew}</li>
                                <li>passengers: {item.passengers}</li>
                                <li>cargo capacity: {item.cargo_capacity}</li>
                                <li>starship class: {item.starship_class}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default StarshipInfoPage;