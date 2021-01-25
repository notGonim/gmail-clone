const intialState = {
    sendMessageIsOpen: false
}


const MailReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'OPENMESSAGE':
            return {
                ...state,
                sendMessageIsOpen: action.payLoad.mailOpen,
            };
        case 'CLOSEMESSAGE':
            return {
                ...state,
                sendMessageIsOpen: action.payLoad.mailOpen
            }

        default:
            return { ...state };
    }
}


export default MailReducer