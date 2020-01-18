import createStore from "antd/lib/table/createStore";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer)

export default store