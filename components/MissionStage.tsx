import { Text, View } from 'react-native';
import { DraggablePart } from './DraggablePart';
import { Pill, PrimaryButton } from './SpaceUi';
import { missionStylesA as styles } from './missionStylesA';

type PartKey = 'motor' | 'capsula' | 'combustivel';

type Props = {
  width: number;
  parts: Record<PartKey, boolean>;
  collected: number;
  launching: boolean;
  onCollect: (key: PartKey) => void;
  onLaunch: () => void;
};

export function MissionStage({ width, parts, collected, launching, onCollect, onLaunch }: Props) {
  const complete = collected === 3;
  return (
    <View style={[styles.section, { minHeight: width < 500 ? 610 : 560 }]}>
      <Pill>MISSÃO MIGUEL 06</Pill>
      <Text style={styles.kicker}>DESTINO • PLANETA DA FESTA</Text>
      <Text style={styles.title}>Tripulação, precisamos completar a nave.</Text>
      <Text style={styles.copy}>Arraste as três peças para cima, em direção ao foguete. Cada módulo instalado aproxima você do destino.</Text>

      <View style={styles.rocketZone}>
        <View style={[styles.rocketGlow, { opacity: launching ? 0.75 : 0.3 }]} />
        <Text style={{ fontSize: 82, transform: [{ translateY: launching ? -34 : 0 }] }}>🚀</Text>
        <Text style={{ marginTop: 5, color: '#7FE8FF', fontSize: 9, fontWeight: '900', letterSpacing: 1, textAlign: 'center' }}>
          {complete ? 'SISTEMA 100% • PRONTO PARA LANÇAR' : `SISTEMA ${Math.round((collected / 3) * 100)}% • ${collected}/3 MÓDULOS`}
        </Text>
      </View>

      <View style={{ marginTop: 12, width: '100%', maxWidth: 430, height: 7, borderRadius: 20, backgroundColor: '#15243A' }}>
        <View style={{ height: '100%', borderRadius: 20, backgroundColor: '#5EDFFF', width: `${(collected / 3) * 100}%` }} />
      </View>

      <View style={{ marginTop: 22, width: '100%', flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
        <DraggablePart icon="⚙️" label="MOTOR" collected={parts.motor} onCollect={() => onCollect('motor')} />
        <DraggablePart icon="🛰️" label="CÁPSULA" collected={parts.capsula} onCollect={() => onCollect('capsula')} />
        <DraggablePart icon="⚡" label="ENERGIA" collected={parts.combustivel} onCollect={() => onCollect('combustivel')} />
      </View>

      <PrimaryButton label={complete ? 'DECOLAR AGORA' : `INSTALE OS MÓDULOS • ${collected}/3`} onPress={onLaunch} disabled={!complete || launching} />
      {launching && <Text style={{ marginTop: 15, color: '#F5D06F', fontSize: 9, fontWeight: '900', letterSpacing: 1.3, textAlign: 'center' }}>PROPULSORES ATIVOS • ROTA CALCULADA • DECOLAGEM...</Text>}
    </View>
  );
}
