import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import PeopleInfoPage from './PeopleInfoPage';
import StarshipInfoPage from './StarshipInfoPage';
import PlanetInfoPage from './PlanetInfoPage';
import VehicleInfoPage from './VehicleInfoPage';
import SpeciesInfoPage from './SpeciesInfoPage';
import FilmInfoPage from './FilmInfoPage';
import './ListPage.css';
import './Button.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            next: "null",
            prev: "null",
            count: 0,
            items: []
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        next: result.next,
                        prev: result.previous,
                        count: result.count,
                        items: result.results
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
    handleInfoClick(currentUrl) {
        if (currentUrl.indexOf("people") != -1) {
            root.render(
                <React.StrictMode>
                    <PeopleInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("starships") != -1) {
            root.render(
                <React.StrictMode>
                    <StarshipInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("planets") != -1) {
            root.render(
                <React.StrictMode>
                    <PlanetInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("vehicles") != -1) {
            root.render(
                <React.StrictMode>
                    <VehicleInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("species") != -1) {
            root.render(
                <React.StrictMode>
                    <SpeciesInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        } else {
            root.render(
                <React.StrictMode>
                    <FilmInfoPage url={currentUrl} />
                </React.StrictMode>
            );
        }
    }
    handleClick(url) {
        if (url == null) {
            return;
        }
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        next: result.next,
                        prev: result.previous,
                        count: result.count,
                        items: result.results
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
        const { error, isLoaded, count, items } = this.state;
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
                        <div >
                            <table cellSpacing="15">
                                <tr>
                                    <td> <p> Count = {count} </p>  </td>
                                </tr>
                                {items.map(item =>
                                    <tr key={item.name}>
                                        <td>
                                            <button className="btn" onClick={this.handleInfoClick.bind(this, item.url)}>{item.name} {item.title}</button>
                                        </td>
                                    </tr>)
                                }
                                <tr>
                                    <td>
                                        <button onClick={this.handleClick.bind(this, this.state.prev)}> &#60; </button>
                                    </td>
                                    <td>
                                        <button onClick={this.handleClick.bind(this, this.state.next)}> &#62; </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default ListPage;