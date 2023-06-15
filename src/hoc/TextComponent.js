import React from 'react'
import TextUpperCase from './TextUpperCase'

function TextComponent({ text, styles }) {
    return (
        <h1 style={styles}>{text}</h1>
    )
}

// export default TextComponent

export const ModifiedTextComponent = TextUpperCase(TextComponent)