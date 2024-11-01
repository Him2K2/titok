import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  rightIcon=false,
  leftIcon=false,
  rounded=false,
  disabled=false,
  text=false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if(disabled){
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
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
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")} >{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")} >{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
