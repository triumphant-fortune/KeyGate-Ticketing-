import { hbarLogo, profile, QR } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export const ViewTicket = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/zrmdglir1jpnrzak9oq4')] bg-cover min-h-screen text-white">
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
          <p className="text-2xl font-bold text-white">Ticket Wallet</p>
          <div className="flex items-center gap-4">
            <Link to="/profile" variant="ghost" className="p-0 rounded-full">
              <img src={profile} alt="" className="w-10 h-10 rounded-full" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-10 py-10 max-w-screen-md mx-auto">
        <div className="flex flex-col items-center justify-between bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] gap-10 p-10 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-4 text-lg">
              <p>HBAR</p>
              <p>0x123...345</p>
            </div>
            <img src={hbarLogo} className="w-10 h-10" alt="" />
          </div>
          <div className="flex flex-col justify-between w-full gap-4 text-lg">
            <p>Available Balance</p>
            <p className="flex items-center gap-2">
              <img src={hbarLogo} className="w-5 h-5" alt="" />
              <span>0.0</span>
            </p>
          </div>
        </div>
        <p className="text-2xl font-bold">Your Current NFT Tickets</p>
        <div className="bg-[#2E21558F] p-10 rounded-xl flex justify-between items-center">
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex flex-col gap-3">
              <p className="font-bold">Event</p>
              <p>Event Name</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Ticket Type</p>
              <p>Vip</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Day</p>
              <p>20.12.2024</p>
            </div>
          </div>

          <img src={QR} alt="" className="w-[200px] h-[200px]"/>
        </div>
      </main>
    </div>
  );
};
