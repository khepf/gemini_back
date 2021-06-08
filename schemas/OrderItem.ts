import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const OrderItem = list({
  access: {
    create: isSignedIn,
    read: rules.canManageOrderItems,
    update: () => false,
    delete: () => true,
  },
  fields: {
    firstName: text({ isRequired: true }),
    lastName: text({ isRequired: true }),
    image1: relationship({
      ref: 'BaseballCardImageOne',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    sellingPrice: integer(),
    quantity: integer(),
    order: relationship({ ref: 'Order.items' }),
  },
});
