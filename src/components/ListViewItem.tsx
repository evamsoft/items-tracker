import styled from "styled-components"

const ListItem = styled.li`
    display: flex;
    flex-flow: row no-wrap;
    align-items: stretch;
    border: 3px solid black;
    background-color: 'red';
    margin: 5px 0px;
    padding: 5px;
`

const Input = styled.input`
    order: 0;
    border: 0px solid yellow;
    margin-right: 5px;
`

const Label = styled.label`
    flex: 1;
    order: 1;
    border: 0px solid green;
`

type ListViewItemProps = {
    id: number,
    name: string,
    selected: boolean,
    onClick: ({ id }: { id: number }) => void
}

const ListViewItem = ({ id, name, selected, onClick }: ListViewItemProps) => {
    return (
        <ListItem>
            <Label htmlFor={`input${id}`}>
                {name}
            </Label>
            <Input
                id={`input${id}`}
                type="checkbox"
                value={id}
                checked={selected}
                onClick={(e) => onClick({ id: +e.currentTarget.value })}
            />

        </ListItem>
    )
}

export default ListViewItem