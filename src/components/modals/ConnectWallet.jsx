import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { blade, hashpack, metamask } from "@/assets";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

const wallets = [
  {
    name: "Hashpack",
    icon: hashpack,
    url: "https://metamask.io/",
  },
  {
    name: "Blade",
    icon: blade,
    url: "https://walletconnect.com/",
  },
  {
    name: "MetaMask",
    icon: metamask,
    url: "https://wallet.coinbase.com/",
  },
];

export const ConnectWallet = () => {
  const { connect } = useConnect();

  const navigate = useNavigate();
  const { address: userWalletAddress } = useAccount();

  useEffect(() => {
    if (userWalletAddress) {
      navigate("/events");
    }
  }, [userWalletAddress, navigate]);

  function handleConnectWallet(walletName) {
    if (walletName === "MetaMask") {
      connect({ connector: injected() });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-[#2E2155] hover:bg-transparent hover:text-white text-2xl rounded-full px-9 py-4 h-auto w-96"
        >
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">CONNECT WALLET</DialogTitle>
          <DialogDescription>
            By connecting your wallet, you agree to our Terms of Service and
            privacy policy
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {wallets.map((wallet) => (
            <Button
              onClick={() => handleConnectWallet(wallet.name)}
              key={wallet.name}
              variant="outline"
              className="bg-transparent justify-start border-none hover:bg-transparent text-2xl rounded-full px-0 py-4 h-auto w-96 shadow-none"
            >
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
