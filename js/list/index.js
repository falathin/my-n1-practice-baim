
import { day1Vocabulary } from './day1.js';
import { day2Vocabulary } from './day2.js';

// Hanya data hari yang benar-benar tersedia dan didaftarkan yang akan muncul.
export const availableDays = [
  {
    id: 'day1',
    label: 'Day 1',
    title: 'Kosakata Hari 1',
    vocabulary: day1Vocabulary
  },
  {
    id: 'day2',
    label: 'Day 2',
    title: 'Kosakata Hari 2',
    vocabulary: day2Vocabulary
  }
];

export function getDayById(dayId) {
  return availableDays.find((day) => day.id === dayId) ?? null;
}

export function getAllAvailableVocabulary() {
  return availableDays.flatMap((day) => day.vocabulary);
}
