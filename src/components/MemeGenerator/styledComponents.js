import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 4%;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ResultContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.flexContent ? 'space-between' : '')};
  padding: 4%;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`
export const ContentContainer = styled(ResultContainer)`
  @media screen and (min-width: 768px) {
    order: 0;
  }
`

export const Heading = styled.h1`
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '8px')};
  color: ${props => props.color};
  padding: 4%;
  text-align: ${props => (props.textCenter ? 'center' : 'left')};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Button = styled.button`
  background-color: #0b69ff;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 15px;
  font-size: 16px;
  align-self: flex-start;
  padding-right: 25px;
  padding-left: 25px;
  color: #ffffff;
`

export const Label = styled.label`
  font-size: 16px;
  color: #7e858e;
  margin-bottom: 8px;
`

export const Input = styled.input`
  color: #5a7184;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 15px;
`
