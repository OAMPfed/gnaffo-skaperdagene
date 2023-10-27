import React from 'react';

export const MinKanne = (props) => {
    const mengde = props.kaffe / 12
    const kaffe = () => {
        switch (mengde) {
            case 0:
                return "425px";
            case 1:
                return "325px";
            case 2:
                return "250px";
            case 3:
                return "175px";
            case 4:
                return "150px";
            case 5:
                return "125px";
            case 6:
                return "100px";
            case 7:
                return "75px";
            case 8:
                return "50px";
            case 9:
                return "25px";
            case 10:
                return "0px";
            case 11:
                return "-25px";
            case 12:
                return "-50px";
            default:
                return "-50px";
        }
    }

    return (
        <div>
            <p className={"minkanne-info"}>
                7 etg. <span>{mengde} kopper igjen</span>
            </p>

            <div className={"svg-container"} style={{marginTop: kaffe()}}>
                <svg viewBox="0 0 1320 1000" className={"custom-svg"}>
                    <path fill="#38220F" fill-opacity='0.5'/>
                    <path fill="#634832" fill-opacity='0.5'/>
                    <path fill="#59412D" fill-opacity='0.5'/>
                    <path fill="#38220F" fill-opacity='0.5'/>
                </svg>
            </div>
        </div>
    )
}