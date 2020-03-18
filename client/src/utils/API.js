import axios from "axios";

export default {
  getPrice: function (){
    return axios.get("/price");
  }
}