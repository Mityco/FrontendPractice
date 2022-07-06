import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PeoplePage from './PeoplePage';
import './Button.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
    handleClick = () => {
        root.render(
            <React.StrictMode>
                <PeoplePage />
            </React.StrictMode>
        )
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>
                <body className="App-body">
                    <table align="center" cellSpacing="15">
                        <tr>
                            <td> <img src={logo} className="App-logo" alt="logo" />  </td>
                            <td>
                                <h1>Star Wars</h1>
                            </td>
                        </tr>
                        <tr>
                            <td> <button type="Button" className="btn" onClick={this.handleClick}>People</button> </td>
                            <td> <button type="Button" className="btn">Starships</button> </td>
                            <td> <button type="Button" className="btn">Vehicles</button> </td>
                        </tr>
                        <tr>
                            <td> <button type="Button" className="btn">Planets</button> </td>
                            <td> <button type="Button" className="btn">Species</button> </td>
                            <td> <button type="Button" className="btn">Films</button> </td>
                        </tr>
                    </table>
                </body>
            </div>
        );
    }
}

export default App;
