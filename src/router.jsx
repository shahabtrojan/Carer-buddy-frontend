import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import PageNotFound from "./pages/page-not-found";
import Login from "./pages/login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/home-pages/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import InterestSelect from "./components/interest-select/InterestSelect";
import ChatPage from "./pages/chat-page/ChatPage";
import FeedPage from "./pages/feed/FeedPage";
// import InterestSelect from "./components/interest-select/InterestSelect";

const PublicRouteAuthentication = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};
const PrivateRouteAuthentication = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/auth/login" />;
  } else {
    return <Outlet />;
  }
};
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/auth" element={<PublicRouteAuthentication />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/" element={<PrivateRouteAuthentication />}>
            <Route path="/" element={<Topbar />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/contact" element={<>Contact </>} />
              <Route path="/edit-info" element={<InterestSelect />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
