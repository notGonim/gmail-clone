
export const LogInAction = ({ displayName, email, photoURL }) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payLoad: {
            user: { displayName, email, photoURL }
        }
    })
}

export const LogOutAction = () => (dispatch) => {

    dispatch({
        type: 'LOGOUT',
        payLoad: {
            user: null
        }
    })

}