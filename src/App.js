import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayCommonBalance from './components/DisplayCommonBalance';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title={'BugetSaga'}/>
      <DisplayBalance title={'Your balance:'} value={'2.550.45'} size='small'/>
      <DisplayCommonBalance />
      <MainHeader title={'History'} type='h3'/>
      <EntryLine description='income' value='$20.00'/>
      <EntryLine description='Expense' value='$20.00' isExpense/>
      <MainHeader title={'Add new transaction'} type='h3'/>
      <NewEntryForm />
    </Container>
  );
}

export default App;
