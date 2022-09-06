import { Launchs, Controls, List } from './styles';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const NextLaunch = () => {
    const musics = [
        {
            userId: 2,
            name: "Twelve Carat Thootacheee3e",
            type: "album",
            preview: "coopedup.mp3",
            bio: "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
            date: "1656820800000",
            cover: "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
            musics: ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"],
            id: 1
        },
        {
            userId: 2,
            name: "Teste 2",
            type: "album",
            preview: "coopedup.mp3",
            bio: "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
            date: "1656820800000",
            cover: "https://www.campusfrance.org/sites/default/files/styles/mobile_visuel_principal_page/public/medias/images/2022-02/Ocean.jpg?itok=tHyKsBah",
            musics: ["teste", "teste"],
            id: 2
        },
        {
            userId: 2,
            name: "Twelve Carat Thootacheee3e",
            type: "album",
            preview: "coopedup.mp3",
            bio: "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
            date: "1656820800000",
            cover: "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
            musics: ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"],
            id: 3
        },
        {
            userId: 2,
            name: "Teste 2",
            type: "album",
            preview: "coopedup.mp3",
            bio: "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
            date: "1656820800000",
            cover: "https://www.campusfrance.org/sites/default/files/styles/mobile_visuel_principal_page/public/medias/images/2022-02/Ocean.jpg?itok=tHyKsBah",
            musics: ["teste", "teste"],
            id: 4
        }
    ]

    return (
       <Launchs>
        <div>
            <h3>Outros Lançamentos...</h3>
            <Controls>
                <button>
                    <BsChevronLeft size={20} color='var(--grey-03)'/>
                </button>
                <button>
                    <BsChevronRight size={20} color='var(--grey-03)'/>
                </button>
            </Controls>
        </div>
        <List>
            {
                musics.map(element =>{
                    return (
                        <li key={element.id}>
                            <button>
                                <img src={element.cover}/>
                            </button>
                            <h4>{element.name}</h4>
                        </li>
                    )
                })
            }
        </List>
       </Launchs>
    )
}

export default NextLaunch;