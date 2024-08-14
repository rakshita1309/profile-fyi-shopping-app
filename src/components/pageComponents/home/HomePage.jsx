'use client';

import React from 'react';
import { observer } from 'mobx-react';
import ItemStore from '../../../stores/Items/ItemStore';
import ItemCard from '../../common/ItemCards.jsx';

function HomePage(props) {
  let items = ItemStore.items;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: '16px'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        {
          items.map((item) => {
            return (
              <ItemCard id={item.id} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default observer(HomePage);