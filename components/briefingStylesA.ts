export const briefingStylesA = {
  fullScreen: { flex: 1, backgroundColor: '#050816' },
  nebulaOne: { position: 'absolute', width: 300, height: 300, borderRadius: 160, backgroundColor: 'rgba(84,45,255,0.16)', top: -80, right: -120 },
  nebulaTwo: { position: 'absolute', width: 280, height: 280, borderRadius: 150, backgroundColor: 'rgba(0,214,255,0.10)', bottom: -80, left: -130 },
  wrap: { flex: 1, width: '100%', maxWidth: 620, alignSelf: 'center', paddingHorizontal: 24, paddingVertical: 32, alignItems: 'center', justifyContent: 'center' },
  signal: { marginTop: 22, color: '#B5C7DB', fontSize: 10, fontWeight: '800', letterSpacing: 2.6 },
  avatarRing: { marginTop: 22, width: 108, height: 108, borderRadius: 54, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(93,222,255,0.08)', borderWidth: 1, borderColor: 'rgba(93,222,255,0.45)' },
} as const;
