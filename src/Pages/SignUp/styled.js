import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { ArrowBackIos } from '@material-ui/icons';

export const Container = styled.div`
    max-width: 400px;
    width: 100%;
    height: 640px;
    padding: 16px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
`;
export const Nav = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
`;
export const ArrowBackIosStyled = styled(ArrowBackIos)`
    padding: 0 16px;
`
export const ImgSignup = styled.img`
    width: 104px;
    height: 58px;
    margin-top: 24px;
    margin-bottom: 16px;
`;
export const Titulo = styled.p`
    font-size: 16px;
    width: 296px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
`;
export const Forms = styled.form`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const InputSignup = styled(TextField)`
`;
