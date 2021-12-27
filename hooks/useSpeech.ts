import { Speech, speeches } from '../data/speeches'

export const useSpeech = (id: string): Speech | undefined => {
  const arr = Object.values(speeches).flat()
  const speech = arr.find((m: Speech) => m.id === id)
  return speech
}
