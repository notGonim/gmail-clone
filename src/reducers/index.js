import { combineReducers } from "redux";
import MailReducer from "./mailReducer";


const rootReducer = combineReducers({
    mail: MailReducer
});

export default rootReducer;