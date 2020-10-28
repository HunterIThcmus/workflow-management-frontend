
import axios from "axios";

const API_URL = "https://midtermwebapi.herokuapp.com/board";

class BoardGroupService {
  getAllBoards() {
    return axios.get(API_URL);
  }
}

export default new BoardGroupService();
