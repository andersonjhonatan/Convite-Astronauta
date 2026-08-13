# Missão Espacial do Miguel — Expo

Convite digital premium e interativo construído com React Native + Expo Router, pensado para Android, iOS e Web com uma única base.

## Experiência
- abertura estilo transmissão espacial;
- contagem regressiva de decolagem;
- mini-missão com 3 módulos arrastáveis;
- feedback háptico em dispositivos compatíveis;
- lançamento do foguete;
- revelação das informações da festa;
- contador até o evento;
- localização e RSVP completo por WhatsApp (nome, presença/ausência, acompanhantes e mensagem opcional);
- layout mobile-first.

## Stack
- Expo SDK 57
- React Native 0.86
- Expo Router
- React Native Gesture Handler
- React Native Reanimated
- Expo Haptics

## Rodar localmente
```bash
npm install
npx expo start
```

Para Web:
```bash
npm run web
```

Exportação estática:
```bash
npm run export:web
```

O conteúdo exportado ficará em `dist/` e pode ser hospedado no EAS Hosting, Vercel ou outro serviço de hospedagem estática.
