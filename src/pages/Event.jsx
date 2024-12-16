import { profile } from "@/assets";
import { JoinEvent } from "@/components/modals/JoinEvent";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Event = () => {
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
          <p className="text-2xl font-bold text-white">Event</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-0 rounded-full">
              <img src={profile} alt="" className="w-10 h-10 rounded-full" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-10 justify-center items-center py-10 max-w-screen-xl mx-auto">
        <div className="w-full max-w-lg">
          <img
            src="https://res.cloudinary.com/dr6bek9dv/image/upload/v1734275541/meta-aution/e7k0lsnyrxlpnhmmjlie.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 py-4 px-7 border w-full max-w-lg">
          <p>Stone Wales, 4.08.2025 - 10.00</p>
          <p>AI launch Event</p>
        </div>
        <div className="flex flex-col gap-5 py-4 px-7 border w-full max-w-lg">
          <p>Location</p>
          <p>Lagos, Nigeria</p>
        </div>

        <JoinEvent/>
      </main>
    </div>
  );
};
