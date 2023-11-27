import { memo } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 0px solid red;
`;

const Input = styled.input<{ $primary?: boolean; }>`
    --accent-color: white;

    background: transparent;
    border-radius: 3px;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    display: inline-block;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    transition: all 200ms ease-in-out;
    width: 11rem;
    height: fit-content;

    &:hover {
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(1);
    }
`

type ListButtonsProps = {
    firstButtonText: string,
    firstButtonOnClick: () => void
    secondButtonText: string;
    secondButtonOnClick: () => void,
    onResetClick: () => void
}

const ListButtons = ({
    firstButtonText, firstButtonOnClick,
    secondButtonText, secondButtonOnClick,
    onResetClick
}: ListButtonsProps) => {
    return (
        <Container>
            <Input
                type="button"
                value={firstButtonText}
                onClick={firstButtonOnClick}
            />
            <Input
                type="button"
                value={secondButtonText}
                onClick={secondButtonOnClick}
            />
            <Input
                type="button"
                value="Reset"
                onClick={onResetClick}
            />
        </Container>
    )
}

export default memo(ListButtons)