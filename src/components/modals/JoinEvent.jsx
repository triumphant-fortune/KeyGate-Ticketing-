import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Share } from "./Share";

export const JoinEvent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#3A296B] border-[#2E2155] hover:bg-[#3A296B]/90 hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96 mx-auto">
          Join Event
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1D1539] bg-cover text-white py-10 items-center justify-center">
        <DialogHeader className="sr-only">
          <DialogTitle className="text-2xl">Amount</DialogTitle>
          <DialogDescription className="sr-only">
            <p>Register with your email and password</p>
          </DialogDescription>
        </DialogHeader>
        <p className="text-lg text-center">
          🎉 congratulations Event Created 🎉
        </p>
        <Share />
      </DialogContent>
    </Dialog>
  );
};
