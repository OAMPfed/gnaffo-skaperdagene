import React from 'react';
import {OversiktRad} from "./OversiktRad";

export const Oversikt = (props) => {

    return(
        <div className={"oversikt-wrapper"}>
            <OversiktRad etg={1} kaffe={props.kaffe} />
            <OversiktRad etg={2} kaffe={1} />
            <OversiktRad etg={3} kaffe={4} />
            <OversiktRad etg={4} kaffe={7} />
            <OversiktRad etg={5} kaffe={7} />
            <OversiktRad etg={6} kaffe={12} />
            <OversiktRad etg={7} kaffe={5} />

        </div>
    )
}