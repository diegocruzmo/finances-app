import Header from '../components/Header'
import Cards from '../components/Cards'
import useModals from '../hooks/useModals'
import AddExpense from '../components/Modals/AddExpense'
import AddIncome from '../components/Modals/AddIncome'
import { useTransactions } from '../hooks/useTransactions'

const DashboardView = () => {
  const {
    showExpenseModal,
    showIncomeModal,
    handleExpenseCancel,
    handleIncomeCancel,
    isExpenseModalVisible,
    isIncomeModalVisible
  } = useModals()

  const { transactions, income, expense, balance, fetchTransactions } =
    useTransactions()

  return (
    <>
      <Header />
      <Cards
        showExpenseModal={showExpenseModal}
        showIncomeModal={showIncomeModal}
        income={income}
        expense={expense}
        balance={balance}
      />

      <AddExpense
        isExpenseModalVisible={isExpenseModalVisible}
        handleExpenseCancel={handleExpenseCancel}
        fetchTransactions={fetchTransactions}
      />

      <AddIncome
        isIncomeModalVisible={isIncomeModalVisible}
        handleIncomeCancel={handleIncomeCancel}
        fetchTransactions={fetchTransactions}
      />
    </>
  )
}

export default DashboardView
