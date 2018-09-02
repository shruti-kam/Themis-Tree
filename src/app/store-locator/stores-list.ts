
export const storesList: StoresList[] = [
								  {id: 1, area: 'Aundh', city: 'Pune', state: 'Maharashtra', country: 'India', address: 'Aundh'},
                  {id: 2, area: 'Mantri Bari Road', city: 'Agartala', state: 'Tripura', country: 'India', address: 'Mantri Bari Road'}
								];

export class StoresList {
  id: number;
  area: string;
  city: string;
  state: string;
  country: string;
  address: string;
}
