import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayCommonBalance from './components/DisplayCommonBalance';
import { useState, useEffect } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useDispatch, useSelector} from 'react-redux';
import { getEntryRedux } from './actions/entries.actions';

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpanse, setTotalExpanse] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const {isOpen, id} = useSelector(state => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id, entries]);

  useEffect(()=>{
    let totalIncomehere = 0;
    let totalExpansehere = 0;
    entries.map((entry) => {
      if(entry.isExpense){
        return (totalExpansehere += Number(entry.value));
      } 
        return (totalIncomehere += Number(entry.value));
    });
    setTotal(totalIncomehere - totalExpansehere);
    setTotalExpanse(totalExpansehere);
    setTotalIncome(totalIncomehere);
  }, [entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntryRedux());
  }, [])
  

  return (
    <Container style={{ margin: '20px' }}>
      <MainHeader title={'BugetSaga'} />
      <DisplayBalance title={'Your balance:'} value={total} size='small' />
      <DisplayCommonBalance totalIncome={totalIncome} totalExpanse={totalExpanse} />
      <MainHeader title={'History'} type='h3' />
      <EntryLines entries={entries} />
      <MainHeader title={'Add new transaction'} type='h3' />
      <NewEntryForm/>
      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;

