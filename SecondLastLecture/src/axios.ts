// mughe yha p ek chize ye smjhni hai sahi s likke ki kabhi bhi hamm kuch chiz install karte hai
// to uske sath hi saraData type aa jata hai agarr nahi bhi ata to hamm npm i -D @type/ karke hamm wo type declare kar lete hai okh!..
// but in case fir bhi nahi ata hai to hmm .d.ts m le lete hai okh!..

import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  description: string;
}

// abb mugeh yha p like fetch ya axios s data lena hai okkh!...

export const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // kya smjh aya yhi ki like respoonse jo hai wo generic returnn karta hai okkh!..
    console.log(response);
    console.log(response.data);
  } catch (e) {
    const error = e as Error;
    console.log(error);
  }
};
