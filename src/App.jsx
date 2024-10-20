
import './App.css'
import DaisyUINavBar from './componets/navBar/daisyUINavBar'
import NavBar from './componets/navBar/NavBar'
import SubjectChart from './componets/SubjectsChart/SubjectChart'

function App() {

  return (
    <div >
      {/* <button className='btn btn-primary'>get start</button> */}
      <NavBar></NavBar>
      <SubjectChart></SubjectChart>
      {/* <DaisyUINavBar></DaisyUINavBar> */}
    </div>
  )
}

export default App
