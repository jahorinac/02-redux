import React, { Component } from 'react';
import { connect } from "react-redux";
import getAllData from './services/getAllData'
import postData from './services/postData'
import deleteData from './services/deleteData'
import EditUser from './components/EditUser'

class App extends Component {

    state = {
        name: ''
    };

    componentDidMount() {
        this.props.dispatch(getAllData())
    }

    editUser = (user) => {

        this.setState({
            ...user
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

    listOfUsers = () => {
        return this.props.users.map(user => {
            return <li key={user.id}>
                {user.name}
                <button onClick={() => this.deleteUser(user.id)} className="delete">Delete</button>
                <button onClick={() => this.editUser(user)} className="edit">Edit</button>
            </li>
        })
    };

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                    Name:
                    </label>
                    <input id="name" type="text" name="name"
                           onChange={this.handleOnChange}/>
                    <button type="submit">Add User</button>
                </form>
                <ul>
                    {this.listOfUsers()}
                </ul>
                <EditUser user = {this.state} />
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