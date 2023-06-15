export enum DeviceType {
  Laptop = "Laptop",
  Tablet = "Tablet",
  Phone = "Phone",
}

export interface IResource {
  id: string;
  type: DeviceType;
  description?: string;
  date: number;
}
