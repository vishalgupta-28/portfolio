"use client";

import Image from "next/image";
import { motion } from "motion/react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { TECH_STACK } from "@/portfolio/data/tech-stack";

export function TeckStack() {
  // Triple the stack for a very long scrolling experience and seamless loop
  const duplicatedTechStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75",
          "overflow-hidden relative"
        )}
      >
        {/* Modern Side Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-zinc-50/100 dark:from-zinc-950/100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-zinc-50/100 dark:from-zinc-950/100 to-transparent z-10 pointer-events-none" />

        <div className="py-4">
          <TooltipProvider>
            <motion.div
              className="flex gap-8 w-max"
              animate={{
                x: ["-33.333%", "0%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
              style={{
                // Ensure smoothness
                willChange: "transform",
              }}
            >
              {duplicatedTechStack.map((tech, index) => {
                return (
                  <div key={`${tech.key}-${index}`} className="flex flex-none">
                    <TooltipRoot>
                      <TooltipTrigger
                        render={
                          <a
                            href={tech.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={tech.title}
                            className="transition-transform duration-300 hover:scale-110 active:scale-95"
                          />
                        }
                      >
                        <Image
                          src={`https://stealth.blr1.digitaloceanspaces.com/assest/stack/${tech.key}`}
                          alt={`${tech.title} icon`}
                          width={48}
                          height={48}
                          unoptimized
                          className="w-12 h-12 object-contain filter grayscale-[0.5] hover:grayscale-0 transition-all duration-300"
                        />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>{tech.title}</p>
                      </TooltipContent>
                    </TooltipRoot>
                  </div>
                );
              })}
            </motion.div>
          </TooltipProvider>
        </div>
      </PanelContent>
    </Panel>
  );
}
