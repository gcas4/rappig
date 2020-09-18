import React from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled } from './style'
import { TextField, FormControlLabel } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import TitlePage from '../../Components/TitlePage'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Components/Configs'

function RegisterAdress() {
  const history = useHistory()
  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`${baseUrl}/address`, form,
      {
        headers: {
          'auth': localStorage.getItem('token')
        }
      })
      .then(res => {

        console.log('res: ', res)
        localStorage.setItem('token', res.data.token)
        history.push('/home')
      })
      .catch(err => {
        window.alert('Cadastrar endereço faiou')
        console.log(err)
      })
  }

  const logout = () => {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled onClick={logout} />
      </Header>
      <TitlePage title={'Meu endereço'} />
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            type={'text'}
            placeholder={'Rua / Av.'}
            name={'street'}
            label="Logradouro"
            value={form.street}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'number'}
            placeholder={'Número'}
            name={'number'}
            label='Número'
            value={form.number}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            type={'text'}
            placeholder={'Apto. / Bloco'}
            name={'complement'}
            label='Complemento'
            value={form.complement}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Bairro'}
            name={'neighbourhood'}
            label='Bairro'
            value={form.neighbourhood}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Cidade'}
            name={'city'}
            label='Cidade'
            value={form.city}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Estado'}
            name={'state'}
            label='Estado'
            value={form.state}
            variant='outlined'
            onChange={onChangeInput}
          />
          <ButtonStyled
            classes={{
              root: classes.root,
              label: classes.label
            }}
            type={'submit'}
            variant={'contained'}
            color={'primary'}>
            Salvar
        </ButtonStyled>
        </ThemeProvider>
      </Form>
    </Container>
  );
}

export default RegisterAdress;
