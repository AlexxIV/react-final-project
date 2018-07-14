import React from 'react';
import Delete from './Delete';
import Edit from './Edit'
import Button from './simple/Button';


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
            <div className="col-sm-6 admin-panel">
                <Button clickFunction={this.handleEdit} class={'btn-success'} text={'EDIT'} />
                <Button clickFunction={this.handleDelete} class={'btn-danger'} text={'DELETE'} />

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
