import {ButtonStyle} from './styles'

const CircleButton = ({children, radius, onClick}) => {
    return (
        <ButtonStyle radius = {radius} onClick={onClick}>
            {children}
        </ButtonStyle>
    )
}

export default CircleButton;