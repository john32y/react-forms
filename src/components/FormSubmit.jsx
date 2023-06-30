export default function FormSubmit() {
    const handleForm = (e) => {
        e.preventDefualt()
        const make = e.target.make.value 
        const model = e.target.model.value 
        const year = e.target.year.value 
        if(!year || !make || !model) return
        alert(`You submitted a ${year} ${make} ${model}.`)
    }
    return(
        <>
        <h2>Get Value on Form Submit</h2>
        <p>Most of the TIME, WE ONLY NEED THE FORM Values once the form is suubmitted.</p>
        <form onSubmit={handleForm} style={{ borderColor: 'red', borderWidth: 2,
    borderStyle: 'solid',
    padding: '1rem'}}>
            <input type="text" name="make" />
            <label htmlFor="make">Make:</label>
            <input type="text" name="model" />
            <label htmlFor="model">Model:</label>
            <input type="text" name="year" />
            <label htmlFor="year">Year:</label>
           
            <input type="submit" name="Save Vehicle" />
        </form>
        </>
    )
}