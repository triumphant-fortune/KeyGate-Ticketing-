import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "./App";
import { TickeType } from "./components/TickeType";
import { Dashboard } from "./pages/Dashboard";
import { Ticketing } from "./pages/Ticketing";
import { Event } from "./pages/Event";
import { WelcomeForm } from "./pages/WelcomeForm";
import { ViewTicket } from "./pages/ViewTicket";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticketing">
        <Route index element={<Ticketing />} />
        <Route path="ticket-type" element={<TickeType />} />
      </Route>
      <Route path="/welcome" element={<WelcomeForm />} />
      <Route path="/event" element={<Event />} />
      <Route path="/view-ticket" element={<ViewTicket />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);

export default router;
