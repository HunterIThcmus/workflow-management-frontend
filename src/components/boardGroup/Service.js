
import axios from "axios";
import authHeader from "../header/AuthHeader";

const API_URL = "https://midtermwebapi.herokuapp.com/board/";
// const API_URL = "http://localhost:3000/board/";


class BoardGroupService {
  getAllBoards() {
    return axios.get(API_URL,
      {  headers:authHeader(),
      });
  }
  addBoard(name){
    return axios
      .post(API_URL + "add", {
      name,
      },
      {  headers:authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
  deleteBoard(boardId){
    return axios.delete(API_URL + "delete/"+boardId,{
      headers:authHeader(),
    }).then((response) =>{
      return response.data;
    })
  }
  updateBoard(boardId,boardname,shared){
    return axios.put(API_URL+"update/"+boardId,{
      boardname,
      shared,
    },
    {
      headers:authHeader(),
    })
  }
}

export default new BoardGroupService();
