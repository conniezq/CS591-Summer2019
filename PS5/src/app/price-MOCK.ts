import {PRICE} from './price';

export const PRICES: PRICE[] =
  [
    {
      _id: '01',
      departureAirport: 'JFK',
      arrivalAirport : 'BOS',
      minPrice: '123.5',
      currency: 'USD',

    },
    {
      _id: '02',
      departureAirport: 'JFK',
      arrivalAirport : 'PEK',
      minPrice: '3104',
      currency: 'USD',
    },
    {
      _id: '03',
      departureAirport: 'BOS',
      arrivalAirport : 'PEK',
      minPrice: '2359',
      currency: 'USD',

    },
    {
      _id: '04',
      departureAirport: 'BOS',
      arrivalAirport : 'PVG',
      minPrice: '23590',
      currency: 'CNY',
    },

    {
      _id: '05',
      departureAirport: 'PEK',
      arrivalAirport : 'PVG',
      minPrice: '1908',
      currency: 'CNY',

    },
    {
      _id: '06',
      departureAirport: 'PEK',
      arrivalAirport : 'HKG',
      minPrice: '7809',
      currency: 'CNY',
    },

  ]
