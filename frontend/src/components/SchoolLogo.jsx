import { useEffect, useRef, useState } from "react";

const SOURCES = (domain) => [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icon.horse/icon/${domain}`,
];

export default function SchoolLogo({ domain, name, size = 56, imgSize = 40 }) {
    const sources = SOURCES(domain);
    const [idx, setIdx] = useState(0);
    const [failed, setFailed] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        setIdx(0);
        setFailed(false);
    }, [domain]);

    const initials = name
        .replace(/^The\s+/i, "")
        .split(/\s+/)
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div
            className="flex items-center justify-center"
            style={{
                width: size,
                height: size,
                background: failed ? "var(--navy)" : "var(--paper)",
                border: "1px solid var(--line)",
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            {failed ? (
                <span
                    className="font-display"
                    style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: Math.round(size * 0.4),
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                    }}
                >
                    {initials}
                </span>
            ) : (
                <img
                    ref={imgRef}
                    src={sources[idx]}
                    alt={`${name} logo`}
                    loading="lazy"
                    style={{
                        maxWidth: imgSize,
                        maxHeight: imgSize,
                        objectFit: "contain",
                        display: "block",
                    }}
                    onError={() => {
                        if (idx + 1 < sources.length) setIdx(idx + 1);
                        else setFailed(true);
                    }}
                    onLoad={(e) => {
                        if (e.currentTarget.naturalWidth < 32) {
                            if (idx + 1 < sources.length) setIdx(idx + 1);
                            else setFailed(true);
                        }
                    }}
                />
            )}
        </div>
    );
}
