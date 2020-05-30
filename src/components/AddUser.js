import React, {Component} from 'react';
import {connect} from "react-redux";
import postData from "../services/postData";


class AddUser extends Component {

    state = {
        id: null
    };

    componentDidUpdate() {
        const newId = Math.max( ...this.props.users.map((user) => user.id)) + 1;
        newId !== this.state.id && this.setState({
            id: newId
        });
    }

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
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapDispatchToProps)(AddUser)





