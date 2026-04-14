import { View, Text, Image } from 'react-native-web';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { styles } from './styles.js';

function GameCard({ game, width }) {
    return (
        <View style={[styles.container, { width: width }]}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: game.capa_url }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{game.titulo}</Text>
                <Text>{dateFormatter(game.data_lanc)}</Text>
                <Text>{game.desenvolvedor}</Text>
                <Text>{game.downloads} Downloads</Text>
            </View>
        </View>
    );
}

export default GameCard;