import { Launchs, Controls, List } from './styles';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useContext } from 'react';
import { ProducerContext } from '../../../contexts/ProducerContext';
import { Link } from 'react-router-dom';

const NextLaunch = () => {
    const {productions, toNext, toPrevious} = useContext(ProducerContext)

    return (
       <Launchs>
        <div>
            <h3>Outros Lançamentos...</h3>
            <Controls>
                <button onClick={toPrevious}>
                    <BsChevronLeft size={20} color='var(--grey-03)'/>
                </button>
                <button onClick={toNext}>
                    <BsChevronRight size={20} color='var(--grey-03)'/>
                </button>
            </Controls>
        </div>
        <List>
            {
                productions.map(element =>{
                    return (
                        <Link to={`/${element.type}/${element.id}`}>
                        <li key={element.id}>
                            <button>
                                <img src={element.cover}/>
                            </button>
                            <h4>{element.name}</h4>
                        </li>
                        </Link>
                    )
                })
            }
        </List>
       </Launchs>
    )
}

export default NextLaunch;