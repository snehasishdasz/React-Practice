
import './App.css'
import Card from './components/Card'

function App() {

  const myObj={
    name:"Snehasish",
    age:22,
    Gender:"Male",
  }

  return (
    <>
    <h1 className='bg-green-400 p-4 text-black rounded-l mb-4'>Tailwind Test</h1>
    <Card  username="Bikash" btnText="ClickME" newObj={myObj}/>
    <Card username="Dillip" btnText="VisitME"/>

    </>
  )
}

export default App
