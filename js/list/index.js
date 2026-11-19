import { day1Vocabulary } from './day1.js';

// Hanya data hari yang benar-benar tersedia dan didaftarkan yang akan muncul.
// Saat Day 2 tersedia, import day2Vocabulary dari './day2.js' lalu tambahkan
// satu objek registrasi baru dengan pola yang sama.
export const availableDays = [
  {
    id: 'day1',
    label: 'Day 1',
    title: 'Kosakata Hari 1',
    vocabulary: day1Vocabulary
  }
];

export function getDayById(dayId) {
  return availableDays.find((day) => day.id === dayId) ?? null;
}

export function getAllAvailableVocabulary() {
  return availableDays.flatMap((day) => day.vocabulary);
}
