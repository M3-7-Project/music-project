import {ButtonStyle} from './styles'

const Button = ({height, width, color, content}) => {
    return (
        <ButtonStyle heigth = {height} width = {width} backgroundColor = {color}>
            {content}
        </ButtonStyle>
    )
}

export default Button;