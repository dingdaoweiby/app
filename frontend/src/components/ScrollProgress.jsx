import { useEffect, useState } from "react";

/**
 * Top-of-page scroll progress bar. Thin orange line that grows from 0 → 100%
 * as the user scrolls the document. Pinned just below the Nav.
 */
export default function ScrollProgress() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const update = () => {
            const doc = document.documentElement;
            const max = doc.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            setPct(ratio * 100);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 88,
                left: 0,
                right: 0,
                height: 2,
                background: "transparent",
                zIndex: 49,
                pointerEvents: "none",
            }}
        >
            <div
                data-testid="scroll-progress"
                style={{
                    height: "100%",
                    width: `${pct}%`,
                    background: "var(--orange)",
                    transition: "width 80ms linear",
                }}
            />
        </div>
    );
}
