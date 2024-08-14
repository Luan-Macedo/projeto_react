import styles from './Tabela.module.css';

const Tabela = () =>{
    return(
        <div className='container'>
            <table className={styles.table} cellSpacing={0}>
                <tbody className={styles.body}>
                    <tr className={styles.colunaNome}>
                        <td>IMC</td>
                        <td>Classificação</td>
                        <td className={styles.ultimaColuna}>Grau de Obesidade</td>
                    </tr>
                    <tr id='linha-1'>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td className={styles.ultimaColuna}>0</td>
                    </tr>
                    <tr id='linha-2'>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td className={styles.ultimaColuna}>0</td>
                    </tr>
                    <tr id='linha-3'>
                        <td>Entre 25 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td className={styles.ultimaColuna}>1</td>
                    </tr>
                    <tr id='linha-4'>
                        <td>Entre 30 e 39,9</td>
                        <td>Obesidade</td>
                        <td className={styles.ultimaColuna}>2</td>
                    </tr>
                    <tr id='linha-5'>
                        <td>Maior que 40</td>
                        <td>Obesidade Grave</td>
                        <td className={styles.ultimaColuna}>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;