import { ProjectEnergyCollection } from '../content/energie/collection';
import { HomeCollection } from '../layouts/collection';
import { Collection as ArticlesCollection } from '../layouts/newsroom/collection';
import { Collection as DocumentsCollection } from './documents';
import { PeopleCollection } from '../layouts/people/collection';
import { HackedCollection } from '../layouts/hacked/collection';
import { ContributeCollection } from '../layouts/contribute/collection';
import { LegalCollection, PagesCollection } from '../layouts/_default/collection';
import { FaqCollection } from '../layouts/faq/collection';
import { WhatWeDoCollection } from '../layouts/what-we-do/collection';
import { WhoWeAreCollection } from '../layouts/who-we-are/collection';

export default [
  HomeCollection,
  ArticlesCollection,
  DocumentsCollection,
  PeopleCollection,
  ProjectEnergyCollection,
  HackedCollection,
  ContributeCollection,
  WhatWeDoCollection,
  WhoWeAreCollection,
  FaqCollection,
  LegalCollection,
  PagesCollection,
];
