import * as C from './styles';
import { Item } from '../../types/Item';
import { items } from '../../data/items';

import TableItem from '../TableItem';

type Props = {
    list: Item[]
}

export default ({ list }: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130} >Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150} >Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((i, k) => 
                    <TableItem key={k} item={i} />
                )}
            </tbody>
        </C.Table>
    );
}