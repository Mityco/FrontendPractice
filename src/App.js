import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ListPage from './ListPage';
import './Button.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
    handleClick(buttonName) {
        switch (buttonName) {
            case 'People':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/people/"/>
                    </React.StrictMode>
                );
                break;
            case 'Starships':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/starships/"/>
                    </React.StrictMode>
                );
                break;
            case 'Vehicles':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/vehicles/"/>
                    </React.StrictMode>
                );
                break;
            case 'Planets':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/planets/"/>
                    </React.StrictMode>
                );
                break;
            case 'Species':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/species/"/>
                    </React.StrictMode>
                );
                break;
            case 'Films':
                root.render(
                    <React.StrictMode>
                        <ListPage url="https://swapi.dev/api/films/"/>
                    </React.StrictMode>
                );
                break;
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
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
                <body className="App-body">
                    <table align="center" cellSpacing="15">
                        <tr>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "People")}>People</button>
                            </td>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "Starships")}>Starships</button>
                            </td>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "Vehicles")}>Vehicles</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "Planets")}>Planets</button>
                            </td>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "Species")}>Species</button>
                            </td>
                            <td>
                                <button className="btn" onClick={this.handleClick.bind(this, "Films")}>Films</button>
                            </td>
                        </tr>
                    </table>
                </body>
            </div>
        );
    }
}

export default App;
