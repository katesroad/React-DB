import * as React from 'react'
import { DocTitle } from '../DocTitle'

interface LayoutProps {
  name: string
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title, name }) => {
  return (
    <>
      <DocTitle title={title} />
      <main className={name}>{children}</main>
    </>
  )
}
