import { SafeAreaView, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { useMissionState } from '@/hooks/useMissionState';
import { getCountdown } from '@/utils-countdown';
import { ArrivalContent } from './ArrivalContent';
import { BriefingScreen } from './BriefingScreen';
import { MissionStage } from './MissionStage';
import { Starfield } from './SpaceUi';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const mission = useMissionState();

  if (mission.phase === 'briefing' || mission.phase === 'countdown') {
    return <BriefingScreen countdown={mission.countdown} running={mission.phase === 'countdown'} onStart={mission.start} />;
  }

  const launch = () => {
    if (mission.collected !== 3) return;
    mission.setPhase('launching');
    setTimeout(() => mission.setPhase('arrived'), 1700);
  };

  const time = getCountdown(mission.now);
  return (
    <SafeAreaView style={styles.screen}>
      <Starfield />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <MissionStage width={width} parts={mission.parts} collected={mission.collected} launching={mission.phase === 'launching'} onCollect={mission.collect} onLaunch={launch} />
        {mission.phase === 'arrived' && <ArrivalContent {...time} />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#050816' },
  scroll: { paddingBottom: 80 },
});
