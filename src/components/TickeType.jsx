import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { TicketMintModal } from "./modals/TicketMint";
import { Button } from "./ui/button";
const Tickets = [
  {
    id: 1,
    name: "VIP",
    price: "200",
    tier: "1",
  },
  {
    id: 2,
    name: "Regular",
    price: "100",
    tier: "2",
  },
  {
    id: 3,
    name: "General",
    price: "50",
    tier: "3",
  },
];

export const TickeType = () => {
  const [selectedTicket, setSelectedTicket] = useState(Tickets[0]);
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
          <p className="text-2xl font-bold text-white mx-auto">
            Select Your Ticket
          </p>
        </div>
      </header>
      <main className="flex flex-col h-full items-center justify-center gap-10 py-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-5 w-full">
          {Tickets.map((ticket) => (
            <div
              onClick={() => setSelectedTicket(ticket)}
              key={ticket.id}
              className={`flex items-center justify-between gap-5 px-10 py-5 bg-[#2E21558F] rounded-lg border border-[#2E2155] max-w-screen-lg mx-auto w-full cursor-pointer ${
                selectedTicket?.id === ticket.id ? "border-white" : ""
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-semibold">{ticket.name}</p>
                <p className="text-lg font-semibold">Tier ({ticket.tier})</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{ticket.price}</p>
              </div>
            </div>
          ))}
        </div>
        <TicketMintModal selectedTicket={selectedTicket} />
      </main>
    </div>
  );
};
