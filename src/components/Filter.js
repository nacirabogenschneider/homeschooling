import React from 'react'
import Select from 'react-select'

export default function Filter({ options, title, setValue }) {
  return (
    <>
      <h3>{title}</h3>
      <Select options={options} onChange={(value) => setValue({ value })} />
    </>
  )
}
