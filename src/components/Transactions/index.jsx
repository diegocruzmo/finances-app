import { Table, Input, Select } from 'antd'
import { useState } from 'react'

const Transactions = ({ transactions }) => {
  const dataSource = transactions.map((transaction, idx) => ({
    ...transaction,
    key: idx
  }))

  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

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

  const filteredTransactions = dataSource.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.type.toLowerCase().includes(type)
  )

  const handleChange = ({ value }) => {
    setType(value)
    console.log(value)
  }

  return (
    <div className='container container-fluid'>
      <div className='d-flex gap-2 p-2'>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search by name'
        />
        <Select
          labelInValue
          placeholder='Select...'
          optionFilterProp='label'
          onChange={handleChange}
          options={[
            {
              value: '',
              label: 'All'
            },
            {
              value: 'income',
              label: 'Income'
            },
            {
              value: 'expense',
              label: 'Expense'
            }
          ]}
        />
      </div>
      <Table dataSource={filteredTransactions} columns={columns} />
    </div>
  )
}

export default Transactions
