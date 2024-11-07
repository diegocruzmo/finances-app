import { Table } from 'antd'

const Transactions = ({ transactions }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag'
    }
  ]
  return (
    <Table
      className='container container-fluid'
      dataSource={transactions}
      columns={columns}
    />
  )
}

export default Transactions
