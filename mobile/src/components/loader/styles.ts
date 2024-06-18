import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.55)',
  },
  overlayIndicator: { alignSelf: 'center', marginTop: 30 },
  loadingText: {
    alignSelf: 'center',
    fontSize: 17,
    color: 'white',
  },
  circularLoaderParentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  circularLoaderContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: 'white',
  },
  circularLoaderText: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
