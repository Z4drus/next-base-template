"use client";

import { motion } from "framer-motion";
import { ArrowRight, Blocks, Shield, Star, Zap } from "lucide-react";
import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero238 = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Early Access ",
    },
    {
      icon: Star,
      title: "Latest Features ",
    },
    {
      icon: Shield,
      title: "Priority Support",
    },
    {
      icon: Blocks,
      title: "Exclusive Blocks",
    },
  ];

  return (
    <section className="h-full overflow-hidden w-screen lg:h-screen">
      <AuroraBackground>
        <div className="container relative py-32 flex h-full flex-col lg:flex-row">
          <div className="mt-auto space-y-12 lg:w-1/2">
            <h1 className="mt-3 max-w-xl text-5xl font-medium font-semibold tracking-tighter lg:text-6xl">
              Unlock the Premium Blocks with Just one time payment
            </h1>
            <div className="flex items-center gap-4">
              <Button>Get Started</Button>
              <Button variant="ghost">
                Explore benefits <ArrowRight />
              </Button>
            </div>
            <ul className="mt-20 flex flex-wrap gap-4">
              {benefits.map((benifit, index) => {
                const Icon = benifit.icon;
                return (
                  <li key={benifit.title} className="flex items-center gap-2">
                    <div className="size-">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-sm">{benifit.title}</span>
                    {index !== benefits.length - 1 && (
                      <div className="bg-foreground ml-2 size-1 rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-primary text-secondary absolute bottom-0 right-0 w-[210px] rounded-2xl p-4 text-sm"
            >
              <span className="mr-3 inline-block size-2 rounded-full bg-orange-500" />
              <span className="font-semibold">ShadcnBlocks</span>
              <span className="text-muted-foreground">
                — blocks Lorem ipsum dolor sit amet, consectetur amor{" "}
              </span>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export { Hero238 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/aurora-background.json
// Modified so we could change the aurora animate class and colors

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#000_10%,#666_15%,#ccc_20%,#fff_25%,#333_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--gray-200": "#ccc",
              "--gray-400": "#666",
              "--gray-800": "#333",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora-background pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,var(--gray-400)_15%,var(--gray-200)_20%,var(--white)_25%,var(--gray-800)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:mix-blend-difference after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
