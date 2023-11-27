import { useCallback, useEffect, useState } from "react";
import { Alert, BaseEntity, Selectable } from "../types/types";
import { createSelectableEntity } from "../data/values";
import "../types/array.extensions";

type UseListTrackerProps<T extends BaseEntity> = {
  getDataFn?: () => T[];
};

const useListTracker = <T extends BaseEntity>({
  getDataFn,
}: UseListTrackerProps<T>) => {
  const [firstList, setFirstList] = useState<Selectable<T>[]>();
  const [secondList, setSecondList] = useState<Selectable<T>[]>();
  const [alert, setAlert] = useState<Alert>();
  const [reload, setReload] = useState({})

  useEffect(() => {
    const [firstValues, secondValues] = getDataFn()
      .map(createSelectableEntity)
      .shuffle()
      .splitEquallyIntoTwoArrays();

    setFirstList(firstValues);
    setSecondList(secondValues);
  }, [reload]);

  const onFirstListItemClick = useCallback(
    ({ id }: { id: number }) => {
      const item = firstList.filter((item) => item.id === id)[0];
      item.selected = !item.selected;
      setFirstList((prev) => [...prev]);
    },
    [firstList]
  );

  const onSecondListItemClick = useCallback(
    ({ id }: { id: number }) => {
      const item = secondList.filter((item) => item.id === id)[0];
      item.selected = !item.selected;
      setSecondList((prev) => [...prev]);
    },
    [secondList]
  );

  const onMoveSelectedItemsRight = useCallback(() => {   
    if (firstList.length === 0){
      setAlert({
        title: "Empty Left List",
        message: "There are no items in the left list to move right.",
        isVisible: true,
      });
      return;
    }

    const selectedFirstListItems = firstList.filter((value) => value.selected);

    if (selectedFirstListItems.length === 0) {
      setAlert({
        title: "Missing Selection",
        message: "Please select item(s) to move right",
        isVisible: true,
      });
      return;
    }

    const unSelectedFirstListItems = firstList.filter(
      (value) => !selectedFirstListItems.includes(value)
    );
    setFirstList(unSelectedFirstListItems);

    setSecondList((prev) => [
      ...prev,
      ...selectedFirstListItems.map((value) => ({
        ...value,
        selected: false,
      })),
    ]);
  }, [firstList, secondList]);

  const onMoveSelectedItemsLeft = useCallback(() => {
    if (secondList.length === 0){
      setAlert({
        title: "Empty Right List",
        message: "There are no items in the right list to move left.",
        isVisible: true,
      });
      return;
    }

    const selectedSecondListItems = secondList.filter(
      (value) => value.selected
    );

    if (selectedSecondListItems.length === 0) {
      setAlert({
        title: "Missing Selection",
        message: "Please select item(s) to move left",
        isVisible: true,
      });
      return;
    }

    const unselectedSecondListItems = secondList.filter(
      (value) => !selectedSecondListItems.includes(value)
    );
    setSecondList(unselectedSecondListItems);

    setFirstList((prev) => [
      ...prev,
      ...selectedSecondListItems.map((value) => ({
        ...value,
        selected: false,
      })),
    ]);
  }, [firstList, secondList]);

  const onResetClick = () => {
    setReload({})
  }

  return [
    // list info
    {
      firstList,
      onFirstListItemClick,
      onMoveSelectedItemsRight,
      secondList,
      onSecondListItemClick,
      onMoveSelectedItemsLeft,
      onResetClick
    },
    // alert info
    { alert, setAlert },
  ];
};

export default useListTracker;
