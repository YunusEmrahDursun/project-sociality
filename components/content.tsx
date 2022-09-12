import React, { useEffect, useState } from 'react'
import ListItem from '@components/listItem';
import { Row,Col } from 'react-bootstrap';
import {  parseISO,format } from 'date-fns';
export default function content() {
    const [data, setData] = useState({posts_by_date:{}});

    useEffect(() => {
        const url = "/api/data";
        fetch(url).then(response=> response.json()).then(json=> setData(json));
    }, [])
  
   return (
        <>
            {Object.keys(data?.posts_by_date).map(date=>
                <div key={date} >
                    <h1>{ format(parseISO(date), 'dd LLLL yyyy') }</h1>
                    <Row >
                        {data?.posts_by_date[date].map((item,index)=> <Col key={index} lg={4} md={6} xs={12} xl={3} sm={12} xxl={12}> <ListItem data={item}/> </Col>  )}
                    </Row>            
                </div>

            )}
        </>
  )
}
