import { View, Text, FlatList, Linking } from "react-native";
import { useGames } from '../../hooks/useGames.js';
import { useGameStore } from '../../../gameStore/hooks/useGameStore.js';
import { useStore } from '../../../stores/hooks/useStore.js'

import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../constants/routes.js';
import GameCard from "../../components/GameCard/index.jsx";
import StoreCard from "../../../stores/components/StoreCard/index.jsx";

function GamesList() {
    const { games, loading } = useGames();
    const { gameStore } = useGameStore();
    const { store } = useStore();

    const navigation = useNavigation();

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
                        width={190}
                        onPress={() => {
                            navigation.navigate(ROUTES.GAME_DETAILS, {
                                game: item,
                                gameStore: gameStore,
                                stores: store
                            })
                        }}
                    />
                )}
            />

        </View>
    );
}

export default GamesList;