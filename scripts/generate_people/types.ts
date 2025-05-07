export const KNOWN_TEAMS = [
  'Board',
  'Management',
  'DIVD-CSIRT',
  'Research & Development',
  'IT Services',
  'People & Culture',
  'Communications',
  'Governance, Risk & Compliance (GRC)',
  'Project Office',
  'Advisory Board',
  'Ethics Committee',
  'Confidentiality Officers',
] as const;

export type TeamName = (typeof KNOWN_TEAMS)[number];

export interface CsirtCase {
  id: string;
  title: string;
  start: string;
  end: string;
  status: string;
  url: string;
}

export interface CsirtPost {
  title: string;
  date: string;
  url: string;
}

export interface CveRecord {
  id: string;
  title: string;
  full_title: string;
  url: string;
}

export interface Config {
  readonly spreadsheetId: string;
  readonly outputDir: string;
  readonly imagesDir: string;
  readonly teamsIndexPath: string;
  readonly formMapping: FormFieldMapping;
  readonly csirtDataUrl?: string;
}

export interface FormFieldMapping {
  headerNames: {
    timestamp: string;
    email: string;
    consent: string;
    firstName: string;
    lastName: string;
    about: string;
    teams: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    website: string;
    mastodon: string;
    bluesky: string;
    profilePicture: string;
    role: string;
    picturePreference: string;
    placeholderChoice: string;
  };
  validation: {
    consent: { validValues: string[]; transform?: (value: string) => string };
    teams: { separator: string; validValues: readonly string[] };
  };
}

export const DEFAULT_FORM_MAPPING: FormFieldMapping = {
  headerNames: {
    timestamp: 'Timestamp',
    email: 'Email Address',
    consent: 'I agree that the information I entered in this form will be visible publicly on https://divd.nl',
    firstName: 'First name',
    lastName: 'Last name',
    about: 'About you',
    teams: 'Select your team(s)',
    role: 'Role',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    facebook: 'Facebook',
    website: 'Website (your blog, etc)',
    mastodon: 'Mastodon',
    bluesky: 'Bluesky',
    profilePicture: 'Profile picture',
    picturePreference: 'Bring Your Own Picture?',
    placeholderChoice: 'Which placeholder would you prefer?',
  },
  validation: {
    consent: { validValues: ['yes', 'i agree'], transform: (value: string) => value.toLowerCase() },
    teams: { separator: ',', validValues: KNOWN_TEAMS },
  },
};

export interface PersonData {
  timestamp: string;
  email: string;
  consent: string;
  firstName: string;
  lastName: string;
  about: string;
  teams: TeamName[];
  socialLinks: {
    LinkedIn?: string;
    Twitter?: string;
    Facebook?: string;
    Website?: string;
    Mastodon?: string;
    Bluesky?: string;
  };
  profilePicture?: string;
  role: string;
  picturePreference?: string;
  placeholderChoice?: string;
}

export interface TeamData {
  title: TeamName;
  members: string[];
}

export interface TeamsIndex {
  teams: TeamData[];
}
