import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "./ui/button";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset status after 2 seconds
  };
  return (
    <div
      className={cn(
        "bg-white relative w-full border border-primary text-primary px-6 py-[14px] font-bold rounded-xl transition-all flex justify-between items-center"
      )}
    >
      <span
        className={cn(
          "font-bricolage text-primary absolute top-[14px] right-6 opacity-0 transition-all",
          {
            "opacity-100": copied,
          }
        )}
      >
        Copied!
      </span>
      <div
        className={cn(
          "w-full py-[10px] px-5 border border-[#7C4CFF52] rounded-lg flex gap-11 items-center"
        )}
      >
        <input
          type="text"
          className="w-full text-[#000066] text-sm md:text-base"
          value={window.location.href}
          readOnly
        />
        <CopyToClipboard text={window.location.href} onCopy={onCopyText}>
          <Button
            className="w-fit h-auto p-0"
            variant="link"
            type="button"
            disabled={copied}
            onClick={() => setCopied(true)}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopyButton;
