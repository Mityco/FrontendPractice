import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './ListPage.css';
import './Button.css';

class PeopleInfoPage extends React.Component {
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
                                <li>mass: {item.mass}</li>
                                <li>hair color: {item.hair_color}</li>
                                <li>skin color: {item.skin_color}</li>
                                <li>eye color: {item.eye_color}</li>
                                <li>birth year: {item.birth_year}</li>
                                <li>gender: {item.gender}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default PeopleInfoPage;