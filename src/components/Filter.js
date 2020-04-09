import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

export default function Filter({ options, title, setValue }) {
  return (
    <FilterWrapper>
      <H3>{title}</H3>
      <StyledSelect
        options={options}
        onChange={(value) => setValue({ value })}
      />
    </FilterWrapper>
  )
}
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
const H3 = styled.h3`
  margin: 0 0 10px 0;
`

const StyledSelect = styled(Select)`
  width: 200px;
`
