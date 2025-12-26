// mughe yha p ek chize ye smjhni hai sahi s likke ki kabhi bhi hamm kuch chiz install karte hai
// to uske sath hi saraData type aa jata hai agarr nahi bhi ata to hamm npm i -D @type/ karke hamm wo type declare kar lete hai okh!..
// but in case fir bhi nahi ata hai to hmm .d.ts m le lete hai okh!..

// axios always return axiosResponse and uske andar hamm generic lete hai okkh!..

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

interface Data {
  id: string;
  userId: number;
  title: string;
}

const fetchData02 = async () => {
  try {
    // axios always return a generic okkh!..
    // const response: AxiosResponse<Data> = await axios.get(
    //   "http:localhost:300/getData"
    // );
    // console.log(response.data);
    // console.log(response.headers);

    const resposne = await fetch("");

    if (!resposne.ok) {
      console.log("data fetch hi nahi hua hai okkh!..");
    }

    const data: Data = await resposne.json();
  } catch (e) {
    const error = e as Error;
    console.log(error);
  }
};
