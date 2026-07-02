import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGUAGES = ['en', 'pl'] as const;
export type Language = (typeof LANGUAGES)[number];

const STORAGE_KEY = 'cocoon.lang';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        cocoons: 'Cocoons',
        about: 'About us',
        invest: 'Invest with us',
        contact: 'Contact us',
        reserve: 'RESERVE ME',
      },
      hero: {
        title: 'COCOON: COLIVING HOMES IN WARSAW',
        subtitle:
          'DISCOVER YOUR COLIVING PLACE — WHERE CONNECTION AND WORK-LIFE BALANCE COME NATURALLY',
      },
      booking: {
        room: 'Room',
        selectRoom: 'Select a Room',
        cocooners: 'Cocooners',
        adult: 'Adult',
        adults: 'Adults',
        startDate: 'Booking start date',
        selectDate: 'Select date',
        period: 'Booking period',
        month_one: '{{count}} month',
        month_other: '{{count}} months',
      },
      discover: {
        title: 'DISCOVER YOUR COLIVING PLACE',
        subtitle: 'WHERE CONNECTION AND WORK-LIFE BALANCE COME NATURALLY',
        body:
          "Since 2003, we've been turning spaces into shared homes for remote workers, creatives, and young professionals on the move. Private rooms. Shared energy. Flexible leases. Ultra-fast Wi-Fi. Whether you're Zooming at 9 or brainstorming at midnight — Cocoon is your base, your vibe, your community.",
        essentials: 'ESSENTIALS',
        comfort: 'COMFORT',
        pamper: 'PAMPER ME',
      },
      pages: {
        cocoons: 'Cocoons',
        about: 'Cocoon — Who we are',
        invest: 'Invest with us',
      },
      perMonth: 'Starting from {{price}} {{currency}} per month',
    },
  },
  pl: {
    translation: {
      nav: {
        home: 'Strona główna',
        cocoons: 'Kokony',
        about: 'O nas',
        invest: 'Zainwestuj z nami',
        contact: 'Kontakt',
        reserve: 'REZERWUJĘ',
      },
      hero: {
        title: 'COCOON: DOMY COLIVINGOWE W WARSZAWIE',
        subtitle:
          'ODKRYJ SWOJE MIEJSCE DO COLIVINGU — GDZIE RELACJE I RÓWNOWAGA MIĘDZY PRACĄ A ŻYCIEM PRZYCHODZĄ NATURALNIE',
      },
      booking: {
        room: 'Pokój',
        selectRoom: 'Wybierz pokój',
        cocooners: 'Kokonerzy',
        adult: 'Dorosły',
        adults: 'Dorosłych',
        startDate: 'Data rozpoczęcia rezerwacji',
        selectDate: 'Wybierz datę',
        period: 'Okres rezerwacji',
        month_one: '{{count}} miesiąc',
        month_few: '{{count}} miesiące',
        month_many: '{{count}} miesięcy',
        month_other: '{{count}} miesiąca',
      },
      discover: {
        title: 'ODKRYJ SWOJE MIEJSCE DO COLIVINGU',
        subtitle: 'GDZIE RELACJE I RÓWNOWAGA PRACA–ŻYCIE PRZYCHODZĄ NATURALNIE',
        body:
          'Od 2003 roku zamieniamy przestrzenie we wspólne domy dla osób pracujących zdalnie, twórców i młodych profesjonalistów w drodze. Prywatne pokoje. Wspólna energia. Elastyczne umowy. Superszybkie Wi-Fi. Niezależnie od tego, czy masz call o 9, czy burzę mózgów o północy — Cocoon to Twoja baza, Twój klimat, Twoja społeczność.',
        essentials: 'PODSTAWY',
        comfort: 'KOMFORT',
        pamper: 'ROZPIESZCZANIE',
      },
      pages: {
        cocoons: 'Kokony',
        about: 'Cocoon — Kim jesteśmy',
        invest: 'Zainwestuj z nami',
      },
      perMonth: 'Od {{price}} {{currency}} miesięcznie',
    },
  },
};

const stored =
  (typeof window !== 'undefined' &&
    (localStorage.getItem(STORAGE_KEY) as Language | null)) ||
  'en';

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGES.includes(stored as Language) ? stored : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
