import React from "react";
import styles from "./Collage.module.css";

export default function Collage() {
    return (
        <>
            <div className={styles.collageContainer}>
                <div className={styles.overlap}>
                    <h1>Everything is designed.<br/>Few things are designed well.</h1>
                    <p>- Brian Reed</p>
                </div>
                <div className={styles.collage}>
                    <div className={styles.coll1}><img src="../images/ajit-sahoo-villa/1.png" alt="image" className={styles.img} /></div>
                    <div className={styles.coll2}><img src="../images/3(Residential)/4.jpeg" alt="image" className={styles.img} /></div>
                    <div className={styles.coll3}><img src="../images/ajit-sahoo-villa/34.png" alt="image" className={styles.img} /></div>
                    <div className={styles.coll4}><img src="../images/2(Residential)/9.jpg" alt="image" className={styles.img} /></div>
                    <div className={styles.coll5}><img src="../images/ajit-sahoo-villa/28.png" alt="image" className={styles.img} /></div>
                </div>
            </div>
        </>
    );
}
