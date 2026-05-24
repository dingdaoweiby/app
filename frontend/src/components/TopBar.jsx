export default function TopBar() {
    return (
        <div
            data-testid="top-bar"
            style={{
                background: "var(--navy)",
                color: "#fff",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div
                className="section-x flex items-center justify-between"
                style={{ height: 36, fontFamily: "'IBM Plex Mono', monospace" }}
            >
                <p
                    style={{
                        fontSize: 10.5,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.78)",
                        fontWeight: 400,
                    }}
                >
                    Now interviewing · Class of 2027 · By appointment only
                </p>
                <div className="flex items-center gap-5">
                    <p
                        className="hidden sm:block"
                        style={{
                            fontSize: 10.5,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.62)",
                        }}
                    >
                        Livingston · NJ
                    </p>
                    <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.22)" }} className="hidden sm:block" />
                    <a
                        href="#"
                        data-testid="topbar-lang-en"
                        style={{
                            fontSize: 10.5,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--orange)",
                            fontWeight: 500,
                        }}
                    >
                        EN
                    </a>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>·</span>
                    <a
                        href="#"
                        data-testid="topbar-lang-zh"
                        className="link-underline"
                        style={{
                            fontSize: 10.5,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.78)",
                        }}
                    >
                        中文
                    </a>
                </div>
            </div>
        </div>
    );
}
