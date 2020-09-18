import styled from 'styled-components'


export const PerfilContainer = styled.div`

max-width: 400px;
width: 100%;


`

export const PerfilBar = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 64px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);

`

export const PerfilInfo = styled.div`
display:flex;
flex-direction:rows;
justify-content: space-between;


`

export const PerfilInfoDetalhes = styled.div`
text-align: left;
letter-spacing: -0.39px;
line-height: 1.6;
font-size: 16px;
padding: 5px 16px;

`

export const PerfilInfoIcone = styled.p`
display:flex;
justify-content:center;
margin:10px;

`

export const PerfilEndereco = styled.div`
display:flex;
flex-direction:rows;
justify-content: space-between;
text-align: left;
background-color: #eeeeee;
height: 76px;
line-height: 1.6;
padding: 5px 16px;

`

export const PerfilEnderecoTitulo = styled.p`
margin-top: 10px;
color: #b8b8b8

`

export const PerfilEnderecoInfo = styled.p`
margin-top: 2px;

`
export const PerfilEndIcone = styled.p`
display:flex;
justify-content:center;
margin-top:15px;
margin-right:-5px;

`

export const PerfilEndDetalhes = styled.div`


`

export const PedidosContainer = styled.div`

border: 1px solid #eeeeee;
border-radius: 5px;
width: 90%;
margin: 0 auto;
margin-top: 10px;
text-align: left;
padding: 5px 0;

`

export const PedidosLine = styled.p`
padding: 10px 0 5px  10px;
color: #e86e5a;
letter-spacing: -0.39px;
`


export const PedidosLineEmpty = styled.p`
padding: 10px 0 5px  10px;
color: #000000;
letter-spacing: -0.39px;
`
export const PedidosLineDate = styled.p`
letter-spacing: -0.39px;
padding-left: 10px;
font-size:12px;


`
export const PedidosLineTotal = styled.p`
padding: 10px 0 5px  10px;
color: #000000;
letter-spacing: -0.39px;
font-weight: bold;


`
