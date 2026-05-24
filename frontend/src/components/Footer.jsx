export default function Footer() {
    return (
        <footer data-testid="footer" className="section-x" style={{ paddingTop: 56, paddingBottom: 48, background: "var(--paper)" }}>
            <div className="grid grid-cols-12 gap-x-8 gap-y-10">
                <div className="col-span-12 md:col-span-4">
                    <p
                        className="font-serif italic"
                        style={{ fontSize: 24, color: "var(--ink)", letterSpacing: "-0.01em" }}
                    >
                        Supernova<span style={{ color: "var(--crimson)" }}>.</span> Education
                    </p>
                    <p className="font-sc mt-3" style={{ fontSize: 14, color: "var(--graphite)", lineHeight: 1.8 }}>
                        清晰带来结果——从认知探索到大学录取。
                    </p>
                    <p className="font-serif italic mt-1" style={{ fontSize: 14, color: "var(--graphite)" }}>
                        Clarity into outcomes — from discovery to acceptance.
                    </p>
                </div>

                <div className="col-span-6 md:col-span-3">
                    <p className="eyebrow">Studio</p>
                    <p className="font-serif mt-3" style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.6 }}>
                        Livingston, New Jersey
                        <br />
                        <span className="font-sc" style={{ color: "var(--graphite)", fontSize: 14 }}>
                            新泽西 · 利文斯顿
                        </span>
                        <br />
                        <span style={{ color: "var(--graphite)", fontSize: 14 }}>
                            In-person & online
                        </span>
                    </p>
                </div>

                <div className="col-span-6 md:col-span-3">
                    <p className="eyebrow">Contact</p>
                    <ul className="mt-3 space-y-2" style={{ fontSize: 15, color: "var(--ink)" }}>
                        <li>
                            <a href="mailto:info@supernovaedu.com" className="link-underline font-serif" data-testid="footer-email">
                                info@supernovaedu.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+19087583488" className="link-underline font-serif" data-testid="footer-phone">
                                908 · 758 · 3488
                            </a>
                        </li>
                        <li className="font-serif">
                            WeChat ·{" "}
                            <span style={{ fontStyle: "italic", color: "var(--crimson)" }}>supernova-seed</span>
                        </li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-2 md:text-right">
                    <p className="eyebrow">Hours</p>
                    <p className="font-serif mt-3" style={{ fontSize: 15, color: "var(--ink)" }}>
                        Mon — Sat
                        <br />
                        <span style={{ color: "var(--graphite)" }}>By appointment</span>
                    </p>
                </div>
            </div>

            <div className="rule-top mt-14 pt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--graphite)" }}>
                    © {new Date().getFullYear()} Supernova Education · All Rights Reserved
                </p>
                <p className="font-serif italic" style={{ fontSize: 14, color: "var(--graphite)" }}>
                    Designed as an editorial — read slowly.
                </p>
            </div>
        </footer>
    );
}
