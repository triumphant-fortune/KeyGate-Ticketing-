import { TicketComplete } from "@/components/modals/TicketComplete";
import { Input } from "@/components/ui/input";

export const WelcomeForm = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/decentralize-events/cfwgr8v7ithsn20m8o58')] bg-cover min-h-screen text-white">
      <header className="bg-[#242062] px-8 py-5">
        <div className="flex items-center justify-center max-w-screen-xl mx-auto">
          <p className="text-2xl font-bold text-white">
            Welcome To KeyGate web3 DID Ecosystem
          </p>
        </div>
      </header>
      <main className="flex gap-10 py-10 max-w-screen-xl mx-auto items-center justify-center">
        <div className="flex flex-col gap-10 max-w-screen-lg mx-auto items-center justify-center">
          <h1 className="text-4xl font-bold">Join us for an exciting event </h1>
          <form className="flex flex-col gap-10 w-full">
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                className="w-full bg-transparent max-w-3xl py-6 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="did">DID Identity</label>
              <Input
                id="did"
                type="text"
                className="w-full bg-transparent max-w-3xl py-6 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <label htmlFor="ticketType">Ticket Type</label>
              <Input
                id="ticketType"
                type="text"
                className=" w-full bg-transparent max-w-3xl py-6 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="ticketPrice">Ticket Price</label>
              <Input
                id="ticketPrice"
                type="text"
                className="w-full bg-transparent max-w-3xl py-6 px-6 shadow-none border border-white placeholder:text-white text-white text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <TicketComplete />
          </form>
        </div>
      </main>
    </div>
  );
};
