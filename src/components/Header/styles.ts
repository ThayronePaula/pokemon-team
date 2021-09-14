import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: 375px;
  height: 110px;
  margin: 0 auto;
  background: var(--bgheader);
`
export const Line = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid #fff;
`
export const Text = styled.h1`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  margin: 1rem 2rem;
`
