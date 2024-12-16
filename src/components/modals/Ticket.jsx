import { Divider } from "antd";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useNavigate } from "react-router";

const ticketDetail = {
  id: 1,
  name: "Joe Biden",
  event: "Event 1",
  price: "200",
  location: "Location 1",
  payment: "Successful",
  startTime: "2023-01-01",
  endTime: "2023-01-02",
  type: "VIP",
  description:
    "Unlocking digital treasures: Minting my ticket as an NFT! 🎟️✨ #NFT DigitalCollectible TicketToTheFuture",
};
export const Ticket = () => {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto">
          Mint Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover text-white py-10">
        <DialogHeader className="sr-only">
          <DialogTitle className="text-2xl">Amount</DialogTitle>
          <DialogDescription className="sr-only">
            <p>Register with your email and password</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-7 bg-white text-black rounded-lg py-6">
          <h3 className="text-2xl font-bold mb-5">{ticketDetail.event}</h3>
          <div className="grid grid-cols-2 gap-5 w-full px-6">
            <div className="flex flex-col gap-2">
              <p className="text-2xl">Name:</p>
              <p className="text-xl font-bold">{ticketDetail.name}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl ">Price:</p>
              <p className="text-xl font-bold">{ticketDetail.price}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl ">Location:</p>
              <p className="text-xl font-bold">{ticketDetail.location}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">Payment:</p>
              <p className="text-xl font-bold">{ticketDetail.payment}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Start Time:</p>
              <p className="text-xl font-bold">{ticketDetail.startTime}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">End Time:</p>
              <p className="text-xl font-bold">{ticketDetail.endTime}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">Type:</p>
              <p className="text-xl font-bold">{ticketDetail.type}</p>
            </div>
          </div>
          <Divider style={{ borderColor: "black", color: "black" }} dashed />
          <Button>Download Ticket</Button>
        </div>
        <Button onClick={() => {navigate("/event")}} className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto">Go to Event</Button>
      </DialogContent>
    </Dialog>
  );
};
