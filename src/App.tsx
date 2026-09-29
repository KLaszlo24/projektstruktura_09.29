//import './App.css'

import { Header } from "./components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { IntroCard } from "./components/IntroCard"
import { ListSection } from "./components/ListSection"

function App() {

  return (
    <>
      <Header />
      <IntroCard paragrafusok={["a","b","C"]}></IntroCard>
      <ListSection cim="alma" tartalom={["lalla", "lelele"] } rendelt ></ListSection>

    </>
  )
}

export default App
