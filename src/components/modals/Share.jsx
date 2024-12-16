import CopyButton from "../CopyButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const Share = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto">
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover text-white py-10">
        <DialogHeader className="sr-only">
          <DialogTitle className="text-2xl">Amount</DialogTitle>
          <DialogDescription className="sr-only">
            <p>Register with your email and password</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">Event Link</p>

          <CopyButton
            text="https://decentralize-events.vercel.app/"
            className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto"
          >
            Copy Link
          </CopyButton>
        </div>
        <DialogClose>
          <Button className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white rounded-full h-auto mx-auto">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
