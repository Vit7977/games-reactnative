import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

function StoreCard({ store, width, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor: "#fff", width: width }]}>
                <Image
                    style={styles.logo}
                    source={{ uri: store.logo || "https://cdn-icons-png.flaticon.com/512/3875/3875172.png" }}
                />

                {
                    width > 100 && (
                        <Text style={[styles.nome, { color: store.cor2 }]} numberOfLines={1}>
                            {store.nome}
                        </Text>
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

export default StoreCard;