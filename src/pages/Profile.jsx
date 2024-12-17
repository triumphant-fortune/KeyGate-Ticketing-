import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";

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
      <main className="flex flex-col gap-10 justify-center items-center py-10 max-w-screen-xl mx-auto"></main>
    </div>
  );
};
