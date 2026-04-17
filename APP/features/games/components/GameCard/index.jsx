import { View, Text, Image, TouchableOpacity } from 'react-native';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { styles } from './styles.js';

function GameCard({ game, width, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { width: width }]}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: game.capa_url || "https://cdn-icons-png.flaticon.com/512/3875/3875172.png" }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{game.titulo}</Text>
                    <Text>{dateFormatter(game.data_lanc)}</Text>
                    <Text>{game.desenvolvedor}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default GameCard;