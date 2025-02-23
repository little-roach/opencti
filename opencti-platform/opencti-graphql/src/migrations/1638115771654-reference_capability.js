import { BYPASS_REFERENCE, createCapabilities } from '../initialization';

export const up = async (next) => {
  // Create labels capabilities
  await createCapabilities([
    {
      name: BYPASS_REFERENCE,
      attribute_order: 6000,
      description: 'Bypass mandatory references if any',
    },
  ]);
  next();
};

export const down = async (next) => {
  next();
};
