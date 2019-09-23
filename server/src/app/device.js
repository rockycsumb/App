import { device } from '../model/index';

export const addDevice = async (serialNumber, locationDescription) => {
  try {
    const serial = await device.findOne({ serialNumber });
    if (serial) {
      throw new Error('Device is already registered.');
    }

    const newDevice = await device.create({
      serialNumber,
      locationDescription,
    });

    if (newDevice) {
        return newDevice;
    }
    
    throw new Error('Failed to add device');
  } catch (err) {
    throw err;
  }
};