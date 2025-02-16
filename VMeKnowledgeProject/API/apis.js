// import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/core";

let totalApi = 'http://182.92.121.103:';
let port = '8081';

export const postLogin = async coords => {
  const url = `${totalApi}${port}/login`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: coords.username,
        password: coords.password,
      }),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const getRegister = async coords => {
  const url = `${totalApi}${port}/register`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: coords.username,
        password: coords.password,
      }),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const AddKnowledgeApi = async coords => {
  const url = `${totalApi}${port}/knowledge`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': `${coords.token}`,
      },
      body: JSON.stringify({
        title: coords.title,
        content: coords.htmlData,
        description: coords.describe,
      }),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const GetKnowledgeApi = async coords => {
  const url = `${totalApi}${port}/knowledge`;
  // console.log(url);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': `${coords.token}`,
      },
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const ChangeKnowledgeApi = async coords => {
  const url = `${totalApi}${port}/knowledge/${coords.knowledgeId}`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token': `${coords.token}`,
      },
      body: JSON.stringify({
        title: coords.title,
        description: coords.describe,
        content: coords.htmlData,
      }),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const GetKnowledgeApiById = async coords => {
  // console.log("LKP AK IOI");
  const url = `${totalApi}${port}/knowledge/${coords.knowledgeId}`;
  // console.log(url);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': `${coords.token}`,
      },
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export const DeleteKnowledgeApiById = async coords => {
  const url = `${totalApi}${port}/knowledge/${coords.KnowledgeId}`;
  // console.log(url);
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': `${coords.token}`,
      }
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}