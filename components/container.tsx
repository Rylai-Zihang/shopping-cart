import { HTMLAttributes } from 'react'
import { classesHelper } from '../utils'

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement | string | Array<React.ReactElement | string>
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classes = classesHelper(
    'container mx-auto px-[15%] md:px-[10%] sm:px-[5%]',
    {
      extra: className
    }
  )
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

export default Container
