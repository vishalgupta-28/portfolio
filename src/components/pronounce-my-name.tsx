"use client";

import { Volume2Icon, XIcon } from "lucide-react";
import { useState } from "react";

import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={cn(
          "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
          "after:absolute after:-inset-1",
          className
        )}
        onClick={() => {
          setOpen(true);
          trackEvent({
            name: "play_name_pronunciation",
          });
        }}
      >
        <Volume2Icon className="size-4.5" />
        <span className="sr-only">Pronounce my name</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative rounded-xl bg-background p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-2 -top-2 rounded-full bg-muted p-1 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <XIcon className="size-4" />
            </button>
            <embed
              width="600"
              height="180"
              src={namePronunciationUrl}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
