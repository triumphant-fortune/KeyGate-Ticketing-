import { profile } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router";

const events = {
  yourEvents: [
    {
      id: 1,
      title: "Event 1",
      date: "2023-01-01",
      location: "Location 1",
    },
    {
      id: 2,
      title: "Event 2",
      date: "2023-01-02",
      location: "Location 2",
    },
    {
      id: 3,
      title: "Event 3",
      date: "2023-01-03",
      location: "Location 3",
    },
  ],
  invitedEvents: [
    {
      id: 4,
      title: "Event 4",
      date: "2023-01-04",
      location: "Location 4",
    },
    {
      id: 5,
      title: "Event 5",
      date: "2023-01-05",
      location: "Location 5",
    },
    {
      id: 6,
      title: "Event 6",
      date: "2023-01-06",
      location: "Location 6",
    },
  ],
};

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/xon0l7vlxlmmasayigsa')] bg-cover min-h-screen text-white">
      <header className="bg-[#242062] px-8 py-5">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <p className="text-2xl font-bold text-white">Welcome Back!</p>
          <Button variant="ghost" className="p-0 rounded-full">
            <img src={profile} alt="" className="w-10 h-10 rounded-full" />
          </Button>
        </div>
      </header>
      <main className="flex flex-col gap-10 py-10 max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex items-center gap-7 px-6 py-4 bg-[#D9D9D980] rounded-full border max-w-screen-lg mx-auto">
            <div className="flex items-center w-full gap-2">
              <Input
                type="text"
                placeholder="Search"
                className="bg-transparent shadow-none border-0 placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Search className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-5 px-6">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Your Events</p>
            <Button variant="ghost" className="text-lg rounded-full h-auto">
              Show More
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {events.yourEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/zrmdglir1jpnrzak9oq4')] bg-cover flex items-center justify-between gap-5 px-6 py-4 text-white h-96 w-9h-96"
              >
                <div className="flex flex-col gap-5 text-3xl">
                  <p className="font-bold">{event.title}</p>
                  <p className="">{event.date}</p>
                  <p className="">{event.location}</p>
                </div>
              </div>
            ))}
            <div
              className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/zrmdglir1jpnrzak9oq4')] bg-cover flex items-center justify-center gap-5 px-6 py-4 text-white h-96 w-9h-96 cursor-pointer"
              onClick={() => navigate("/ticketing")}
            >
              <div className="flex flex-col gap-5 text-3xl items-center">
                <Plus className="h-10 w-10 text-white" />
                <p className="font-bold">Create Event</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-6">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Events Near You</p>
            <Button variant="ghost" className="text-lg rounded-full h-auto">
              Show More
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
            {events.invitedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/zrmdglir1jpnrzak9oq4')] bg-cover flex items-center justify-between gap-5 px-6 py-4 text-white h-96 w-9h-96"
              >
                <div className="flex flex-col gap-5 text-3xl">
                  <p className="font-bold">{event.title}</p>
                  <p className="">{event.date}</p>
                  <p className="">{event.location}</p>
                </div>
              </div>
            ))}
            <div
              className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/zrmdglir1jpnrzak9oq4')] bg-cover flex items-center justify-center gap-5 px-6 py-4 text-white h-96 w-9h-96 cursor-pointer"
              onClick={() => navigate("/ticketing")}
            >
              <div className="flex flex-col gap-5 text-3xl items-center">
                <Plus className="h-10 w-10 text-white" />
                <p className="font-bold">Create Event</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full mx-auto">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-10 w-full py-10">
            <h2 className="text-2xl font-bold text-center">News Feed</h2>
            <div className="flex items-center gap-7 px-6 py-4 bg-[#D9D9D980] rounded-full border w-full mx-auto">
              <div className="flex items-center w-full gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent shadow-none border-0 placeholder:text-white text-white text-xl  focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <Button className="bg-[#2E2155] hover:bg-[#2E2155]/90 text-2xl rounded-full px-9 py-6 h-auto w-96">
              Subscribe
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};
