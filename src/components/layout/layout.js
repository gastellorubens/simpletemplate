import React from 'react'
import "../../styles/global.scss"
import styles from "./layout.module.scss"

export default function Layout({children}) {
    return (
        <main className={styles.color_red}>
            <h1>is layout</h1>
            {children}
        </main>
    )
}