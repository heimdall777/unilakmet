import dayjs from 'dayjs';
import { IItem } from 'app/shared/model/item.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IOrder {
  id?: number;
  name?: string;
  description?: string | null;
  startDate?: string;
  estimatedEndDate?: string;
  status?: OrderStatus;
  items?: IItem[] | null;
}

export const defaultValue: Readonly<IOrder> = {};
