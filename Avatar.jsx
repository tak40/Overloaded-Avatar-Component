/** @format */

import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({ src, alt, children }) {

    const iconColors = ['navy', 'pink', 'red', 'blue', 'green']
    const randomColor = iconColors[Math.floor(Math.random() * iconColors.length)]

    return (
        <div className='container'>
            {src ? (
                <img src={src} alt={alt} className='avatar' />
            ) : children ? (
                <div className='avatar avatar-letters'>{children}</div>
            ) : (
                <IoPersonSharp className={`avatar avatar-icon ${randomColor}`}/>
            )}
        </div>
    )
}
