import styles from "./page.module.css";
import ErrorButton from "@/app/components/ErrorButton";

export const metadata = {
    title: "Home Page",
};

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Welcome to the Site!</h1>
            <div className={styles.errorDiv}>
                <ErrorButton label={"💥 Simulate Local Error"} />
            </div>
        </div>
    );
}
