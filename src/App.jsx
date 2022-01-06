import { Header, Aside, Footer } from "./components";

import RouteList from "./routes";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mx-auto lg:py-4">
        <div className="flex flex-wrap lg:-mx-5">
          <div className="w-1/4">
            <Aside />
          </div>
          <div className="w-3/4 lg:flex-1">
            <main>
              <Routes>
                {RouteList.map(route => (
                  <Route key={route.id} path={route.path} element={route.component} exact={route.exact} />
                ))}
              </Routes>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
