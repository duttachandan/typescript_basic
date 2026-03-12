import axios, { AxiosError } from "axios";
import {} from "axios";
const response = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        return res.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return error.message;
        }
    }
};
response().then((response) => console.log(response));
//# sourceMappingURL=axiosThroughFetch.js.map