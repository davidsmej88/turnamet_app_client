import API from './apiServices';

export const signUp = async (payloads) => {
  const requestBody = {
    query: `
    mutation {
      createUser(userInput: {email: "${payloads.email}", password: "${payloads.password}"}) {
        _id
        email
      }
    }
  `
  };
  
  return await API.post('', JSON.stringify(requestBody));
};

export const login = async (payloads) => {
  const requestBody = {
    query: `
    query {
      login(email: "${payloads.email}", password: "${payloads.password}") {
        userId
        token
        tokenExpiration
      }
    }
  `
  };
  
  return await API.post('', JSON.stringify(requestBody));
};
