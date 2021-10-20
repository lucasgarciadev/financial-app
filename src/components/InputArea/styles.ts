import styled from 'styled-components';

export const Container = styled.div`
    background-color:#FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius:10px;
    padding:20px;
    margin-top:20px;
`;
export const Form = styled.form`
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
export const Submit = styled.button`
    height:40px;
    padding: 10px 20px;
    background-color: green;
    box-shadow: 0px 0px 5px #CCC;
    border-radius:5px;
    outline:none;
    border:none;
    color:#FFF;
    margin-top:20px;
`;
export const Label = styled.label`
    display:flex;
    flex-direction:column;
    font-weight:bold;
`;
export const Input = styled.input`
    padding:10px;
`;
export const Select = styled.select`
    padding:10px;
`;