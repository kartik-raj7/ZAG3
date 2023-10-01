import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined ,RiseOutlined} from '@ant-design/icons';
import { Button, Col, Divider, Image, Menu, Row, Typography } from 'antd';
import { data,columns } from './data/tabledata';
import TableData from './utils/Table'
import './App.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Reports', 'sub1', <RiseOutlined />, [
  ]),
  getItem('Workspace', 'sub2', <AppstoreOutlined />, [
  ]),
  getItem('Settings', 'sub3', <SettingOutlined />, [
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
  <Row>
    <Col span={4}>
      <Row className='logoDiv'><Image src="/ZAG.png"/></Row>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
        className='sidenav'
      />
    </Col>
    <Col span={20} className='rightsideDiv'>
      <Col span = {19}>
      <Col span={24} >
        <Row className='topNav'>
          <Typography.Title level={4} className='orderText'>Orders</Typography.Title>
          <Button type='primary' size="large">+Add Order</Button>
        </Row>
        <Divider className='divider' />
        <Row className='chartRow'>
          <Col span={14} className='colStyle chartrowStyle'>
            <Typography.Title level={4} className='customerText'>All Customers Charts</Typography.Title>
            <Row className='chartRow'>
            <Col span={5} className='progresscircleDiv'>
            <CircularProgressbar value={85} text={`${85}%`} className='doughnutchartStyle'styles={buildStyles({
    pathColor: `#5F27CD`,
    textColor: '#5F27CD',
  })}/>
            <Typography className='progresscircleHeadings'>Current Customers</Typography>
            </Col>
            
            <Col span={5} className='progresscircleDiv'>
            <CircularProgressbar value={66} text={`${66}%`}  className='doughnutchartStyle'styles={buildStyles({
    pathColor: `#16C09861`,
    textColor: '#16C09861',
  })}/>
            <Typography className='progresscircleHeadings'>New Customers</Typography>
            </Col>
            <Col span={5} className='progresscircleDiv'>
            <CircularProgressbar value={90} text={`${90}%`}  className='doughnutchartStyle' styles={buildStyles({
    pathColor: `#FF6B6B`,
    textColor: '#FF6B6B',
  })}/>
            <Typography className='progresscircleHeadings'>Target Customers</Typography>
            </Col>
            <Col span={5} className='progresscircleDiv'>
            <CircularProgressbar value={30} text={`${30}%`}  className='doughnutchartStyle' styles={buildStyles({
    pathColor: `#FF6B6B`,
    textColor: '#FF6B6B',
  })}/>
            <Typography className='progresscircleHeadings'>Target Customers</Typography>
            </Col>
            </Row>
          </Col>
          <Col span={8} className='colStyle'>
          
          <Typography.Title level={4} className='customerText'>Stats Overview</Typography.Title> 
          <Col span={24}>
          <Typography.Title level={5} className='progresshorizontalText'>Active</Typography.Title>
            <ProgressBar completed="63" height='10px' className='progressbarStyle' bgColor='#16C09861'/>
            <Typography.Title level={5} className='progresshorizontalTextsec'>63%</Typography.Title>
            </Col>
            <Col span={24} className='progressBardiv'>
            <Typography.Title level={5} className='progresshorizontalText'>Active</Typography.Title>
            <ProgressBar completed="88" height='10px' className='progressbarStyle' bgColor='#FF6B6B'/>
            <Typography.Title level={5} className='progresshorizontalTextsec'>88%</Typography.Title>
            </Col>
          </Col>
        </Row>
        <Col className='tableData' span={24} >
          <TableData columns={columns} data={data} />
        </Col>
      </Col>
    </Col>
    </Col>
  </Row>
</>

  );
};
export default App;