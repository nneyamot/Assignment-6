
import { useState } from 'react'
import './App.css'
import BlueVar from './Components/BlueVar/BlueVar'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import PremiumTools from './Components/PremiumTools/PremiumTools'

function App() {
  const [items, setItems] = useState([]);
  const promiseOfApi = fetch('/Api.json').then(res => res.json());

  return (
    <>
      <header className='w-11/12 mx-auto'>
        <NavBar items={items}></NavBar>
      </header>



      <main>
        <section className='w-11/12 mx-auto'>
          <Hero></Hero>
        </section>

        <section>
          <BlueVar></BlueVar>
        </section>

        <section className='text-center'>
          <PremiumTools items={items} setItems={setItems} promiseOfApi={promiseOfApi} ></PremiumTools>
        </section>




      </main>

    </>
  )
}

export default App
