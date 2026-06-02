import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a number from 0 → target when scrolled into view.
 * Works with: integers, percentages ("70%"), ratios ("3 : 1").
 * If the value contains non-numeric segments, only the numeric part animates.
 */
export default function CountUp({ value, duration = 1400, className = "", style = {} }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(value);
    const [started, setStarted] = useState(false);

    // Parse: find first number in string
    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    const prefix = match ? match[1] : "";
    const numTarget = match ? parseFloat(match[2]) : null;
    const suffix = match ? match[3] : "";

    useEffect(() => {
        if (numTarget == null) {
            setDisplay(value);
            return;
        }
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplay(value);
            return;
        }
        // Initial state — show 0 until in view
        setDisplay(`${prefix}0${suffix}`);

        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !started) {
                        setStarted(true);
                        const startTime = performance.now();
                        const tick = (now) => {
                            const t = Math.min(1, (now - startTime) / duration);
                            // Ease out cubic
                            const eased = 1 - Math.pow(1 - t, 3);
                            const current = numTarget * eased;
                            // Preserve integer formatting unless target has decimal
                            const isInt = numTarget % 1 === 0;
                            const formatted = isInt ? Math.round(current) : current.toFixed(1);
                            setDisplay(`${prefix}${formatted}${suffix}`);
                            if (t < 1) requestAnimationFrame(tick);
                            else setDisplay(value);
                        };
                        requestAnimationFrame(tick);
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <span ref={ref} className={className} style={style}>
            {display}
        </span>
    );
}
