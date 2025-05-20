import { Navigate, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import DetailsPage from "./pages/DetailsPage"
import CheckOutPage from "./pages/CheckOutPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductsContext from "./context/ProductsContext"
import CardProvider from "./context/CardProvider"
import Layout from "./layout/Layout"

function App() {

  return (
    <>
     <CardProvider>
        <ProductsContext>
           <Layout>
                <Routes>
                  <Route index element={<Navigate to="/products" replace/>} />
                  <Route  path="/products" element={<Products/>}/>
                  <Route  path="/products/:id" element={<DetailsPage/>}/>
                  <Route  path="/checkout" element={<CheckOutPage/>}/>
                  <Route  path="*" element={<NotFoundPage/>}/>
                </Routes>
           </Layout>
        </ProductsContext>
      </CardProvider>
  


    </>
  )
}

export default App
