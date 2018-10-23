const ADD_PERSON = "ADD_PERSON";
const GET_PEOPLE = "GET_PERSON";

const initialState = {
  data: [
    {
      name: "Bill",
      age: 44,
      city: "Chicago"
    },
    {
      name: "Janice",
      age: 19,
      city: "New Brunswick"
    },
    {
      name: "Jerry-Chun-Li",
      age: 13,
      city: "Brooklyn"
    }
  ]
};

export function addPerson(newPerson) {
  console.log(newPerson)
  return {
    type: ADD_PERSON,
    payload: newPerson
  };
}

export function getPeople() {
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
