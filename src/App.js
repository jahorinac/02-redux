import React, { Component } from 'react';
import { connect } from "react-redux";
import getAllData from './actions/getAllData'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(getAllData())
    }

    listOfUsers = () => {

        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    };

    render() {
        return (
            <div>
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

const mapStateToProps = state =>
    {
        return {
            users: state.users
        }
    };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;