import { IItem } from 'app/shared/model/item.model';
import { Unit } from 'app/shared/model/enumerations/unit.model';

export interface IMaterial {
  id?: number;
  name?: string;
  unit?: Unit;
  items?: IItem[] | null;
}

export const defaultValue: Readonly<IMaterial> = {};
