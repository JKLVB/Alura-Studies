import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    seletor: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, seletor }: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        seletor={seletor}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}