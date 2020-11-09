// React
import React from 'react';

// Components
import TextInfo from './TextInfo';
import HeatMap from './HeatMap';

// MaterialUI
import { Grid } from '@material-ui/core'

const Layout = props => {
    return(
        <div style={{ marginTop: "5em" }}>
            <Grid container>
                <Grid item xs={12}>
                    <TextInfo
                        text={"Los coronavirus son una familia de virus que causan enfermedades (desde el resfriado común hasta enfermedades respiratorias más graves) y circulan entre humanos y animales."}
                        fontSize={"14px"}
                    />
                    <div style={{ height: "4px" }}></div>
                    <TextInfo
                        text={"En este caso, se trata del SARS-COV2. Apareció en China en diciembre pasado y provoca una enfermedad llamada COVID-19, que se extendió por el mundo y fue declarada pandemia global por la Organización Mundial de la Salud."}
                        fontSize={"14px"}
                    />
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item xs={8}>
                    <HeatMap />
                </Grid>
            </Grid>
        </div>
    );
}

export default Layout
