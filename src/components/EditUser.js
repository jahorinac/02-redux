import React, {Component} from 'react';
import putData from '../services/putData'
import { connect } from "react-redux";

class EditUser extends Component {

    state = {
        name: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(putData(this.state));

        this.setState({
            name: ''
        })
    };

    componentDidUpdate(prevProps) {

        if(prevProps.user !== this.props.user){
            this.setState({
                ...this.props.user
            })
        }
    }

    handleOnChange = (e) => {

        const { name, value} = e.target
        this.setState({
            [name]: value
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
                           onChange={this.handleOnChange}
                           value={this.state.name}
                    />
                    <button type="submit">Edit User</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch
};

export default connect(mapDispatchToProps)(EditUser)