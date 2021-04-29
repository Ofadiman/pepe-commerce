import { FC } from 'react'
import styled from 'styled-components'

const StyledList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin: 5px;
  }
`

export const StoryList: FC = ({ children }) => <StyledList>{children}</StyledList>
