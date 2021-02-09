import React from "react"

function Navbar() {

    const links = ["Home", "Profile", "Create a Blog"]

    const anchors = links.map((link) => (
        <a key={link} href={link}>{link}</a>
    ))

    return (
        <>
            <h1>Navbar</h1>
            {anchors}
        </>
    )
}

export default Navbar;