// FILE: data/vansData.js

export const vansData = [
  {
    id: 1,
    name: "EVALL EV UDAY",
    tagline: "Smart urban electric mover for last-mile logistics.",
    status: "available",
    badge: "Available",
    badgeColor: "green",
    chargingType: "fast",
    specs: {
      range: 230,
      rangeUnit: "km",
      power: 90,
      powerUnit: "kW",
      batteryCapacity: 42,
      batteryUnit: "kWh",
      payload: 1495
    },
    // price: 350000,
    // currency: "₹",
    // isFeatured: false,
    // isWishlisted: false
  },
];

export const getVanById = (id) => {
  return vansData.find(van => van.id === id) || null;
};
export const getProducts = () => vansData.map(van => ({
  id: van.id,
  name: van.name
}));