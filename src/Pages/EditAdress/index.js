import React, { useEffect } from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from'./style' 
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import axios from 'axios' 
import { baseUrl } from '../../Components/Configs';
import { Link , useHistory } from 'react-router-dom';



function EditAdress() {

  const history = useHistory()

useEffect(() => {
axios.get(`${baseUrl}/profile/address`, {
  headers:{
    auth: localStorage.getItem("token")
  } }).then(res => {   
    setForm(res.data.address)
    
  })
  
},[])



  const classes = useStyles()
  const [form, onChangeInput, setForm] = useForm({
    
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })  

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`${baseUrl}/address`, form, {
      headers:{
        auth: localStorage.getItem("token")
      }
    }).then(res => {
      window.alert("Endereco atualizado")
      history.push('/perfil')
    }).catch(res =>{
      window.alert("Falhou ao atualizar")
    })  
  }
 

  

  return (
    <Container>
      <Header>
        <Link to={'/perfil'}>
          <ArrowBackIosStyled />
        </Link>
        
        <Label>Endereco</Label>
      </Header>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField          
          InputLabelProps={{
            shrink: true
          }}
           
            type={'text'}            
            name={'street'}
            label="Logradouro"
            value={form.street}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField          
          InputLabelProps={{
            shrink: true
          }}
            
            type={'number'}            
            name={'number'}
            label="Numero"
            value={form.number}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          InputLabelProps={{
            shrink: true
          }}
            
            type={'text'}           
            name={'complement'}
            label="Complemento"
            value={form.complement}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          placeholder={form.neighbourhood}
          InputLabelProps={{
            shrink: true
          }}            
            type={'text'}
            name={'neighbourhood'}
            label="Bairro"
            value={form.neighbourhood}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField          
          InputLabelProps={{
            shrink: true
          }}
           
            type={'text'}
            name={'city'}
            label="Cidade"
            value={form.city}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField          
          InputLabelProps={{
            shrink: true
          }}
            
            type={'text'}
            name={'state'}
            label="Estado"
            value={form.state}
            variant="outlined"
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

export default EditAdress;
