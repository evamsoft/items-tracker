import {
  FC,
} from 'react';
import ListView from './ListView';
import styled from 'styled-components';
import ListButtons from './ListButtons';
import useListTracker from '../hooks/useListTracker';
import { BaseEntity } from '../types/types';
import Alert from './Alert';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    //border: 0px solid black;
`

type ListTrackerProps<T> = {
  getDataFn: () => T[]
}

export const ListTracker = <T extends BaseEntity>({ getDataFn }: ListTrackerProps<T>) => {
  const [listInfo, alertInfo] = useListTracker<T>({ getDataFn });

  const { firstList,
    onFirstListItemClick,
    onMoveSelectedItemsRight,
    secondList,
    onSecondListItemClick,
    onMoveSelectedItemsLeft,
    onResetClick } = listInfo;

  const { alert, setAlert } = alertInfo;

  return (
    <main>
      <Container>
        <ListView
          title="Beneficial Values"
          items={firstList}
          onClick={onFirstListItemClick}
        />
        <ListButtons firstButtonText='Move Right'
          firstButtonOnClick={onMoveSelectedItemsRight}
          secondButtonText='Move Left'
          secondButtonOnClick={onMoveSelectedItemsLeft}
          onResetClick={onResetClick}
        />
        <ListView
          title="Detrimental Values"
          items={secondList}
          onClick={onSecondListItemClick}
        />
      </Container>
      {alert?.isVisible && <Alert title={alert.title}
        message={alert.message}
        onOkClick={() => { setAlert(({ isVisible: false })); }} />}
    </main>
  );
};
