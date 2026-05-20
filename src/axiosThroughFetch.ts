import axios from "axios";
import { type AxiosResponse } from "axios";

// Expected API Response Structure
// This interface defines the shape of data returned from the API endpoint
// Example response from: https://jsonplaceholder.typicode.com/todos/1
/*
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

// Fetch data from an API using Axios with full type safety
// AxiosResponse<data> tells TypeScript: "The response data matches the 'data' interface"

const response = async () => {
  try {
    const res: AxiosResponse<data> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    return res.data; // Return only the data portion of the response
  } catch (error) {
    // Check if the error is an Axios error for specific error handling
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    // Return generic error object if not an Axios error
    return error;
  }
};

response().then((response) => console.log(response)); 