import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Button = forwardRef(({
  to,
  href,
  rightIcon = false,
  leftIcon = false,
  rounded = false,
  disabled = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  children,
  onClick,
  ...passProps
}, ref) => {
  let Comp = "button";

  const props = {
    ...passProps,
    onClick: disabled ? undefined : onClick, // Tránh truyền onClick khi disabled
  };

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("wrapper", {
    primary,
    rounded,
    outline,
    small,
    large,
    text,
    leftIcon,
    disabled,
    rightIcon,
  });

  return (
    <Comp className={classes} ref={ref} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
});

Button.propTypes={
to:PropTypes.string,
href:PropTypes.string,
rightIcon:PropTypes.node,
leftIcon:PropTypes.node,
rounded:PropTypes.bool,
disabled:PropTypes.bool,
text:PropTypes.bool,
primary:PropTypes.bool,
outline:PropTypes.bool,
small:PropTypes.bool,
large:PropTypes.bool,
children:PropTypes.node.isRequired,
onClick:PropTypes.func,
}

export default Button;
