import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts} from 'expo-font'
import Header from './components/header';
import GameScreen from './screens/game-screen';
import StartGameScreen from './screens/start-game';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'robotoBlack' : require('./assets/fonts/Roboto-Black.ttf'),
    'robotoBold' : require('./assets/fonts/Roboto-Bold.ttf'),
    'robotoLight' : require('./assets/fonts/Roboto-Light.ttf'),
    'robotoThin' : require('./assets/fonts/Roboto-Thin.ttf'),
  })
  const title = !userNumber ? 'Adivina el numbero' : 'Comienza el juego';

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large'/>
      </View>
    )}

  let content = <StartGameScreen onStartGame={onStartGame}/>

  if(userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title={title}></Header>
      {content}
    </View>
  );
}