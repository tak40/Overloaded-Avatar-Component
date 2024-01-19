/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Avatar from './Avatar'

function App() {
    return (
        <main>
            <section className="image-container">
                <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
            </section>
            <section className="initial-container">
                <Avatar>BZ</Avatar>
                <Avatar>TK</Avatar>
                <Avatar>BA</Avatar>
            </section>
            <section className="icon-container">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </section>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
