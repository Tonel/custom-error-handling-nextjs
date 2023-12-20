"use client";

import { useState } from "react";
import styles from "./error-button.module.css";

export default function ErrorButton(props) {
    const [raiseError, setRaiseError] = useState(false);

    if (raiseError) {
        // "a" is undefined so "props.a.b" will result in an error
        return props.a.b;
    } else {
        return (
            <button
                className={styles.errorButton}
                onClick={() => setRaiseError((error) => !error)}
            >
                {props.label}
            </button>
        );
    }
}
