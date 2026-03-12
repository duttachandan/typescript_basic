import axios, { AxiosError } from "axios";
import { type AxiosResponse } from "axios";

/* 
This is the data that we are expection from the api
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

interface data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const response = async () => {
  try {
    const res: AxiosResponse<data> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return error;
  }
};

response().then((response) => console.log(response));


// another api calls 