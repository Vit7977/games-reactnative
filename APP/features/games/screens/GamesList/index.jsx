import { View, Text, FlatList } from "react-native-web";
import { styles } from "./styles";
import { useGames } from '../../hooks/useGames.js'
import GameCard from "../../components/GameCard/index.jsx";

function GamesList() {
    const { games, loading } = useGames();

    console.log(games);

    if (loading) return <Text>Loading...</Text>

    return (
        <View style={{ padding: 16, flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={games}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <GameCard
                        game={item}
                        width={"45vw"}
                    />
                )}
            />
        </View>
    );
}

export default GamesList;