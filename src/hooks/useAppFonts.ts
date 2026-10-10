import { useFonts } from 'expo-font';
import { fontAssets } from '../constants/fonts';

export default function useAppFonts() {
  const [loaded, error] = useFonts(fontAssets);
  return loaded || !!error;
}
