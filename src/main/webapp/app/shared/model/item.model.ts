import { IOrder } from 'app/shared/model/order.model';
import { IMaterial } from 'app/shared/model/material.model';
import { ItemStatus } from 'app/shared/model/enumerations/item-status.model';

export interface IItem {
  id?: number;
  quantity?: number;
  status?: ItemStatus;
  order?: IOrder | null;
  material?: IMaterial | null;
}

export const defaultValue: Readonly<IItem> = {};
