import { Tag } from "antd";
import Chance from "chance";
const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company.localeCompare(b.company),
      ellipsis: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
        key: 'email',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        sorter: (a, b) => a.country.localeCompare(b.country),
        key: 'country',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        sorter: (a, b) => a.tags[0].localeCompare(b.tags[0]),
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag === 'Active' ? '#16C09861' : '#FFC5C5';
              let border = tag==='Active'?"#008767":'#DF0404'
              return (
                <Tag color={color} key={tag} style={{borderColor:border,color:border,width:'70px',textAlign:'center'}} >
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
  ];
const chance = new Chance();

const generateFakeData = () => {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i.toString(),
      name: chance.name(),
      company: chance.company(),
      phone: chance.phone(),
      email: chance.email(),
      country: chance.country(),
      tags: [chance.pickone(['Active', 'Inactive'])],
    });
  }
  return data;
};
  
  const data = generateFakeData();
  export {data,columns}