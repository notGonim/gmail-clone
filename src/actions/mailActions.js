export const OpenMessage = () => dispatch => {

    dispatch({
        type: "OPENMESSAGE",
        payLoad: {
            mailOpen: true
        }
    })

}



export const CloseMessage = () => dispatch => {

    dispatch({
        type: "CLOSEMESSAGE",
        payLoad: {
            mailOpen: false
        }
    })

}