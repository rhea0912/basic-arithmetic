

function InputField({placeholder, inputRef}){
return (
    <div>
        <input type="number" placeholder={placeholder} ref={inputRef}/>
    </div>
)
}

export default InputField;