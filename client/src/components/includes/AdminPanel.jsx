import React from 'react';
import Delete from './Delete';
import Edit from './Edit'


export default class AdminPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEdit: false,
            showDelete: false
        }
    }

    handleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit,
            showDelete: false
        })
    }
    handleDelete = () => {
        this.setState({
            showDelete: true,
            showEdit: false
        })
    }
    handleStateFromModal = () => {
        this.setState({
          showDelete: false
        })
      }
    render() {
        return (
            <div className="admin-panel">
                <button onClick={this.handleEdit} className="btn btn-success">EDIT</button>
                <button onClick={this.handleDelete} className="btn btn-danger">DELETE</button>

                <div>
                    {this.state.showEdit ?
                        <Edit  hideForm={this.handleEdit} id={this.props.hotel._id} userToken={this.props.userToken} {...this.props}/> :
                        null
                    }
                    {this.state.showDelete ?
                        <Delete {...this.state} handleStateFromModal={this.handleStateFromModal} id={this.props.hotel._id} userToken={this.props.userToken} {...this.props}/> :
                        null
                    }
                </div>
            </div>
        )
    }
}
