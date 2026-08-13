import { SafeAreaView, Text, View } from 'react-native';
import { Pill, PrimaryButton, Starfield } from './SpaceUi';
import { briefingStyles as styles } from './briefingStyles';

export function BriefingScreen({ countdown, running, onStart }: { countdown: number; running: boolean; onStart: () => void }) {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <Starfield />
      <View style={styles.nebulaOne} />
      <View style={styles.nebulaTwo} />
      <View style={styles.wrap}>
        <Pill>K2 SPACE COMMAND</Pill>
        <Text style={styles.signal}>TRANSMISSÃO RECEBIDA</Text>
        <View style={styles.avatarRing}><Text style={styles.astronaut}>👨‍🚀</Text></View>
        <Text style={styles.kicker}>MISSÃO ESPECIAL • NÍVEL 06</Text>
        <Text style={styles.title}>Você foi convocado para uma missão inesquecível.</Text>
        <Text style={styles.copy}>O comandante Miguel está preparando uma aventura intergaláctica — e a sua presença faz parte do plano.</Text>
        {!running ? (
          <PrimaryButton label="ABRIR TRANSMISSÃO" onPress={onStart} />
        ) : (
          <View style={styles.countdownBox}>
            <Text style={styles.countdownLabel}>PREPARAR PARA DECOLAGEM</Text>
            <Text style={styles.countdownNumber}>{countdown === 0 ? 'GO!' : countdown}</Text>
          </View>
        )}
        <Text style={styles.micro}>21 NOV 2026 • 18H30 • IBIMIRIM / PE</Text>
      </View>
    </SafeAreaView>
  );
}
