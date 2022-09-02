import {Player, Img} from './styles'
import TrialMusic from '../../assets/music/Caslo.mp3'
import Imagem from '../../assets/imgLogin.jpg'


const Footer = () => {
    return (
        <Player>
            <Img src={Imagem} alt=''></Img>
            <div>
                <h4>Nome da música</h4>
                <audio src={TrialMusic}></audio>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <button></button>
        </Player>
    )
}

export default Footer;