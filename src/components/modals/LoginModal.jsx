import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { KgLogo } from "@/assets";
import { useNavigate } from "react-router";

export const LoginModal = () => {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-[#2E2155] hover:bg-transparent hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96"
        >
          Have an account? Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle className="text-2xl">Login</DialogTitle>
          <DialogDescription>
            <p>Log in with your email and password</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-3 max-w-sm text-center mx-auto">
            <img src={KgLogo} alt="" className="w-10 h-10" />
            <p className="text-2xl">
              <span className="font-bold">KeyGate</span> wants to connect to
              your wallet
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="bg-[#2E21558F] border-black text-white hover:text-white hover:bg-[#2E21558F]/90 text-lg rounded-full px-9 py-3 h-auto"
            >
              Connect Wallet
            </Button>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="bg-white border-black hover:bg-white/90 text-lg rounded-full px-9 py-3 h-auto"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
          <div className="flex justify-between items-center gap-4 max-w-xs mx-auto w-full">
            <div className="flex flex-col items-center gap-3">
              <p>Wallet</p>
              <p className="px-4 py-2 bg-[#F5F5F5]">0x51...123</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>Network</p>
              <p className="px-4 py-2 bg-[#F5F5F5]">Hedara</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
