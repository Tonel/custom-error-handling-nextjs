import "./globals.css";
import Link from "next/link";
import ErrorButton from "@/app/components/ErrorButton";

export const metadata = {
    title: "My Next.js App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header className={"header"}>
                    <div className={"container"}>
                        <div className={"logo"}>My Next.js App</div>
                        <div className={"navbar"}>
                            {/* Your navigation links go here */}
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={"actions"}>
                            <ErrorButton label={"💣 Simulate Global Error"} />
                        </div>
                    </div>
                </header>
                <main className={"main"}>
                    <div className={"container"}>{children}</div>
                </main>
            </body>
        </html>
    );
}
