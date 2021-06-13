import * as React from 'react'

interface DocTitleProps {
  title: string
}

export const DocTitle: React.FC<DocTitleProps> = ({ title }) => {
  React.useEffect(() => {
    document.title = title.charAt(0).toUpperCase() + title.slice(1)
    return function () {
      document.title = 'React Performance'
    }
  }, [title])
  return null
}
