import { useState } from "react";

import styles from './Formulario.module.css'

const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    var imc = 0;

    const calculaImc = () =>{
        imc = (peso / (altura * altura) * 10000);

        return(
            <div className={styles.imc}>
                <h3>{imc.toFixed(2)}</h3>
            </div>
        )
    }

    const indicaNaTabela = () =>{
        if (imc != 0 && imc <= 18.5) {
            let linha1 = document.getElementById('linha-1');
            linha1.classList.add(styles.linhaDestacada)
        } else if (imc >= 18.6 && imc < 25){
            let linha2 = document.getElementById('linha-2');
            linha2.classList.add(styles.linhaDestacada)
        } else if (imc >= 25 && imc < 29.9){
            let linha3 = document.getElementById('linha-3');
            linha3.classList.add(styles.linhaDestacada)
        } else if (imc >= 30 && imc < 39.9){
            let linha4 = document.getElementById('linha-4');
            linha4.classList.add(styles.linhaDestacada)
        } else if (imc >= 40){
            let linha5 = document.getElementById('linha-5');
            linha5.classList.add(styles.linhaDestacada)
        }
    }

    const removeClasse = () => {
        [...document.getElementsByClassName(styles.linhaDestacada)].forEach(function (linha){
            linha.classList.remove(styles.linhaDestacada)
        });
    }

    return(
        <div className="container">
            <div className={styles.titulo}>
                <h1>CALCULE O SEU IMC</h1>
            </div>
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Altura" onChange={evento => setAltura(evento.target.value)}/>
                <input className={styles.input} type="number" placeholder="Peso" onChange={evento => setPeso(evento.target.value)}/>
                {calculaImc()}
                {removeClasse()}
                {indicaNaTabela()}
            </form>
        </div>
    )
}

export default Formulario;