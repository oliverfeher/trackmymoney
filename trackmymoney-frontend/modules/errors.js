class Errors {

    static loginErrors() {
        document.querySelectorAll("input")[0].classList.add("inputError");
            document.querySelectorAll("input")[1].classList.add("inputError");
            
            
            const errorMsg = document.createElement("p");
            errorMsg.innerText = "Invalid Creditentials";
            errorMsg.style.textAlign = "center";
            errorMsg.style.color = "indianred";
            errorMsg.style.fontWeight = "bold";


            document.querySelectorAll("input")[1].after(errorMsg)
            setTimeout(()=>{
                document.querySelectorAll("input")[0].classList.remove("inputError");
                document.querySelectorAll("input")[1].classList.remove("inputError");
                errorMsg.remove();
            }, 2500);
    }
}

export default Errors;