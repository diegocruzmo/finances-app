import './styles.css'
import { Card, Row, Button } from 'antd'

const Cards = ({
  showExpenseModal,
  showIncomeModal,
  balance,
  income,
  expense
}) => {
  return (
    <div className='container container-fluid'>
      <Row className='cards mt-4 mb-4'>
        <Card
          className='shadow-sm p-2 bg-white rounded'
          title='Current Balance'
        >
          <p>${balance}</p>
          <Button type='primary' block>
            Reset Balance
          </Button>
        </Card>

        <Card className='shadow-sm p-2 bg-white rounded' title='Total Incomes'>
          <p>${income}</p>
          <Button onClick={showIncomeModal} type='primary' block>
            Add Income
          </Button>
        </Card>

        <Card className='shadow-sm p-2 bg-white rounded' title='Total Expenses'>
          <p>${expense}</p>
          <Button onClick={showExpenseModal} type='primary' block>
            Add Expense
          </Button>
        </Card>
      </Row>
    </div>
  )
}

export default Cards
