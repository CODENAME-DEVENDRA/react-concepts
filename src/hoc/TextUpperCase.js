import React from 'react'

function TextUpperCase(Comp) {


    const upperCase = ({ t }) => {
        const upperCaseText = t.toUpperCase();
        const styles = { color: "red" }

        return <Comp text={upperCaseText} styles={styles} />
    }

    return upperCase;


}

export default TextUpperCase