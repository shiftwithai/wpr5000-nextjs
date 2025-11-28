"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../../styles/ui/button/index.module.sass";
import { join } from "../../../utils/classes";
import { faCheckCircle, faSpinner, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

export default forwardRef(function Button({
  as: Component='button',
  children,
  className,
  color='white',
  disabled,
  grow,
  inline=true,
  justify='center',
  overlay,
  radius='small',
  shadow,
  size='medium',
  status,
  wide,
  ...props
}, ref) {
  status = status || (disabled ? 'disabled' : '')

  switch (status) {
    case 'error': overlay = <FontAwesomeIcon icon={ faTimesCircle } />; break;
    case 'loading': overlay = <FontAwesomeIcon icon={ faSpinner } spin />; break;
    case 'success': overlay = <FontAwesomeIcon icon={ faCheckCircle } />; break;
  }

  if (size === 'text') {
    children = <span className={ css.button__text }>{ children }</span>
  }

  return (
    <Component
      ref={ ref }
      className={ join(
        css.button,
        !inline && css.button_flex,
        color && css[`button_${color}`],
        grow && css.button_grow,
        justify && css[`justify_${justify}`],
        shadow && css.button_shadow,
        overlay && css.button_overlayed,
        radius && css[`button_radius_${radius}`],
        size && css[`button_${size}`],
        status && css[`button_${status}`],
        wide && css[`button_wide`],
        className,
      ) }
      disabled={ disabled }
      { ...props }
    >
      { children }
      { overlay && <span className={ css.button__overlay }>{ overlay }</span> }
    </Component>
  )
})

export function ButtonIcon({ icon, ...props }) {
  return (
    <div className={ css.icon }>
      <FontAwesomeIcon icon={ icon } fixedWidth { ...props } />
    </div>
  )
}
