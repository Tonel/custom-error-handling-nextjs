"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
    // custom logic (e.g., log the error or send it to an APM service)

    return (
        <html>
            <body>
                <div className={"globalErrorContainer"}>
                    <div className={"globalErrorDiv"}>
                        <div className={"globalError500"}>
                            <h1>500</h1>
                            <h2>Internal Error</h2>
                        </div>
                        <Link className={"home"} href={"/"}>Home Page</Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
