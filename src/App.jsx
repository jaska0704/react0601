import { Route, Routes } from "react-router-dom";
import { route } from "./router/router";
import { MainLayout } from "./layout/main.layout";
import { Form } from "./components/form";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {route.map((item, i) => (
          <Route
            key={i}
            path={item.path}
            index={item.path ? false : true}
            element={item.component}
          />
        ))}
      </Route>
    </Routes>
  );
}
export default App;
