"use client";

import { cn } from "@/lib/utils/cn";
import { animate, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";


type counterProps = {
    target: number,
    className?: string,
    suffix: React.ReactNode
};

export function Counter ({target,className,suffix}: counterProps) {
    
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLSpanElement>(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    useEffect(() => {
        if(!isInView) return;

        const control = animate(0,target, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => {
                setCount(Math.round(value));
            },
        })

        return ()=> control.stop();
    },[isInView, target]);

    return (
        <span ref={ref} className={cn(className)}>
          {count}{suffix}
        </span>
    )
}