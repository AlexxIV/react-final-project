import React from 'react';
import Modal from 'react-modal';
import Button from './simple/Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Bind modal to root
Modal.setAppElement('#root')

export default class Delete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: true
        };

        // this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // Mai ne mi trqq da go otvarqm
    //   openModal() {
    //     this.setState({modalIsOpen: true});
    //   }

    afterOpenModal() {

    }
    handleDelete = () => {
        const url = 'http://localhost:5000/hotels/delete/' + this.props.id;
        const authHeader = 'Bearer ' + this.props.userToken

        fetch(url, {
            headers: {
                "Authorization": authHeader
            }
        })
            .then(rawData => rawData.json())
            .then(processedData => {
                if (processedData.success) {
                    this.props.handleDelete(this.props.id);
                    this.props.history.push("/hotels");
                }
                else {
                    console.log('err')
                    this.closeModal()
                }
            })
            .catch(err => console.log(err))
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
        this.props.handleStateFromModal();
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Delete Modal"
                    id={this.props.id}
                    userToken={this.props.userToken}
                    {...this.props}
                >
                    <div class="delete-modal-wrap text-center">
                        <h2>ARE YOU SURE YOU WANT TO DELETE?</h2>
                        <Button clickFunction={this.closeModal} class={'btn-success'} text={'NO'} />
                        <Button clickFunction={this.handleDelete} class={'btn-danger'} text={'YES'} />
                    </div>
                </Modal>
            </div>
        );
    }
}