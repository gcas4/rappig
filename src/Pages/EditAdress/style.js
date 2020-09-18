import Styled from 'styled-components'
import { ArrowBackIos } from '@material-ui/icons'
import { Button } from '@material-ui/core'

const Container = Styled.div`
max-width: 400px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
const Form = Styled.form`
display: grid;
gap: 16px;
padding: 16px;
`
const ButtonStyled = Styled(Button)`
height: 42px;
`
const Header = Styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 44px;
border-bottom: 1px solid gray;
`
const ArrowBackIosStyled = Styled(ArrowBackIos)`
padding: 0 16px;
`
const Label = Styled.label`
position: absolute;
left: 50%;
margin-right: -50%;
transform: translate(-50%, 0);
`

export { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label }