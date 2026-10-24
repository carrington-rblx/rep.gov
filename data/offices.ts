export interface Office {
  id: string;
  name: string;
  address: string[];
  phone: string;
  image: string;
}

export const offices: Office[] = [
  {
    id: 'district-main',
    name: 'DISTRICT OFFICE',
    address: ['125 Main Street', 'Suite 400', 'Hometown, ST 84000'],
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'regional',
    name: 'REGIONAL OFFICE',
    address: ['360 University Avenue', 'Suite 250', 'Regional City, ST 84004'],
    phone: '(555) 841-2665',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'dc',
    name: 'WASHINGTON, DC',
    address: ['SH-502 Hart Senate Office Building', 'Washington, DC 20510'],
    phone: '(202) 224-5251',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
  },
];
