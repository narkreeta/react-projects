import "./App.css";
import React from "react";
import CounterCmp from "./components/CounterCmp";

function App() {
  // const [state, SetState] = React.useState({
  //   id: undefined,
  //   name: undefined,
  //   age: undefined,
  // });
  return (
    <div className="App">
      <CounterCmp />
      {/* another test */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state.name,state.id,state.age);
        }}
      >
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            SetState({...state, id: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            SetState({...state, name: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => {
            SetState({...state, age: e.target.value });
          }}
        />
        <br />
        <input type="submit" value="submit" />
      </form>*/}
    </div> 
  );
}

export default App;
