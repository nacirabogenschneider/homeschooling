import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

export default function Filter({ options, title, setValue, required, value }) {
  function onHandleOnChange(value) {
    const labelValue = value.label
    console.log('Im Filter', labelValue)
    setValue(labelValue)
  }

  return (
    <FilterWrapper>
      <H3>{title}</H3>
      <StyledSelect
        value={value}
        required={required}
        placeholder="auswählen..."
        options={options}
        onChange={(value) => onHandleOnChange(value)}
        isSearchable
      />
    </FilterWrapper>
  )
}
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 20px;
`
const H3 = styled.h3`
  margin: 0 0 10px 0;
`

const StyledSelect = styled(Select)`
  width: 200px;
  &:focus {
    box-shadow: 0 0 10px 2px orange;
  }
`
