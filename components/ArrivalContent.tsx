import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { RsvpCard } from './RsvpCard';

type Props = { days: number; hours: number; minutes: number; seconds: number };

export function ArrivalContent({ days, hours, minutes, seconds }: Props) {
  return (
    <>
      <View style={styles.arrivalCard}>
        <Text style={styles.planet}>🪐</Text>
        <Text style={styles.kicker}>DESTINO ALCANÇADO</Text>
        <Text style={styles.title}>Planeta da Festa</Text>
        <Text style={styles.copy}>Missão concluída com sucesso. Agora você tem acesso às coordenadas oficiais da comemoração dos 6 anos do Miguel.</Text>
      </View>

      <View style={styles.infoGrid}>
        {[['📅', 'DATA DE LANÇAMENTO', '21 de novembro de 2026'], ['🕡', 'HORÁRIO DA MISSÃO', '18h30'], ['📍', 'BASE ESPACIAL', 'Espaço Kids Galaxy'], ['👨‍🚀', 'COMANDANTE', 'Miguel • 6 anos']].map(([icon, label, value]) => (
          <View key={label} style={styles.infoCard}>
            <Text style={styles.infoIcon}>{icon}</Text>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.timerCard}>
        <Text style={styles.timerKicker}>CONTAGEM PARA O LANÇAMENTO</Text>
        <View style={styles.timerRow}>
          {[[days, 'DIAS'], [hours, 'HORAS'], [minutes, 'MIN'], [seconds, 'SEG']].map(([value, label]) => (
            <View key={label} style={styles.timeUnit}>
              <Text style={styles.timeValue}>{String(value).padStart(2, '0')}</Text>
              <Text style={styles.timeLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.coordinatesCard}>
        <Text style={styles.eyebrow}>COORDENADAS DA MISSÃO</Text>
        <Text style={styles.cardTitle}>Espaço Kids Galaxy</Text>
        <Text style={styles.cardCopy}>Ibimirim, Pernambuco</Text>
        <Pressable onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=Ibimirim%20Pernambuco')} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>VER COORDENADAS</Text>
        </Pressable>
      </View>

      <RsvpCard />

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>MISSÃO MIGUEL 06</Text>
        <Text style={styles.footerCopy}>Sua presença vai tornar essa aventura ainda mais inesquecível.</Text>
        <View style={styles.footerLine} />
        <Text style={styles.footerDev}>Desenvolvido por Anderson Jhonatan da K2 Tech</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  arrivalCard: { width: '92%', maxWidth: 660, alignSelf: 'center', marginTop: 18, padding: 28, borderRadius: 28, alignItems: 'center', backgroundColor: 'rgba(26,26,67,0.85)', borderWidth: 1, borderColor: 'rgba(126,111,255,0.32)' },
  planet: { fontSize: 68 },
  kicker: { marginTop: 12, color: '#B9A7FF', fontSize: 10, fontWeight: '900', letterSpacing: 2 },
  title: { marginTop: 8, color: '#FFFFFF', fontSize: 34, fontWeight: '900', letterSpacing: -0.7, textAlign: 'center' },
  copy: { marginTop: 12, color: '#A7B7CC', fontSize: 14, lineHeight: 22, textAlign: 'center', maxWidth: 500 },
  infoGrid: { width: '92%', maxWidth: 660, alignSelf: 'center', marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  infoCard: { width: '48%', minHeight: 135, padding: 18, borderRadius: 20, backgroundColor: 'rgba(10,20,46,0.9)', borderWidth: 1, borderColor: 'rgba(94,223,255,0.17)' },
  infoIcon: { fontSize: 25 },
  infoLabel: { marginTop: 12, color: '#66DCF6', fontSize: 8, fontWeight: '900', letterSpacing: 1.2 },
  infoValue: { marginTop: 6, color: '#FFFFFF', fontSize: 15, lineHeight: 20, fontWeight: '800' },
  timerCard: { width: '92%', maxWidth: 660, alignSelf: 'center', marginTop: 16, padding: 22, borderRadius: 22, backgroundColor: 'rgba(10,20,46,0.9)', borderWidth: 1, borderColor: 'rgba(94,223,255,0.17)' },
  timerKicker: { color: '#65DEF8', fontSize: 9, fontWeight: '900', letterSpacing: 1.7, textAlign: 'center' },
  timerRow: { marginTop: 18, flexDirection: 'row', justifyContent: 'space-between' },
  timeUnit: { width: '23%', alignItems: 'center' },
  timeValue: { color: '#FFFFFF', fontSize: 27, fontWeight: '900' },
  timeLabel: { marginTop: 3, color: '#697F98', fontSize: 7, fontWeight: '900', letterSpacing: 1 },
  coordinatesCard: { width: '92%', maxWidth: 660, alignSelf: 'center', marginTop: 16, padding: 24, borderRadius: 22, backgroundColor: 'rgba(10,20,46,0.9)', borderWidth: 1, borderColor: 'rgba(94,223,255,0.17)' },
  eyebrow: { color: '#6FE8FF', fontSize: 9, fontWeight: '900', letterSpacing: 1.8 },
  cardTitle: { marginTop: 8, color: '#FFFFFF', fontSize: 24, lineHeight: 29, fontWeight: '900' },
  cardCopy: { marginTop: 8, color: '#9DAFC4', fontSize: 14, lineHeight: 21 },
  secondaryButton: { marginTop: 18, borderWidth: 1, borderColor: '#5EDFFF', minHeight: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  secondaryButtonText: { color: '#72E7FF', fontSize: 11, fontWeight: '900', letterSpacing: 1.2 },
  footer: { width: '92%', maxWidth: 660, alignSelf: 'center', paddingVertical: 48, alignItems: 'center' },
  footerTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '900', letterSpacing: 1.6 },
  footerCopy: { marginTop: 8, color: '#71839A', fontSize: 12, textAlign: 'center' },
  footerLine: { marginTop: 24, width: 54, height: 1, backgroundColor: '#2C4059' },
  footerDev: { marginTop: 16, color: '#53677E', fontSize: 9, textAlign: 'center' },
});
