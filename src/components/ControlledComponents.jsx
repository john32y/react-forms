import { useState } from "react"

export default function ControlledComponents() {
    const person = {
        firstName: "fred",
        lastName: "flintstone"
    }
    const [firstName, setFirstName] = useState(person.firstName || '')
    const [lastName, setLastName] = useState(person.lastName || '')
    return (
        <>
        <h2>Controlled Components</h2>
        <p>Form fields in HTML typically manage their own state.</p>
        <p>In a <strong>controlled component</strong>we let the React component take control of that state using <code>value</code>.</p>
        <h3>You typed: {firstName}</h3>
        <label htmlFor="">First Name:</label>
        <input name="firstName" type="text" 
        onChange={e => setFirstName(e.target.value)} />
         <label htmlFor="">Last Name:</label>
         <input name="lastName" type="text" 
         onChange={e => setLastName(e.target.value)} />

        </>
    )
}