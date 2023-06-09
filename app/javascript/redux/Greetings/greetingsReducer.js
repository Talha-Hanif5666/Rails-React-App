import axios from 'axios';

const GET_RANDOM_GREETING_SUCCESS = 'GET_RANDOM_GREETING_SUCCESS';
const GET_RANDOM_GREETING_FAILURE = 'GET_RANDOM_GREETING_FAILURE';

function getRandomGreetingSuccess(greeting) {
  return {
    type: GET_RANDOM_GREETING_SUCCESS,
    greeting
  };
}

function getRandomGreetingFailure(error) {
  return {
    type: GET_RANDOM_GREETING_FAILURE,
    error
  };
}

const initialState = {
  greeting: '',
  error: null
};

export function getRandomGreeting() {
  return async function(dispatch) {
    try {
      const response = await axios.get('/api/messages');
      dispatch(getRandomGreetingSuccess(response.data.text));
    } catch (error) {
      dispatch(getRandomGreetingFailure(error));
    }
  };
}

export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.greeting,
        error: null
      };
    case GET_RANDOM_GREETING_FAILURE:
      return {
        ...state,
        greeting: '',
        error: action.error
      };
    default:
      return state;
  }
}