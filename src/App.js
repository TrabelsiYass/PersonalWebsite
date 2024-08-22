import {
  Route,
  Routes
} from "react-router-dom";
import MainWinodw from "./components/MainWindow";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import ProjectsPage from "./pages/ProjectsPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainWinodw />} />
      <Route path="/About" element={<Desktop1 />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Contact" element={<Desktop />} />
    </Routes>
  );
}
export default App;
