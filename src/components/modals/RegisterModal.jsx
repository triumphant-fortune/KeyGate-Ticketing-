import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Divider } from "antd";
import { ConnectWallet } from "./ConnectWallet";
import { LoginModal } from "./LoginModal";

export const RegisterModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#2E2155] hover:bg-[#2E2155]/90 text-2xl rounded-full px-9 py-6 h-auto w-96">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover text-white">
        <DialogHeader className="sr-only">
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            <p>Register with your email and password</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <p className="text-2xl text-center">
            WELCOME TO <br /> KeyGate EVENT ECOSYSTEM
          </p>
          <ConnectWallet />

          <Divider style={{ borderColor: "white", color: "white" }}>
            {" "}
            or{" "}
          </Divider>
          <LoginModal />
        </div>
      </DialogContent>
    </Dialog>
  );
};
