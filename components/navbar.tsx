import React, { useState } from 'react'
import styles from './navbar.module.css'
import { BellOutlined,LineChartOutlined,FormOutlined,PlusOutlined,MinusOutlined,CaretDownOutlined  } from '@ant-design/icons';
export default function navbar() {
  const [drop, setDrop] = useState(false);  
  return (
    <div className={styles.navbar}>
      <ul>
        <li> <BellOutlined /> NOTIFICATIONS <span className={styles.count}>{32}</span></li>
        <li> <LineChartOutlined />  SUMMARY </li>
        <li onClick={()=> setDrop((x=> !x ))} className={!drop && styles.active}> <FormOutlined /> PUBLISH <span className={styles.expand}> { drop ?  <PlusOutlined /> : <MinusOutlined />} </span> </li>
        <ul hidden={drop}>
          <li><CaretDownOutlined /> Compose</li>
          <li>Feed</li>
        </ul>
      </ul>
    </div>
  )
}
