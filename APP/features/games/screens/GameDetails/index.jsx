import { View, Text, Image, Linking } from "react-native";
import StoreCard from "../../../stores/components/StoreCard";
import { moneyFormatter } from "../../utils/moneyFormatter.js";
import { dateFormatter } from '../../utils/dateFormatter.js'
import { styles } from "./styles.js";

function GameDetails(prop) {
    const game = prop.route.params.game;
    const gameStore = prop.route.params.gameStore;
    const stores = prop.route.params.stores;

    const relatedStores = Array.isArray(gameStore) && Array.isArray(stores)
        ? gameStore
            .filter(gs => Number(gs.jogo) === Number(game.id))
            .map(gs => {
                const storeData = stores.find(s => Number(s.id) === Number(gs.loja));
                return storeData ? { ...storeData, ...gs } : null;
            })
            .filter(Boolean)
        : [];

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: game.capa_url }}
                style={styles.img}
            />

            <Text style={{ fontWeight: "500", fontSize: 18 }}>{game.titulo}</Text>

            <Text style={{ margin: 5 }}>{game.desenvolvedor}</Text>

            <Text
                style={game.descricao ? { margin: 5 } : { margin: 0 }, { textAlign: "center" }}>
                {game.descricao ? game.descricao : ""}
            </Text>



            <Text style={{ marginTop: 5, fontWeight: "500" }}>Genero</Text>
            <Text>{game.genero}</Text>

            <Text style={{ marginTop: 10, fontWeight: "500" }}>Data de Lançamento</Text>
            <Text>{dateFormatter(game.data_lanc).date}</Text>

            <Text style={{ marginTop: 10, fontWeight: "500" }}>Classificação Indicativa</Text>
            <Text>{game.class_indicativa}</Text>

            <Text style={{ marginTop: 10, fontWeight: "500" }}>Total de downloads</Text>
            <Text>{game.downloads}</Text>



            <Text style={{ marginTop: 16, fontWeight: "bold" }}>
                Disponível em:
            </Text>

            <View style={styles.storesContainer}>
                {
                    relatedStores.length > 0
                        ? relatedStores.map((item) => (
                            <View key={item.id.toString()} style={{ alignItems: "center" }}>
                                <StoreCard
                                    store={item}
                                    width={90}
                                    onPress={() => Linking.openURL(item.site_url)}
                                />
                                {
                                    item.preco_promocao
                                        ? <View style={{ alignItems: "center"}}>
                                            <Text style={{ fontWeight: "200", fontSize: 12, textDecorationLine: "line-through" }}>De {moneyFormatter(item.preco)}</Text>
                                            <Text style={{ fontWeight: "500", fontSize: 12 }}>Por {moneyFormatter(item.preco_promocao)} </Text>
                                            <Text style={{ fontWeight: "500", fontSize: 12, color: "#ce0000" }}>{dateFormatter(item.data_promocao_fim).datetime}</Text>
                                        </View>
                                        : <Text style={{ fontWeight: "500" }}>{moneyFormatter(item.preco)}</Text>
                                }
                            </View>
                        ))
                        : <Text>Não possui lojas relacionadas!</Text>
                }
            </View>
        </View>
    );
}

export default GameDetails;