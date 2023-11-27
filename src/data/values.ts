import "../types/array.extensions";
import "../types/string.extensions";

import { BaseEntity, Selectable } from "../types/types";

export const positiveHumanValues = ["empathy", "confidence", "courage"];

export const negativeHumanValues = ["fear", "indifference", "inaction"];

export const getHumanValues = <T extends BaseEntity>() => {
  const entities = [...positiveHumanValues, ...negativeHumanValues].map(
    (item) => {return createBaseEntity(item.PascalCase())}
  );
  return assignEntityIds(entities);
};

export const createBaseEntity = <T extends BaseEntity>(item: string): T => {
  return { id: 0, name: item } as T;
};

export const createSelectableEntity = <T>(entity: T): Selectable<T> => ({
  ...entity,
  selected: false,
});

const assignEntityIds = <T extends BaseEntity>(entities: T[]): T[] => {
  let maxId = Math.max(...entities.map((item) => item.id));
  return [
    ...entities
      .filter((item) => item.id === 0)
      .map((item) => {
        item.id = maxId;
        maxId++;
        return item;
      }),
  ];
};
