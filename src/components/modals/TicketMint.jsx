import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Ticket } from "./Ticket";

export const TicketMintModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto"
        >
          Continue
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover text-white py-10">
        <DialogHeader className="sr-only">
          <DialogTitle className="text-2xl">Amount</DialogTitle>
          <DialogDescription className="sr-only">
            <p>Register with your email and password</p>
          </DialogDescription>
        </DialogHeader>
       <div className="flex flex-col items-center gap-7">
          <h3 className="text-5xl font-bold mb-5">Amount</h3>
          <p className="text-2xl text-center">Enter Amount of Tickets</p>
          <Input
            placeholder="Amount"
            className="text-black bg-white text-lg px-6 py-4"
          />
          <p className="text-xl text-center">
            Unlocking digital treasures: Minting my ticket as an NFT! 🎟️✨ #NFT
            DigitalCollectible TicketToTheFuture
          </p>
          <Ticket />
        </div>
      </DialogContent>
    </Dialog>
  );
};
