

function Button({className, label, buttonClick}){
    return(
        <div>
            <button onClick={buttonClick} className={className} >{label}</button>
        </div>
    )
}

export default Button;