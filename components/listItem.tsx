import React from 'react'
import styles from './listItem.module.css'
import { parseISO, format } from 'date-fns';
import { TwitterOutlined,InstagramFilled,FacebookFilled,LikeOutlined,MessageOutlined,ShareAltOutlined,EyeOutlined  } from '@ant-design/icons';
export default function listItem({data}) {
    const color = (status) => {
      
        switch (status) {
            case 0:
                return "#acacac";
            case 1:
                return "#3ac183";
            case 2:
                return "#f7bf38";
            case 3:
                return "#fb6450";
            case 3:
                return "#67b1f2"; 
            default:
                return null;
        }
      
      };
    const social=(platform)=>{
        switch (platform) {
            case "facebook":
                return <FacebookFilled />;
            case "twitter":
                return <TwitterOutlined /> ;
            case "instagrambusiness":
                return <InstagramFilled />;
            default:
                return null;
        }
    }
  return (
    <div className={styles.item}>
        <div className={styles.left} style={{  backgroundColor: color(data.status)  }}> {social(data.account.channel)}</div>
        <div className={styles.right}>
            <h3>{ format(parseISO(data.published_at), 'dd LLLL yyyy - HH:MM') }</h3>
            <div>{data.entry.message}</div>
            <img src={data.entry.image[0]} alt="" onError={({currentTarget })=> currentTarget .src='no-post-image.png'} />
            <div className={styles.icons}>
                <LikeOutlined />
                <span>{Math.floor(Math.random() * 100)}</span>
                <MessageOutlined />
                <span>{Math.floor(Math.random() * 100)}</span>
                <ShareAltOutlined />
                <span>{Math.floor(Math.random() * 100)}</span>
                <EyeOutlined />
                <span>{Math.floor(Math.random() * 100)}</span>
            </div>
        </div>
    </div>
  )
}
