import React from "react";
import axios from "axios";
import { baseUrl } from "../../Components/Configs";
import { useStyles } from "../../Components/MaterialTheme/theme";
import {
  Container,
  Nav,
  ArrowBackIosStyled,
  ImgSignup,
  Titulo,
  Forms,
  InputSignup,
} from "./styled";
import Button from "@material-ui/core/Button";
import logoRappi from "./logo-future-eats-invert.png";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const [form, onChangeInput, setForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    showPassword: false,
    confirmePassword: "",
    confirmeShowPassword: false,
  });

  const handleSubmit = (event) => {
    if (form.password !== form.confirmePassword){
      event.preventDefault();  
    }
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
    };
      axios
          .post(
          `${baseUrl}/signup`,
          body,
          {
              headers: {'Content-Type': 'application/json'}
          })
          .then(resposta => {
              history.push("/register-adress");
              localStorage.setItem("token", resposta.data.token);
          })
          .catch(error => {
              console.log("Deu erro", error);
          });
    event.preventDefault();
  };

  const clickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };
  const clickShowConfirmePassword = () => {
    setForm({ ...form, confirmeShowPassword: !form.confirmeShowPassword });
  };

  return (
    <Container>
      <Nav>
        <ArrowBackIosStyled />
      </Nav>
      <ImgSignup src={logoRappi} />
      <Titulo>Cadastrar</Titulo>
      <Forms onSubmit={handleSubmit}>
        <InputSignup
          required
          label="Nome"
          name="name"
          type="text"
          placeholder="Nome e sobrenome"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={form.name}
          onChange={onChangeInput}
          inputProps={{
            pattern: "[A-Z][a-z]* [A-Z][a-z]{3,}",
            title: "Nome e sobrenome",
          }}
        />
        <InputSignup
          required
          label="E-mail"
          name="email"
          type="email"
          placeholder="email@email.com"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChangeInput}
          value={form.email}
        />
        <InputSignup
          required
          label="CPF"
          name="cpf"
          placeholder="000.000.000-00"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChangeInput}
          value={form.cpf}
          inputProps={{
            pattern: "[0-9]{11}",
            title: "Apenas números" }}
        />
        <InputSignup
          InputLabelProps={{
            shrink: true,
          }}
          type={form.showPassword ? "text" : "password"}
          onChange={onChangeInput}
          name={"password"}
          label={"Senha"}
          variant="outlined"
          placeholder="Mínimo 6 caracteres"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={clickShowPassword}>
                  {" "}
                  {form.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            pattern: "[0-9]{6,}",
            title: "A senha deve conter no mínimo 6 caracteres"}}
          required
        />
        <InputSignup
          InputLabelProps={{
            shrink: true,
          }}
          type={form.confirmeShowPassword ? "text" : "password"}
          onChange={onChangeInput}
          name={"confirmePassword"}
          label={"Confirmar"}
          variant="outlined"
          placeholder="Confirmar a senha anterior"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={clickShowConfirmePassword}>
                  {" "}
                  {form.confirmeShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            pattern: "[0-9]{6,}",
            title: "A senha deve conter no mínimo 6 caracteres"}}
          required
        />
        <Button
          variant="contained"
          type={"submit"}
          color={"primary"}
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          Criar
        </Button>
      </Forms>
    </Container>
  );
}

export default SignUp;
