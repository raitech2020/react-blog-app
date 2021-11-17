import React from "react";
import {connect} from "react-redux"

class UserHeader extends React.Component {
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

export default connect(mapStateToProps)(UserHeader)
