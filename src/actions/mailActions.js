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


export const mailDetails = ({ id, title, subject, description, timeMessage }) => dispatch => {
    dispatch({
        type: "MAILDETAILS",
        payLoad: {
            mail: { id, title, subject, description, timeMessage }
        }
    })

}