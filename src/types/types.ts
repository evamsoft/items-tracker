export type BaseEntity = {
  id: number;
  name: string;
  description?: string;
};

export type Selectable<T> = T & { selected: boolean };

export type HumanValue = BaseEntity & {
  category?: string;
};

export type Alert = {
  title?: string;
  message?: string;
  isVisible: boolean;
  setIsVisible?: () => void;
};
