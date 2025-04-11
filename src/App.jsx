import { Navigate, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import DetailsPage from "./pages/DetailsPage"
import CheckOutPage from "./pages/CheckOutPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Navigate to="products" replace/>} />
      <Route  path="products" element={<Products/>}/>
      <Route  path="products/:id" element={<DetailsPage/>}/>
      <Route  path="checkout" element={<CheckOutPage/>}/>
      <Route  path="*" element={<NotFoundPage/>}/>
    </Routes>

    </>
  )
}

export default App
