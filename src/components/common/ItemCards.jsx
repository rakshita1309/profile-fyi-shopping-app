'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react';
import ItemStore from '../../stores/Items/ItemStore';
import Carousel from './Carousal';

function ItemCard({ id }) {
  const router = useRouter();
  const item = ItemStore.allItems[id];

  let pictures = item?.colors?.length ? item?.pictures[item.colors[0]] : item?.pictures;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        border: '0.5px solid black',
        borderRadius: '4px',
        background: 'white'
      }}
      onClick={() => {
        const path = `/item/${item.id}`;
        router.push(path);
      }}
    >
      <Carousel
        images={pictures}
        interval={Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000}
      />
      <span style={{ fontWeight: '300' }}>{item.name}</span>
      <span style={{ fontWeight: '200' }} >{item.description}</span>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          {item?.colors?.map((color) => {
            return <div key={color} style={{ width: '16px', height: '16px', background: color }} />;
          })}
        </div>
        <span>${item.price}</span>
      </div>
    </div>
  )
}


export default observer(ItemCard);