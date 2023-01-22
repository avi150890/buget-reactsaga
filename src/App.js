import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayCommonBalance from './components/DisplayCommonBalance';
import { useState, useEffect } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpanse, setTotalExpanse] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
  }, [entries])
  
  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(entry.id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }
  return (
    <Container style={{ margin: '20px' }}>
      <MainHeader title={'BugetSaga'} />
      <DisplayBalance title={'Your balance:'} value={total} size='small' />
      <DisplayCommonBalance totalIncome={totalIncome} totalExpanse={totalExpanse} />
      <MainHeader title={'History'} type='h3' />
      <EntryLines entries={entries} deleteEntry={deleteEntry}
        editEntry={editEntry} />
      <MainHeader title={'Add new transaction'} type='h3' />
      <NewEntryForm addEntry={addEntry}
        description={description} setDescription={setDescription}
        value={value} setValue={setValue}
        isExpense={isExpense} setIsExpense={setIsExpense}
      />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
        description={description} setDescription={setDescription}
        value={value} setValue={setValue}
        isExpense={isExpense} setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 200.00,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  }
]
