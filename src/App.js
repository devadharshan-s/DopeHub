import './App.css';
import {useMemo} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./scenes/loginpage";
import HomePage from "./scenes/homepage"
import ProfilePage from "./scenes/profilepage";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme";
import {useSelector} from "react-redux";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
                <Routes>
                  <Route path = "/" element={<LoginPage/>} />
                  <Route path ="/home" element={isAuth ? <HomePage/> : <Navigate to="/" />} />
                  <Route path ="/profile/:id" element={isAuth ? <ProfilePage/> : <Navigate to="/" />} />
                </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
