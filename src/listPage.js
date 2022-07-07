import React from 'react';
import ReactDOM from 'react-dom/client';
import './ListPage.css';
import './Button.css';

class ListPage extends React.Component {
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
        fetch(this.props.url)
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
                    <table align="center" cellSpacing="15">
                        <tr>
                            <td> <p> Count = {count} </p>  </td>
                        </tr>
                        {items.map(item =>
                            <tr key={item.name}>
                                <td> <button className="btn">{item.name}</button> </td>
                            </tr>)
                        }
                    </table>
                </div>
            );
        }
    }
}

export default ListPage;