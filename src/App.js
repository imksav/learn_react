import './App.css';
import './index.css';
import { User } from './User';
import { Planet } from './Planet';


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
    { name: "Earth", isGas: false },
    { name: "Mars", isGas: true },
    { name: "Jupiter", isGas: false },
    { name: "Neptune", isGas: true},
  ]
  return (
    <div>
      {planets.map((title, key) => {
        return (
          <Planet name={title.name} isGas={title.isGas} />
        )
      })}
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
    </section>
  );
}