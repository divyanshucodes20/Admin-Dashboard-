import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/loader"
const Dashboard =lazy(()=>import("./pages/dashboard"))
const Customer =lazy(()=>import("./pages/customer"))
const Transaction =lazy(()=>import("./pages/transaction"))
const Product =lazy(()=>import("./pages/products"))
const NewProduct=lazy(()=>import("./pages/management/newProduct"))
const ProductManagement=lazy(()=>import("./pages/management/productManagement"))
const TransactionManagement=lazy(()=>import("./pages/management/transactionManagement"))
const BarChart=lazy(()=>import("./pages/charts/barChart"))
const PieChart=lazy(()=>import("./pages/charts/pieChart"))
const LineChart=lazy(()=>import("./pages/charts/lineChart"))
const Toss=lazy(()=>import("./pages/apps/toss"))
const CouponGenerator=lazy(()=>import("./pages/apps/couponGenerator"))
const StopWatch=lazy(()=>import("./pages/apps/stopWatch"))
const App = () => {
  return (
  <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          />
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/customer" element={<Customer/>}/>
      <Route path="/admin/products" element={<Product/>}/>
      <Route path="/admin/transaction" element={<Transaction/>}/>
      <Route path="/admin/product/new" element={<NewProduct/>}/>
      <Route path="/admin/product/:id" element={<ProductManagement/>}/>
      <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
      <Route path="/admin/chart/bar" element={<BarChart/>}/>
      <Route path="/admin/chart/line" element={<LineChart/>}/>
      <Route path="/admin/chart/pie" element={<PieChart/>}/>
      <Route path="/admin/app/coupon" element={<CouponGenerator/>}/>
      <Route path="/admin/app/stopwatch" element={<StopWatch/>}/>
      <Route path="/admin/app/toss" element={<Toss/>}/>
    </Routes>
    </Suspense>
  </Router>
  )
}

export default App
