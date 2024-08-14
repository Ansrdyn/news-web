import { FETCH_NEWS_SUCCESS, FETCH_USERLOGIN_SUCCESS } from "./actionType";
export const fetchNewsSuccess = (payload) => {
  return { type: FETCH_NEWS_SUCCESS, payload };
};

export const fetchUserloginSuccess = (payload) => {
  return { type: FETCH_USERLOGIN_SUCCESS, payload };
};

export const getAccessToken = async () => {
  try {
    const url = process.env.REACT_APP_API_URL;

    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error("Failed to get access token");
    }

    const data = await response.json();
    return data.access_token; 
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error agar bisa ditangani oleh caller
  }
};

export const fetchSuccess = () => {
  return async (dispatch) => {
    try {
      const token = await getAccessToken();
      const url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-hipehxw/endpoint/data/v1/action/find";

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Gunakan token yang diterima dari login
      };

      const body = JSON.stringify({
        dataSource: "Cluster0",
        database: "Data",
        collection: "News",
      });

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error("Failed to load data");
      }

      const data = await response.json();
      dispatch(fetchNewsSuccess(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

export const detailPage = (id) => {
  return async (dispatch) => {
    try {
      const token = await getAccessToken();
      const url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-hipehxw/endpoint/data/v1/action/find";

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Gunakan token yang diterima dari login
      };

      const body = JSON.stringify({
        dataSource: "Cluster0",
        database: "Data",
        collection: "News",
        filter: { "_id": { "$oid": id } }
      });

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error("Failed to load data");
      }

      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
