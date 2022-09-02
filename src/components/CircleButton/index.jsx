import {ButtonStyle} from './styles'

const CircleButton = ({children, radius}) => {
    return (
        <ButtonStyle radius = {radius}>
            {children}
        </ButtonStyle>
    )
}

export default CircleButton;