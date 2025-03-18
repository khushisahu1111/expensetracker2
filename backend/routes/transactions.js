const { getExpense, deleteExpense, addExpense } = require('../controllers/expense');
const { addIncome , getIncomes, deleteIncomes} = require('../controllers/income')

const router = require('express').Router();


router.post('/add-income', addIncome)
   .get('/get-incomes', getIncomes)
   .delete('/delete-income/:id', deleteIncomes)
   .post('/add-expenses', addExpense)
   .get('/get-expenses', getExpense)
   .delete('/delete-expenses/:id', deleteExpense)



module.exports = router; 



