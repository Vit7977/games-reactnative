import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "../constants/routes";
import { GamesList, GameDetails, CreateGame } from '../features/games';

const Stack = createStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.GAMES_LIST} screenOptions={{
                headerStyle: {
                    backgroundColor: "#333333",
                }
            }}>
                <Stack.Screen
                    name={ROUTES.GAMES_LIST}
                    component={GamesList}
                    options={{
                        title: "Jogos",
                        headerTintColor: "#fff"
                    }}
                />

                <Stack.Screen
                    name={ROUTES.GAME_DETAILS}
                    component={GameDetails}
                    options={{
                        title: "Detalhes do Jogo",
                        headerTintColor: "#fff"
                    }}
                />

                <Stack.Screen
                    name={ROUTES.CREATE_GAME}
                    component={CreateGame}
                    options={{
                        title: "Cadastrar Jogo",
                        headerTintColor: "#fff"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}