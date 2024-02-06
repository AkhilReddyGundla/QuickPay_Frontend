import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import {TransferMoney} from './pages/TransferMoney'
import { Suspense,lazy } from 'react'
const signup = lazy(()=>import("./pages/Signup"))
const signin = lazy(()=>import("./pages/Signin"))
const dashboard = lazy(()=>import("./pages/Dashboard"))
const send = lazy(()=>import("./pages/TransferMoney"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Suspense fallback={"Loading...."} ><Signup/></Suspense>}/>
          <Route path = '/signin' element = {<Suspense fallback={"Loading...."} ><Signin/></Suspense>}/>
          <Route path = '/dashboard' element = {<Suspense fallback={"Loading...."} ><Dashboard/></Suspense>}/>
          <Route path = '/send' element = {<Suspense fallback={"Loading...."} ><TransferMoney/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
