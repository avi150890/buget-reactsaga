import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({
  description, setDescription,
  value, setValue,
  isExpense, setIsExpense
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon='tags' width={12} label="Description"
          placeholder="New shiny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon='dollar' width={4} label="Value"
          iconPosition='left'
          placeholder="100.00"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox label='Is Expense' toggle checked={isExpense}
          onChange={() => setIsExpense(oldState => !oldState)} />
      </Segment>
    </>
  )
}

export default EntryForm