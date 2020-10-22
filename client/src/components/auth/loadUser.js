import store from "../../store";
import { USER_LOADING_REQUEST } from "../../redux/type";

const loadUser = () => {
  try {
    store.dispatch({
      type: USER_LOADING_REQUEST,
      payload: localStorage.getItem("token"),
    });
  } catch (error) {
    console.log(error);
  }
};

export default loadUser;
