import styled from "styled-components";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, .5);
    z-Index: 5;
`

const Container = styled.div`
    position:relative;
    top:40%;
    border: 0px solid black;
`

const MessageBox = styled.div`
    margin: 0 auto;
    max-width: 400px;
    padding: 0 0px;
    display: flex;
    flex-direction: column;
    background-color: #262626;
    border: 2px solid black;
`

const Title = styled.div`
    border-bottom: 0px solid white;
    padding: 10px 0;
    background-color: red;
`

const Message = styled.div`
    border-bottom: 0px solid white;
    min-height: 50px;
    padding: 10px 0;
`

const Buttons = ({ onCancelClick, onOkClick }) => (
    <div style={{ border: '0px solid white', textAlign: 'right', padding: '0px 0' }}>
        {onCancelClick && <Input type="button" value="Cancel" onClick={onCancelClick} />}
        {onOkClick && <Input type="button" value="Ok" onClick={onOkClick} />}
    </div>
)

const Input = styled.input`
    --accent-color: white;

    background: transparent;
    border-radius: 3px;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    display: inline-block;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    transition: all 200ms ease-in-out;
    width: 5rem;
    height: fit-content;

    &:hover {
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(1);
    }
`

type AlertProps = {
    title: string;
    message: string;
    onOkClick?: () => void;
    onCancelClick?: () => void;
}

const Alert = ({ title, message, onOkClick, onCancelClick }: AlertProps) => {
    return (
        <Overlay>
            <Container>
                <MessageBox>
                    <Title>{title}</Title>
                    <Message>{message}</Message>
                    <Buttons onOkClick={onOkClick} onCancelClick={onCancelClick} />
                </MessageBox>
            </Container>
        </Overlay>
    )
}

export default Alert