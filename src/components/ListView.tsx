import { memo } from 'react';
import { BaseEntity, Selectable } from '../types/types';
import ListViewItem from './ListViewItem';
import styled from 'styled-components';

const Container = styled.div<{ $side?: 'left' | 'right' }>`
  padding: 1em 2em;
  border:0px solid red;
`;

const ListViewHeader = ({ inputColor = "#BF4F74", children }) => (
  <h3 style={{ color: inputColor, paddingTop: '0px', marginTop: '0px' }}>
    {children}
  </h3>
)

const ListViewItems = ({ className = '', children }) => (
  <ul className={className} style={{ listStyleType: 'none', padding: '0px' }}>
    {children}
  </ul >
)

type ListViewProps<T extends Selectable<BaseEntity>> = {
  title: string;
  items: T[];
  onClick?: (value: Pick<Selectable<T>, 'id'>) => void;
};

const ListView = <T extends Selectable<BaseEntity>>({
  title,
  items,
  onClick,
}: ListViewProps<T>) => {
  return (
    <Container>
      <ListViewHeader>{title}</ListViewHeader>
      <ListViewItems>
        {items?.map((item) => (<ListViewItem {...item} key={item.id} onClick={onClick} />))}
      </ListViewItems>
    </Container>
  );
};

export default memo(ListView);
