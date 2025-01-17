export interface Event {
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  date: string;
  time: string;
}

export interface NavItem {
  label: string;
  labelPt: string;
  href: string;
}

export type Language = 'en' | 'pt';