import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FlashMessage from './FlashMessage.js';
import { deleteFlashMessage } from '../../actions/flashMessages.js';

class FlashMessageList extends Component {
    render(){
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} /> 
        );
        return (
            <div>
                { messages }
            </div>
        
        )
    }
}

FlashMessageList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);