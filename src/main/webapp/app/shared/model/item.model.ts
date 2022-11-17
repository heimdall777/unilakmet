import { IMaterial } from 'app/shared/model/material.model';
import { IOrder } from 'app/shared/model/order.model';
import { ItemStatus } from 'app/shared/model/enumerations/item-status.model';

export interface IItem {
  id?: number;
  quantity?: number;
  status?: ItemStatus;
  materials?: IMaterial[] | null;
  order?: IOrder | null;
}

export const defaultValue: Readonly<IItem> = {};
