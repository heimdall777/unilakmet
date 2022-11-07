import { IOrder } from 'app/shared/model/order.model';
import { Unit } from 'app/shared/model/enumerations/unit.model';
import { ItemStatus } from 'app/shared/model/enumerations/item-status.model';

export interface IItem {
  id?: number;
  name?: string;
  quantity?: number;
  unit?: Unit;
  status?: ItemStatus;
  order?: IOrder | null;
}

export const defaultValue: Readonly<IItem> = {};
