import React, { Component } from 'react';
import { connect } from "react-redux";
import getAllData from './actions/getAllData'
import postData from './actions/postData'
import deleteData from './actions/deleteData'

class App extends Component {

    state = {
        name: ''
    };

    componentDidMount() {
        this.props.dispatch(getAllData())
    }

    listOfUsers = () => {
        return this.props.users.map(user => {
            return <li key={user.id}>
                        {user.name}
                        <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                    </li>
        })
    };

    deleteUser = (id) => {
        this.props.dispatch(deleteData(id))
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(postData(this.state));
    };

    handleOnChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]:value
        })
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                    Name:
                    </label>
                    <input id="name" type="text" name="name"
                           onChange={this.handleOnChange}/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {this.listOfUsers()}
                </ul>
            </div>
        );
    }
}


//AppContainer

const mapDispatchToProps = dispatch => ({
   dispatch
});

const mapStateToProps = state => {
        return {
            users: state.users
        }
    };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;