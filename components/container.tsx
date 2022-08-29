import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement | string | Array<React.ReactElement | string>
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classes =
    `container mx-auto px-[15%]` + (className ? ` ${className}` : '')
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

export default Container
