import * as React from 'react'

export const Cat: React.FC<ICat> = ({ children, ...cat }) => {
  return (
    <div className="cat">
      <h6>{cat.name}</h6>
      <p>{cat.breed}</p>
      <p>{cat.age}</p>
    </div>
  )
}
