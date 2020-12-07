import React, { useState, useEffect }  from 'react'
import '../index.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {TodoData} from '../constants';
import { useHistory } from 'react-router-dom';



const { Meta } = Card
console.log()
const MyPopup=(props)=>{
  const history = useHistory();
  const [state, setState] = useState({
    RelayName : TodoData[0].seller_id.ref,
    Description: TodoData[0].seller_id.ref,
    Seller_D: TodoData[0].deliveries[0].delivery_id.type,
    Seller_E: TodoData[0].deliveries[0].delivery_id.ref,
    Seller_G: TodoData[0].active_deliveries[0].package_id.type,
    Seller_H: TodoData[0].active_deliveries[0].package_id.ref
  });
  
  useEffect(() => {

  });
  
const handleEdit=()=>{
  history.push("/dashboard/EditPopup")
}
    return(
        <>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting"/>,
            <EditOutlined key="edit" onClick={handleEdit} />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
            <Meta
              avatar={
                <Avatar  shape="square" src="https://www.flaticon.com/svg/static/icons/svg/273/273177.svg"/>
              }
              title={state.RelayName}
              description={state.Description}
            />
            <h1>{state.Seller_D} </h1>
            <h1>{state.Seller_E} </h1>
            <h1>{state.Seller_G} </h1>
        



        </Card>
      </>
    )
}

export default MyPopup

