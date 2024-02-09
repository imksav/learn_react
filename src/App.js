import './App.css';
import './index.css';
import { User } from './User';
import { Planet } from './Planet';
import { useState } from 'react';


// functions
function Signup() {
  return (
   <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Register
</button>
  )
}

function Fun() {
  const age = 20
  const isGreen=false
  return (
    <div>
      {age >= 18 ? <h1>Voter</h1> : <h1>Non Voter</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>
    </div>
  )
}

function LearnList() {
  const names = ["Sadikshya", "Keshav", "Sofy", "Seseliya", "Soniska"];
  const users = [
    { name: "Sadikshya", age: 13 },
    { name: "Keshav", age: 25 },
    { name: "Sofy", age: 12 },
    { name: "Seseliya", age: 11 },
    
  ]
  return (
    <div className='App'>
      {names.map((name, key)=>{
        return <h1 className='text-xl text-red-500' key={key}> {name}</h1>;
      })}
      {users.map((user, key) => {
        return (
          // calling models
          <User name={user.name} age={user.age} />
        )
      })}
    </div>
  )
}

function Planets() {
  const planets = [
    { name: "Earth", isGas: true },
    { name: "Mars", isGas: true },
    { name: "Jupiter", isGas: true },
    { name: "Neptune", isGas: true},
  ]
  return (
    <div>
            {planets.map((title, key) => {
        return (
          <Planet name={title.name} isGas={title.isGas} />
        )
      })}
      {/* {
        planets.map((planet, key) => 
          planet.isGas && <h1>{ planet.name}</h1>
        )
      } */}
      
    </div>
  )
}

function Age() {
  const [age, setAge]=useState(0)
  const increaseAge = () => {
    setAge(age+1)
  }
  return (
    <div className='App'>
      {age}
      <button onClick={increaseAge} >Increase Age</button>
    </div>
  )
}

function DisplayText() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className='App'>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  )
}

function Example() {
  const [textColour, setTextColour] = useState("black");
  return (
    <div className='App'>
      <button class="bg-blue-700 rounded py-2 px-4 font-bold font-sans text-white mt-2" onClick={() => { setTextColour(textColour==="black"?"red":"black"); }}>Show/Hide</button>
 <h1 style={{color: textColour, padding:2}}>Showing</h1>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count+1)
  }
  const decreaseCount = () => {
    setCount(count-1)
  }
  const zeroCount = () => {
    setCount(0)
  }
  return (
    <div className='App'>
      <button class="bg-blue-700 rounded py-2 px-4 font-bold font-sans text-white mx-2" onClick={increaseCount}>+</button>
            <button class="bg-blue-700 rounded py-2 px-4 font-bold font-sans text-white mx-2" onClick={decreaseCount}>-</button>
            <button class="bg-blue-700 rounded py-2 px-4 font-bold font-sans text-white mx-2" onClick={zeroCount}>0</button>
      { count}
    

    </div>
  )
}

function Form(){
  return (
  <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
)
}
// calling functions
export default function Gallery() {
  return (
    <section>
      <Signup />
      <Fun />
      <LearnList />
      <Planets />
      <Age />
      <DisplayText />
      <Example />
      <Counter />
      <Form />
    </section>
  );
}