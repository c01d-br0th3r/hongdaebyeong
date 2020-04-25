import { combineReducers } from "redux";
import theme from "./themeReducer";
import images from "./imagesReducers";

const rootReducer = combineReducers({ theme, images });

export default rootReducer;
