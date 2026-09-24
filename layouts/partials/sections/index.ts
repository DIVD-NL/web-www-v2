import { ArticleCardsSection } from './article-cards';
import { Faq } from './faq';
import { HeroSection } from './hero';
import { HighlightedCasesSection } from './highlighted-cases';
import { PartnerSection } from './partner';
import { SliderSection } from './slider';
import { TextDisplaySection } from './text-display';
import { TwoColumnsSection } from './two-columns';

export const landingPageSections = [
  ArticleCardsSection,
  HeroSection,
  // TEMPORARY: Support the time-limited Legit notice's standalone copy block.
  TextDisplaySection,
  HighlightedCasesSection,
  PartnerSection,
  TwoColumnsSection,
  SliderSection
];

export const articleSections = [Faq];
