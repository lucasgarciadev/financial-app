import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    onAdd: (item: Item) => void;
}

export default ({ onAdd }: Props) => {

    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        const FormatDate = new Date;

        if(date && category && title && value) {
            
            const [year, month, day] = date.split('-');
            
            FormatDate.setFullYear(parseInt(year));
            FormatDate.setMonth(parseInt(month) - 1);
            FormatDate.setDate(parseInt(day));

            let newItem: Item = {
                date: FormatDate,
                category,
                title,
                value: parseFloat(value)
            }
            onAdd(newItem);

            console.log(date, category, title, value);
        } else {
            alert('Preencha todos os campos');
        }

    }

    return(
        <C.Container>
            <C.Form onSubmit={handleAddEvent} >
                
                <C.Label>
                    Data
                    <C.Input type="date" onChange={e => setDate(e.target.value)} />
                </C.Label>
                
                <C.Label>
                    Categoria
                    <C.Select value={category} onChange={e => setCategory(e.target.value)} >
                        <option value="" >-Selecione-</option>
                        <option value="food" >Alimentação</option>
                        <option value="rent" >Aluguel</option>
                        <option value="salary" >Salário</option>
                    </C.Select>
                </C.Label>

                <C.Label>
                    Título
                    <C.Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </C.Label>

                <C.Label>
                    Valor
                    <C.Input type="number" value={value} onChange={e => setValue(e.target.value)}  />
                </C.Label>
                
                <C.Submit type="submit" >Adicionar</C.Submit>

            </C.Form>
        </C.Container>
    );
}