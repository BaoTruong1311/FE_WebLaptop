
import './App.css';
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routers"
import DefaultLayout from './components/Layout/DefaultLayout';
function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          )
        })}
        {privateRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </>
  );
}

export default App;
