function bringData(event){
    event.preventDefault()//prevent default refresh of submission
    let from=event.target.from.value
    let to=event.target.to.value
    let amount=event.target.amount.value
    if(from==to){
    document.getElementById("result").innerHTML="please select different currencies"
    return}
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
          .then(resp => resp.json())
          .then((data) => {
            document.getElementById("result").innerHTML= `${amount} ${from} = ${data.rates[to]} ${to}`;
          });
        }