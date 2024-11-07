import { useState } from 'react'

const useModals = () => {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false)
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false)

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true)
  }

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true)
  }

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false)
  }

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false)
  }
  return {
    showExpenseModal,
    showIncomeModal,
    handleExpenseCancel,
    handleIncomeCancel,
    isExpenseModalVisible,
    isIncomeModalVisible
  }
}

export default useModals
