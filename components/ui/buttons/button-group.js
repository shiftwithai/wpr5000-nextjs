import css from "../../../styles/ui/button/index.module.sass";
import { join } from "../../../utils/classes";

export default function ButtonGroup({ children, className='', grow=false, justify='' }) {
  return (
    <div className={ join(
      css.group,
      grow && css.group_grow,
      justify && css[`justify_${justify}`],
      className,
    ) }>
      { children }
    </div>
  )
}
