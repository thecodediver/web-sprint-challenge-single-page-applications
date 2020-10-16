import React, {useState} from "react";
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'
import FormContent from './components/FormContent'
import Success from './components/Success'

const App = () => {
  const [order, setOrder] = useState([])
  return (
    <>
      <Header />
      <Route exact path="/">
        <HomeContent />
      </Route>
      <Route path="/pizza">
        <FormContent order={order} setOrder={setOrder} />
      </Route>
      <Route path="/success">
        <Success order={order} />
      </Route>
      <Footer />
    </>
  );
};
export default App;
