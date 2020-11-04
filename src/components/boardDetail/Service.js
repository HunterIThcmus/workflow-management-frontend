
import axios from "axios";
import authHeader from "../header/AuthHeader";


const API_URL = "https://midtermwebapi.herokuapp.com/board_detail/";
// const API_URL = "http://localhost:3000/board_detail/";


class BoardGroupService {
  // getColumn(category) {
  //   return axios.get(API_URL,{
  //       category,
  //   },
  //     {  headers:authHeader(),
  //     });
  // }
  getTagByCategory(board_id,category){
    return axios.get(API_URL+board_id+"/"+category,
      {  headers:authHeader(),
      });
  }
  
  addTag(board_id,category,content){
    console.log(board_id,category,content);
    return axios
      .post(API_URL + "add", {
        board_id,
        category,
        content
      },
      {  headers:authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
  deleteTag(tag_id){
    return axios.delete(API_URL + "delete/"+tag_id,{
      headers:authHeader(),
    }).then((response) =>{
      return response.data;
    })
  }
}

export default new BoardGroupService();
