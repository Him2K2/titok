import { Fragment } from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index)=>{
            let Layout = DefaultLayout
            if(route.layout===1){
              Layout = Fragment
            }

            const Page = route.component
            return <Route
             key={index} 
             path={route.path} 
             element={
              <Layout>
             <Page></Page>
             </Layout>
            }
             ></Route>
          })}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
