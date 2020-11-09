// React
import React from 'react';

// MaterialUI
import { Typography } from '@material-ui/core'

const TextInfo = props => {
    return(
        <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
            <Typography component="p" style={{ height: 'auto', color: "white", fontSize: `${props.fontSize}` }} >
                {props.text}
            </Typography>
        </div>
    );
}

TextInfo.defaultProps = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    fontSize: "14px"
}

export default TextInfo;
