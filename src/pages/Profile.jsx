import { message, profile, star, wallet } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";
import { Link } from "react-router";

const links = [
  {
    title: "Your Events",
    link: "/dashboard",
    icon: star,
  },
  {
    title: "Wallet",
    link: "/view-ticket",
    icon: wallet,
  },
  {
    title: "Messages",
    link: "#",
    icon: message,
  },
];

export const Profile = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover min-h-screen text-white">
      <header className="bg-[#242062] px-8 py-5">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <Button
            onClick={() => {
              window.history.back();
            }}
            variant="ghost"
            className="p-0 rounded-full hover:bg-transparent hover:text-white"
          >
            <ArrowLeft className="w-10 h-10" />
          </Button>
          <p className="text-2xl font-bold text-white">Profile</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-0 rounded-full">
              <Settings className="w-10 h-10" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-20 py-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-20 w-full">
          <div className="w-20 h-20">
            <img src={profile} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-10 w-full">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="flex flex-col items-center gap-6 p-10 w-full bg-[#2E21558F] rounded-lg"
              >
                <img src={link.icon} alt="" className="w-10 h-10" />
                <p>{link.title}</p>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center gap-6 p-10 w-full bg-[#2E21558F] rounded-lg">
            <div className="flex flex-col gap-2">
              <p className="text-lg">Give Us Feedback</p>
              <p className="text-sm">Issues, Feature ideas, General</p>
            </div>
            <img src={message} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};
