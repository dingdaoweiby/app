import { useEffect, useRef, useState } from "react";

/**
 * Reveal — fade + translateY on intersection.
 * Once revealed, stays revealed (no re-animation on re-scroll).
 *
 * Props:
 *   delay   — ms before animation starts (stagger children)
 *   y       — initial translateY in px (default 24)
 *   as      — wrapper tag (default "div")
 *   threshold — IO threshold (default 0.15)
 */
export default function Reveal({ children, delay = 0, y = 24, as: Tag = "div", threshold = 0.15, className = "", style = {} }) {
    const ref = useRef(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        // Respect reduced motion
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setSeen(true);
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setSeen(true);
                        io.disconnect();
                    }
                });
            },
            { threshold, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: seen ? 1 : 0,
                transform: seen ? "translateY(0)" : `translateY(${y}px)`,
                transition: `opacity 720ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 720ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </Tag>
    );
}
