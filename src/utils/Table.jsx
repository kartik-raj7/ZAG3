import React, { useState } from 'react'
import { Col, Input, Row, Select, Table } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
const provinceData = ['Newest First','Last 30 days'];
const TableData = ({columns,data}) => {
  const [cities, setCities] = useState(null);
  const handleProvinceChange = (value) => {
    setCities(value);
  };
  const pagination = {
    showTotal: (total, range) => `Showing data ${range[0]} to ${range[1]} of ${total} entries`,
    pageSizeOptions: [`${data.length/10}`],
    showSizeChanger: true, 
    pageSize: 10, 
  };
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value) => {
    const searchData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.company.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(searchData);

  };
  return (
    <>
     <Row>
      <Col span={12} style={{color:'#16C098',display:'flex',alignItems:'center',paddingLeft:'20px'}}>Active Members</Col>
      <Col span={8}>
      <Input prefix={<SearchOutlined />} defaultValue="Search " style={{
        width: 200,

      }} placeholder='Search here' onChange={(e) => handleSearch(e.target.value)}/>
      </Col>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
     </Row>
     <Table columns={columns} dataSource={filteredData}  pagination={pagination}/>
     </>
  )
}

export default TableData;