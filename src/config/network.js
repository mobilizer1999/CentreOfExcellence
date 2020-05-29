import AsyncStorage from '@react-native-community/async-storage';

export const baseURL = 'https://api-test.centreofexcellence.com/';

const AjaxHelper = {
  getData: async (url, payload, onsuccess, onerror) => {
    const postURL = baseURL + url;

    const customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const tokenStorage = await AsyncStorage.getItem('token');
    const token = await JSON.parse(tokenStorage);
    if (token) {
      // alert("payload undefined");
      customHeader.Authorization = `${token.token_type} ${token.access_token}`;
    }

    fetch(postURL, {
      headers: customHeader,
    })
      .then((response) => response.json())
      .then((responseData) => {
        onsuccess(responseData);
      })
      .catch((error) => {
        console.error(error);
        onerror(error);
      });
  },
  postData: async (url, data, onsucess, onerror) => {
    const postData = JSON.stringify(data);
    const postURL = baseURL + url;

    const customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // const tokenStorage = await AsyncStorage.getItem('token');
    // const token = await JSON.parse(tokenStorage);
    // if (token) {
    //   // alert("payload undefined");
    //   customHeader.Authorization = `${token.token_type} ${token.access_token}`;
    // }
    fetch(postURL, {
      method: 'POST',
      headers: customHeader,
      body: postData,
    })
      .then((res) => res.json())
      .then((responseData) => {
        onsucess(responseData);
      })
      .catch((error) => {
        onerror(error);
      });
  },

  patchData: async (url, data, onsucess, onerror) => {
    const patchData = JSON.stringify(data);
    const patchURL = baseURL + url;

    const customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const tokenStorage = await AsyncStorage.getItem('token');
    const token = await JSON.parse(tokenStorage);
    if (token) {
      // alert("payload undefined");
      customHeader.Authorization = `${token.token_type} ${token.access_token}`;
    }
    fetch(patchURL, {
      method: 'PATCH',
      headers: customHeader,
      body: patchData,
    })
      .then((responseData) => {
        onsucess(responseData);
      })
      .catch((error) => {
        onerror(error);
      });
  },
  deleteData: async (url, data, onsuccess, onerror) => {
    const postURL = baseURL + url;
    const customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const tokenStorage = await AsyncStorage.getItem('token');
    const token = await JSON.parse(tokenStorage);
    if (token) {
      // alert("payload undefined");
      customHeader.Authorization = `${token.token_type} ${token.access_token}`;
    }
    const postData = JSON.stringify(data);
    // console.log(postData);
    fetch(postURL, {
      method: 'DELETE',
      headers: customHeader,
      body: postData,
    })
      .then((responseData) => {
        // alert(JSON.stringify(responseData));
        if (responseData.status !== 404) {
          return onsuccess(responseData);
        }
        return onerror(responseData);
      })
      .catch((error) => {
        console.error(error);
        onerror(error);
      });
  },
  getDataAsync: async (url, payload) => {
    const postURL = baseURL + url;
    const customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (payload !== undefined) {
      customHeader.Authorization = `Bearer  ${payload}`;
    }

    try {
      const response = await fetch(postURL, {
        headers: customHeader,
        compress: true,
        timeout: 0,
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  },
};

export default AjaxHelper;
