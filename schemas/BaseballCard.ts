import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const BaseballCard = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
      },
      fields: {
          firstName: text({
            isRequired: true,
            ui: {
                displayMode: 'input',
              },
          }),
          lastName: text({
            isRequired: true,
            ui: {
                displayMode: 'input',
              },
          }),
          year: integer(),
          brand: text({
            isRequired: true
          }),
          card_Number: integer(),
          description: text({
            ui: {
              displayMode: 'textarea',
            },
          }),
          condition: text(),
          buyPrice: integer(),
          buyDate: text(),
          sellingPrice: integer(),
          sellingDate: text(),
          soldPrice: integer(),
          soldDate: text(),
          
          image1: relationship({
            ref: 'BaseballCardImageOne.product',
            ui: {
              displayMode: 'cards',
              cardFields: ['image', 'altText'],
              inlineCreate: { fields: ['image', 'altText'] },
              inlineEdit: { fields: ['image', 'altText'] },
            },
            }),
           image2: relationship({
               ref: 'BaseballCardImageTwo.product',
               ui: {
               displayMode: 'cards',
               cardFields: ['image', 'altText'],
               inlineCreate: { fields: ['image', 'altText'] },
               inlineEdit: { fields: ['image', 'altText'] },
            },
            }),
        },

});