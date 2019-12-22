import Mensagem_PopUp from 'materialize-css';

const PopUp = { // Utilizando TOAST do materialize
  exibeMensagem: (status, msg) => {
    if (status === "success")
      Mensagem_PopUp.toast({ html: msg, classes: "green", displayLength: 2000 })
    
    if (status === "error")
      Mensagem_PopUp.toast({ html: msg, classes: "red", displayLength: 2000 })
  }
}
export default PopUp;