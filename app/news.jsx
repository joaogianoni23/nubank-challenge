import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function News () {
    return (
        <card style={styles.card}>
                    <Image source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/corinthians-libertadores-2012-e1720108028700.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Corinthians conquista a Libertadores 2012 de forma invicta!</Text>

<Text style={styles.text1}>O Sport Club Corinthians Paulista fez história ao conquistar a Copa Libertadores da América de 2012 de forma invicta, um feito raríssimo na competição! O Timão venceu o Boca Juniors (ARG) por 2 a 0 na grande final, com dois gols do ídolo Emerson Sheik, e levantou o troféu continental pela primeira vez.</Text>

<Text>🔥 O caminho até a glória:</Text>
<Text>Fase de grupos: Terminou como líder, sem perder nenhum jogo.
Oitavas de final: Eliminou o Emelec (EQU) com um golaço de Paulinho.
Quartas de final: Passou pelo Vasco, com o histórico gol de Paulinho nos minutos finais.
Semifinal: Superou o Santos de Neymar.
Final: Empate em 1x1 na Bombonera e vitória por 2x0 no Pacaembu!</Text>
<Text>🏅 Time titular na final:
Cássio; Alessandro, Chicão, Leandro Castán e Fábio Santos; Ralf, Paulinho, Danilo e Alex; Jorge Henrique e Emerson Sheik.</Text>

<Text>Técnico: Tite</Text>
<Text>Essa conquista abriu caminho para a vitória no Mundial de Clubes da FIFA 2012, quando o Corinthians venceu o Chelsea por 1x0, com gol de Guerrero.</Text>
<Text style={styles.text2}>CORINTHIANS ETERNO CAMPEÃO INVICTO! 🏆🔥 </Text>
        </card>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    text1: {
        marginTop: 10,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    card: {
        backgroundColor: 'white',
        width: 1200,
        height: 450,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        margin: 30,
    },
    profileImage: {
        width: 400,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    }
});
