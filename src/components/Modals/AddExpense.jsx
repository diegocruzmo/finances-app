import {
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select
} from 'antd'
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '../../firebase'
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import dayjs from 'dayjs'

const AddExpense = ({
  isExpenseModalVisible,
  handleExpenseCancel,
  fetchTransactions
}) => {
  const [form] = Form.useForm()
  const [user] = useAuthState(auth)

  const onFinish = (values) => {
    //console.log('Success:', values)
    const newTransaction = {
      type: 'expense',
      date: dayjs(values.date).format('YYYY-MM-DD'),
      amount: parseFloat(values.amount),
      tag: values.tag,
      name: values.name
    }

    addTransaction(newTransaction)
    fetchTransactions()
    form.resetFields()
  }

  const addTransaction = async (transaction) => {
    try {
      const docRef = await addDoc(
        collection(db, `users/${user.uid}/transactions`),
        transaction
      )

      //console.log('Document', docRef.id)

      toast.success('Transaction added!')
    } catch (error) {
      toast.error(error)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      open={isExpenseModalVisible}
      onCancel={handleExpenseCancel}
      footer={null}
    >
      <p className='fw-bold'>Add Expense</p>
      <Form
        form={form}
        className='mt-4'
        name='basic2'
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 600
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input a name!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Amount'
          name='amount'
          rules={[
            {
              required: true,
              message: 'Please input an amount!'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label='Date'
          name='date'
          rules={[
            {
              required: true,
              message: 'Please select a date!'
            }
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name='tag'
          label='Tag'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select placeholder='Select an option' allowClear>
            <Select.Option value='a'>A</Select.Option>
            <Select.Option value='b'>B</Select.Option>
            <Select.Option value='c'>C</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddExpense
