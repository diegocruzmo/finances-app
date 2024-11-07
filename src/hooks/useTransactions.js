import { useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db, auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

export const useTransactions = () => {
  const [user] = useAuthState(auth)
  const [transactions, setTransactions] = useState([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [balance, setBalance] = useState(0)

  const fetchTransactions = async () => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/transactions`))
      const querySnapshot = await getDocs(q)

      const fetchedTransactions = []
      querySnapshot.forEach((doc) => {
        fetchedTransactions.push(doc.data())
      })

      setTransactions(fetchedTransactions)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const calculateBalance = () => {
    const newIncome = transactions.reduce((accumulator, transaction) => {
      return transaction.type === 'income'
        ? accumulator + transaction.amount
        : accumulator
    }, 0)

    const newExpense = transactions.reduce((accumulator, transaction) => {
      return transaction.type === 'expense'
        ? accumulator + transaction.amount
        : accumulator
    }, 0)

    setIncome(newIncome)
    setExpense(newExpense)
    setBalance(newIncome - newExpense)
  }

  useEffect(() => {
    calculateBalance()
  }, [transactions])

  return { transactions, income, expense, balance, fetchTransactions }
}
