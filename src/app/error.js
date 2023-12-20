"use client";

import styles from "./error.module.css";

export default function Error({ error, reset }) {
    // custom logic (e.g., log the error or send it to an APM service)

    return (
        <div className={styles.error}>
            <div className={styles.oops}>Oops!</div>
            <div className={styles.message}>Something went wrong...</div>
            <div>
                <button className={styles.retryButton} onClick={() => reset()}>
                    🔄 Retry!
                </button>
            </div>
        </div>
    );
}
