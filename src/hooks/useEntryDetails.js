import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import {v4 as uuidv4} from 'uuid';
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(des="", val="", isExp = true) {
  const [description, setDescription] = useState(des);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(()=> {
    setDescription(des);
    setValue(val);
    setIsExpense(isExp);
  }, [des, val, isExp]);

  function updateEntry(id){
    dispatch(
      updateEntryRedux(
        id,
        {
          id,
          description,
          value,
          isExpense
        }
      )
    );
    dispatch (
      closeEditModal()
    )
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue(0);
    setIsExpense(true);
  }

  function addEntry() {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense
    }));
    resetEntry();
  }
  return {
    description, 
    setDescription,
    value, 
    setValue,
    isExpense, 
    setIsExpense, 
    addEntry,
    updateEntry
  }
}

export default useEntryDetails