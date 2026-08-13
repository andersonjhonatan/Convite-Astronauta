import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Linking, Pressable, Text, TextInput, View } from 'react-native';
import { PrimaryButton } from './SpaceUi';
import { rsvpStyles as styles } from './rsvpStyles';

type Attendance = 'sim' | 'nao' | null;

export function RsvpCard() {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [companions, setCompanions] = useState(0);
  const [guestMessage, setGuestMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const submit = async () => {
    const name = guestName.trim();
    if (!name) return setError('Informe seu nome para registrar a resposta da missão.');
    if (!attendance) return setError('Selecione se você poderá participar da festa.');

    setError('');
    const text = [
      '🚀 *CONFIRMAÇÃO — MISSÃO MIGUEL 06*',
      '',
      `👤 Convidado: ${name}`,
      attendance === 'sim' ? '✅ Presença: SIM, estarei na missão' : '❌ Presença: NÃO poderei participar',
      attendance === 'sim' ? `👥 Acompanhantes além de mim: ${companions}` : '👥 Acompanhantes: 0',
      guestMessage.trim() ? `💌 Mensagem para Miguel: ${guestMessage.trim()}` : '💌 Mensagem para Miguel: —',
    ].join('\n');

    setSent(true);
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
    await Linking.openURL(`https://wa.me/5587999992026?text=${encodeURIComponent(text)}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>CONFIRME SEU EMBARQUE</Text>
      <Text style={styles.title}>A tripulação precisa da sua resposta.</Text>
      <Text style={styles.copy}>Preencha os dados abaixo. Sua resposta será enviada para a central da missão pelo WhatsApp.</Text>

      <View style={styles.group}>
        <Text style={styles.label}>SEU NOME *</Text>
        <TextInput value={guestName} onChangeText={(v) => { setGuestName(v); setError(''); }} placeholder="Digite seu nome" placeholderTextColor="#61758E" style={styles.input} autoCapitalize="words" maxLength={60} />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>VOCÊ VAI PARTICIPAR? *</Text>
        <View style={styles.row}>
          <Pressable onPress={() => { setAttendance('sim'); setError(''); setSent(false); }} style={[styles.choice, attendance === 'sim' && styles.choiceYes]}>
            <Text style={[styles.choiceText, attendance === 'sim' && styles.yesText]}>✓ SIM, EU VOU</Text>
          </Pressable>
          <Pressable onPress={() => { setAttendance('nao'); setCompanions(0); setError(''); setSent(false); }} style={[styles.choice, attendance === 'nao' && styles.choiceNo]}>
            <Text style={[styles.choiceText, attendance === 'nao' && styles.noText]}>× NÃO PODEREI IR</Text>
          </Pressable>
        </View>
      </View>

      {attendance === 'sim' && (
        <View style={styles.group}>
          <Text style={styles.label}>QUANTAS PESSOAS VÃO COM VOCÊ?</Text>
          <Text style={styles.hint}>Informe apenas os acompanhantes, sem contar você.</Text>
          <View style={styles.counterRow}>
            <Pressable onPress={() => setCompanions((v) => Math.max(0, v - 1))} style={styles.counterButton}><Text style={styles.counterButtonText}>−</Text></Pressable>
            <View style={styles.counterValue}><Text style={styles.counterNumber}>{companions}</Text><Text style={styles.counterCaption}>{companions === 1 ? 'ACOMPANHANTE' : 'ACOMPANHANTES'}</Text></View>
            <Pressable onPress={() => setCompanions((v) => Math.min(20, v + 1))} style={styles.counterButton}><Text style={styles.counterButtonText}>+</Text></Pressable>
          </View>
        </View>
      )}

      <View style={styles.group}>
        <Text style={styles.label}>MENSAGEM PARA O MIGUEL <Text style={styles.optional}>(OPCIONAL)</Text></Text>
        <TextInput value={guestMessage} onChangeText={setGuestMessage} placeholder="Ex.: Miguel, desejo uma festa incrível! 🚀" placeholderTextColor="#61758E" style={[styles.input, styles.message]} multiline textAlignVertical="top" maxLength={300} />
        <Text style={styles.count}>{guestMessage.length}/300</Text>
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}
      {sent && <Text style={styles.success}>✓ Resposta preparada. Finalize o envio no WhatsApp.</Text>}
      <PrimaryButton label="ENVIAR RESPOSTA DA MISSÃO" onPress={submit} />
      <Text style={styles.privacy}>Ao tocar em enviar, o WhatsApp será aberto com sua resposta pronta. Você poderá revisar antes de enviar.</Text>
    </View>
  );
}
