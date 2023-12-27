import React from 'react';
import * as Icons from "../../../assets/icons/index";
import PropTypes from "prop-types";

Icon.propTypes = {
    name: PropTypes.any,

};


function Icon(props) {
    return (
        <div>
            <img src={`${Icons}.${props.name}`} alt={`${props.name}`}/>
        </div>

    );
}

export default Icon;