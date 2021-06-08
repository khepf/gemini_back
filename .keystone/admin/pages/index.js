import React from 'react';

import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { gql } from '@keystone-next/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
          CartItem: _allCartItemsMeta {
            count
          }
          OrderItem: _allOrderItemsMeta {
            count
          }
          Order: _allOrdersMeta {
            count
          }
          Role: _allRolesMeta {
            count
          }
          BaseballCard: _allBaseballCardsMeta {
            count
          }
          BaseballCardImageOne: _allBaseballCardImageOnesMeta {
            count
          }
          BaseballCardImageTwo: _allBaseballCardImageTwosMeta {
            count
          }
        }
      `}
    />
  );
}
