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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/events">
        <Route index element={<Dashboard />} />
        {/* element={<Dashboard />} /> */}
        <Route path=":id" element={<Event />} />
      </Route>

      <Route path="/ticketing">
        <Route index element={<Ticketing />} />
        <Route path="ticket-type" element={<TickeType />} />
      </Route>
      {/* <Route path="/event" element={<Event />} /> */}
    </>
  )
);

export default router;
