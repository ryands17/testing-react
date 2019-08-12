import React, { useState, useMemo } from 'react'

interface Checklist {
  id: number
  text: string
  checked: boolean
}

interface ChecklistProps {
  checklistItems?: Checklist[]
}

const Checklist: React.FC<ChecklistProps> = ({ checklistItems = [] }) => {
  let [checklist, updatelist] = useState<Checklist[]>(checklistItems)

  const toggleComplete = (index: number) => {
    let newChecklist = [...checklist]
    newChecklist[index].checked = !newChecklist[index].checked
    updatelist(newChecklist)
  }

  let checkedItems = useMemo(() => checklist.filter(c => c.checked).length, [
    checklist,
  ])

  return (
    <div>
      <ul className="checklist" data-testid="items-list">
        {checklist.map((checkitem, index) => (
          <li key={checkitem.id} className="list-item">
            <input
              type="checkbox"
              id={checkitem.id.toString()}
              checked={checkitem.checked}
              onChange={() => toggleComplete(index)}
            />
            <label htmlFor={checkitem.id.toString()}>{checkitem.text}</label>
          </li>
        ))}
      </ul>
      <p data-testid="checked-items">
        Checked {checkedItems} of {checklist.length} items
      </p>
    </div>
  )
}

export default Checklist
