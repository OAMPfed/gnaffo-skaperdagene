import React from 'react';

export const OversiktRad = (props) => {

    const kaffeMengde = Array.from({ length: props.kaffe })



    return(
        <div className={"oversikt-rad-wrapper"}>
            <div className={"oversikt-etg"}>
                <p className={"oversikt-etg-wrapper"}>
                    <span className={"oversikt-antall-tall"}>{props.etg}</span> etg
                </p>
            </div>
            <div className={"oversikt-antall"}>
                {Array.from({length: props.kaffe }, () => <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                    <path d="M46.8898 21.1954C46.8898 35.0465 35.3881 45.3729 21.6419 45.3729C7.89563 45.3729 0.154297 37.2116 0.154297 23.3605C0.154297 9.50942 9.14908 0.626465 22.8953 0.626465C36.6416 0.626465 46.8898 7.34427 46.8898 21.1954Z" fill="#38220F"/>
                </svg> )}
                <p>{props.kaffe}</p>
            </div>
        </div>
    )
}