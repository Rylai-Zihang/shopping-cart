import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactElement | string | Array<React.ReactElement | string>
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="container mx-auto px-5" {...props}>
      {children}
    </div>
  )
}

export default Container
