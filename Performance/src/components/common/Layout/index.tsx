import clsx from 'clsx'
import * as React from 'react'
import { DocTitle } from '../DocTitle'

interface LayoutProps extends IComponent {
  name?: string
  title: string
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  name,
  className,
}) => {
  const clsxName = clsx(className, name)
  return (
    <>
      <DocTitle title={title} />
      <main className={clsxName}>{children}</main>
    </>
  )
}
