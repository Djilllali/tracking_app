import React, { useState, useEffect }  from 'react'
import 'antd/dist/antd.css';
import '../index.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import TodoData from '../reducers/TodoData';



const { Meta } = Card
console.log(TodoData)
const MyPopup=()=>{

  const [state, setState] = useState({
    //RelayName : TodoData.seller_id.ref,
    Description:"This is a description"
    
  });
  
  useEffect(() => {

  });

    return(
        <>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting"/>,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
            <Meta
              avatar={
                <Avatar  shape="square" src="https://www.flaticon.com/svg/static/icons/svg/273/273177.svg"/>
              }
              
              description={state.Description}
            />

        </Card>
      </>
    )
}
const mapStateToProps=(state)=>{
  return(
    TodoData=state.TodoData
  )

}
export default connect(mapStateToProps)(MyPopup)

