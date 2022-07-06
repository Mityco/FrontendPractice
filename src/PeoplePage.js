import React from 'react';
import ReactDOM from 'react-dom/client';
import './PeoplePage.css';
import './Button.css';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            count: 0,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
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
                    <p> Count = {count} </p>
                    <ul>
                        {items.map(item =>
                            <li key={item.name}>
                                {item.name}
                            </li>)
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default PeoplePage;