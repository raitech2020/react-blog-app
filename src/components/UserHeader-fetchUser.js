import React from "react";
import {connect} from "react-redux"
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const {user} = this.props

        if (!user) {
            return null
        }

        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // state is data produced by reducers
    // and currently present inside the Redux store
    return {
        // userId = post.userId
        // id = user.id
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(
    mapStateToProps,
    {fetchUser}
)(UserHeader)
