import React, { useState, useEffect } from "react";
import TitlePage from "../../Components/TitlePage";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Footer from "../../Components/Footer";
import Axios from "axios";
import { baseUrl } from "../../Components/Configs";
import { Link } from "react-router-dom";
import {
  PerfilContainer,
  PerfilBar,
  PerfilInfo,
  PerfilEnderecoTitulo,
  PerfilEnderecoInfo,
  PerfilEndIcone,
  PerfilEndDetalhes,
  PedidosContainer,
  PedidosLine,
  PedidosLineEmpty,
  PedidosLineDate,
  PerfilInfoIcone,
  PedidosLineTotal,
  PerfilInfoDetalhes,
  PerfilEndereco,
} from "./styles";

function Perfil() {
  const pedidos = [
    {
      restaurante: "Vinil Burguer",
      data: "30 de setembro de 2020",
      valor: 89,
    },
    {
      restaurante: "Vinil Burguer",
      data: "14 de junho de 2020",
      valor: 19,
    },
    {
      restaurante: "Experimenta Lanches",
      data: "16 de junho de 2020",
      valor: 29.4,
    },
  ];

  const [perfil, setPerfil] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
  });

  useEffect(() => {
    Axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }).then((result) => {
      setPerfil(result.data.user);
    });
  }, []);

  return (
    <PerfilContainer>
      <PerfilBar>
        <TitlePage title={"Meu perfil"} />
      </PerfilBar>

      <PerfilInfo>
        <PerfilInfoDetalhes>
          <p>{perfil.name}</p>
          <p>{perfil.email}</p>
          <p>{perfil.cpf}</p>
        </PerfilInfoDetalhes>
        <PerfilInfoIcone>
          <Link to={"/edit-signup"}>
            <CreateOutlinedIcon />
          </Link>
        </PerfilInfoIcone>
      </PerfilInfo>

      <PerfilEndereco>
        <PerfilEndDetalhes>
          <PerfilEnderecoTitulo>Endereço Cadastrado</PerfilEnderecoTitulo>
          <PerfilEnderecoInfo>{perfil.address}</PerfilEnderecoInfo>
        </PerfilEndDetalhes>
        <PerfilEndIcone>
          <Link to={"/edit-address"}>
            <CreateOutlinedIcon />
          </Link>
        </PerfilEndIcone>
      </PerfilEndereco>

      <div>
        <p className="Historico-pedidos">Histórico de pedidos</p>
        <hr className="DivisorHr" />
        <div>
          {pedidos.length == 0 ? (
            <div>
              <PedidosLineEmpty>
                Você não realizou nenhum pedido
              </PedidosLineEmpty>
            </div>
          ) : (
            <div>
              {pedidos.map((pedidos) => {
                return (
                  <PedidosContainer>
                    <PedidosLine>{pedidos.restaurante}</PedidosLine>
                    <PedidosLineDate>{pedidos.data}</PedidosLineDate>
                    <PedidosLineTotal>
                      SUBTOTAL: R$ {pedidos.valor.toFixed(2)}
                    </PedidosLineTotal>
                  </PedidosContainer>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer ativo={2} />
    </PerfilContainer>
  );
}

export default Perfil;
