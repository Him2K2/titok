import "./GlobalCSS.scss";
import PropTypes from "prop-types";
import React from "react";
function GlobalCSS({children}){

    return React.Children.only(children);

}
GlobalCSS.propTypes={
    children:PropTypes.node.isRequired,
}

export default GlobalCSS