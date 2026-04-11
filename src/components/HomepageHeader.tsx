import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";

export default function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src={"img/banner.png"} alt={"Mosaic Modding Banner"} width="352" height="181"/>
            </div>
        </header>
    );
}