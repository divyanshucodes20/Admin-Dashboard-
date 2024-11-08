import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/loader"
const Dashboard =lazy(()=>import("./pages/dashboard"))
const Customer =lazy(()=>import("./pages/customer"))
const Transaction =lazy(()=>import("./pages/transaction"))
const Product =lazy(()=>import("./pages/products"))
const App = () => {
  return (
  <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/customer" element={<Customer/>}/>
      <Route path="/admin/products" element={<Product/>}/>
      <Route path="/admin/transaction" element={<Transaction/>}/>
    </Routes>
    </Suspense>
  </Router>
  )
}

export default App
