// React
import React from 'react';

// Material-UI
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core/';

const Header = () => {
    return(
        <AppBar style={{ backgroundColor: "black" }}>
            <Toolbar>
                <Typography variant="h5">
                    Covid-19 Information Page
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
