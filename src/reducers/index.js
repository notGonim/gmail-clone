import { combineReducers } from "redux";
import MailReducer from "./mailReducer";
import UserReducer from "./userReducer";




const rootReducer = combineReducers({
    mail: MailReducer,
    user: UserReducer
});

export default rootReducer;