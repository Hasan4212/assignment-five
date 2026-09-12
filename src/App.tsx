
import { Suspense } from 'react';

import Nav from './componrnt/nav'; 
import Banner from './componrnt/banner'; 
import BodyTittle from './componrnt/bodyTittle'; 
import Data from './componrnt/allData/data';
import type {Idata} from './types/dataType'; 
import Footer from './componrnt/footer';


const dataFetch = async(): Promise<Idata[]> => {
  const res = await fetch('/data.json') 
  const data = await res.json() 

  return data; 
}

function App() {

const dataPromise = dataFetch()
  return (
    <>

  <Nav></Nav>
  <Banner></Banner> 
  <BodyTittle></BodyTittle> 
  <Suspense fallback= {<h2>Loading.....</h2>}>
    <Data dataPromise = {dataPromise} />
  </Suspense> 
  <Footer></Footer>
  
    </>
  )
}

export default App
