
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routers"
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import AuthService from './services/AuthService';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      if (user.roles.includes('ROLE_ADMIN')) {
        setIsAdmin(true);
      }
    }
  }, [isAdmin]);
  return (
    <>
      <Routes>

        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout || DefaultLayout
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
          );
        })}
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout || DefaultLayout
          return (
            <Route
              key={index}
              path={route.path}
              element={
                currentUser ?
                  (isAdmin ?
                    (<Layout>
                      <Page />
                    </Layout>
                    ) :
                    (
                      <Navigate to={"/"} replace />
                    )
                  ) :
                  (
                    <Navigate to={"/login"} replace />
                  )
              }
            />
          );
        })}

      </Routes>
    </>
  );
}

export default App;
