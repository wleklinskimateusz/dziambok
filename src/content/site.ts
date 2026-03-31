/** Wszystkie teksty interfejsu i treści strony (PL). Zmień dane kontaktowe poniżej. */

export const site = {
  brand: "Angielski z Dziambokiem",
  nav: [
    { id: "start", label: "Start" },
    { id: "dla-kogo", label: "Dla kogo" },
    { id: "oferta", label: "Oferta" },
    { id: "o-mnie", label: "O mnie" },
    { id: "kontakt", label: "Kontakt" },
  ] as const,
  hero: {
    title: "Angielski, który realnie pomaga w liceum i na maturze",
    subtitle:
      "Indywidualne lekcje dla uczniów klas 7–8 i szkół średnich: matura podstawowa i rozszerzona, konwersacja, pewność na egzaminie. Prowadzę także zajęcia z angielskiego prawniczego (Legal English) — jako absolwent polskiej uczelni prawniczej łączę język z kontekstem prawa.",
    ctaPrimary: "Umów lekcję próbną",
    ctaSecondary: "Zobacz ofertę",
  },
  audience: {
    title: "Dla kogo są zajęcia",
    intro:
      "Pracuję przede wszystkim z młodzieżą szkół średnich — od wsparcia w bieżącym materiale po świadome przygotowanie do matury. Równolegle pomagam osobom, którym potrzebny jest angielski w świecie prawa i administracji.",
    cards: [
      {
        title: "Liceum i technikum",
        text: "Gramatyka w kontekście, rozumienie tekstów, wypowiedź pisemna i ustna — zgodnie z programem i Twoimi celami.",
      },
      {
        title: "Matura podstawowa i rozszerzona",
        text: "Ćwiczenia pod egzamin: struktura zadań, czas, strategie — bez zbędnego stresu.",
      },
      {
        title: "Konwersacja i pewność siebie",
        text: "Swobodna rozmowa po angielsku, poprawa wymowy i płynności wypowiedzi.",
      },
      {
        title: "Legal English",
        text: "Terminologia prawnicza, dokumenty, studia na kierunkach prawniczych lub praca w środowisku międzynarodowym — zajęcia dopasowane do Twojego poziomu.",
      },
    ],
  },
  offers: {
    title: "Oferta",
    intro:
      "Wszystkie formy można dostosować do trybu online lub stacjonarnie — ustalamy to przy pierwszym kontakcie.",
    items: [
      {
        title: "Lekcje indywidualne",
        description:
          "100% uwagi, tempo i tematy pod Ciebie — od uzupełniania szkolnych zaległości po maturę.",
        priceHint: "od 80 zł/h",
      },
      {
        title: "Legal English",
        description:
          "Osobna ścieżka: język angielski w kontekście prawa, umów i komunikacji zawodowej.",
        priceHint: "wycena indywidualna",
      },
    ],
  },
  about: {
    title: "O mnie",
    paragraphs: [
      "Uczę angielskiego z myślą o realnych potrzebach ucznia — szkoła, matura, a potem studia i praca. Stawiam na jasne cele, regularność i atmosferę, w której można zadawać pytania bez obaw.",
      "Ukończyłem studia prawnicze na polskiej uczelni, co przy nauczaniu angielskiego prawniczego daje solidne rozumienie polskiego i międzynarodowego kontekstu prawnego — nie tylko „słówka z listy”, lecz także sens instytucji i dokumentów.",
    ],
  },
  contact: {
    title: "Kontakt",
    intro:
      "Napisz kilka słów o klasie, poziomie i tym, czego potrzebujesz — odpowiem z propozycją terminu i formy zajęć.",
    email: "kontakt@twoja-domena.pl",
    phone: "+48 000 000 000",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    areaLabel: "Zajęcia",
    area: "Online oraz stacjonarnie — napisz po szczegóły.",
    formName: "Imię",
    formEmail: "Adres e-mail",
    formMessage: "Wiadomość",
    formSubmit: "Wyślij zapytanie",
    formNote:
      "Wiadomość otwiera program pocztowy (mailto). Jeśli wolisz, skopiuj adres e-mail i napisz z własnej skrzynki.",
  },
  footer: {
    copyright: "Wszelkie prawa zastrzeżone.",
  },
} as const;

export type NavItem = (typeof site.nav)[number];
