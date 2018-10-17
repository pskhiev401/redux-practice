const ADD_PERSON = "ADD_PERSON";
const GET_PEOPLE = "GET_PERSON";

const initialState = {
  data: [
    {
      personID: 0,
      name: "Bill",
      age: 44,
      city: "Chicago"
    },
    {
      personID: 1,
      name: "Janice",
      age: 19,
      city: "New Brunswick"
    },
    {
      personID: 2,
      name: "Jerry-Chun-Li",
      age: 13,
      city: "Brooklyn"
    }
  ]
};

export function addPerson(newPerson) {
  return {
    type: ADD_PERSON,
    payload: newPerson
  };
}

export function getPeople(person0) {
  return {
    type: GET_PEOPLE,
    payload: initialState
  };
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      let newPerson = action.payload;
      return {
        ...state,
        data: [...state.data, newPerson]
      };
    case GET_PEOPLE:
      return state;
    default:
      return state;
  }
}
