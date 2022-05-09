import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @import pages
const Register = React.lazy(() => import("./pages/auth/register"));

const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Router>
          <Routes>
            <Route path="/" element={<Register />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
