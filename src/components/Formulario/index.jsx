import { useState } from "react";

import styles from './Formulario.module.css'

const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const calculaImc = () =>{
        const imc = (peso / (altura * altura) * 10000);
        
        const indicaNaTabela = () =>{
            if (imc != 0 && imc <= 18.5){
                document.getElementById('linha-1');
            }
        }

        return(
            <div className={styles.imc}>
                <h3>{imc.toFixed(2)}</h3>
            </div>
        )
    }

    // const indicaNaTabela = () =>{
    //     if (imc != 0 && imc <= 18.5) {
    //         return(
    //             <p>Magreza</p>
    //         )
    //     } else if (imc >= 18.6 && imc < 25){
    //         return(
    //             <p>Normal</p>
    //         )
    //     } else if (imc >= 25 && imc < 29.9){
    //         return(
    //             <p>Sobrepeso</p>
    //         )
    //     } else if (imc >= 30 && imc < 34.9){
    //         return(
    //             <p>Obesidade grau 1</p>
    //         )
    //     } else if (imc >= 35 && imc < 39.9){
    //         return(
    //             <p>Obesidade grau 2</p>
    //         )
    //     } else if (imc >= 40){
    //         return(
    //             <p>Obesidade grau 3</p>
    //         )
    //     }
    // }

    return(
        <div>
            <div className={styles.titulo}>
                <h1>CALCULE O SEU IMC</h1>
            </div>
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Altura" onChange={evento => setAltura(evento.target.value)}/>
                <input className={styles.input} type="number" placeholder="Peso" onChange={evento => setPeso(evento.target.value)}/>
                {calculaImc()}
                {/* {indicaNaTabela()} */}
            </form>
        </div>
    )
}

export default Formulario;