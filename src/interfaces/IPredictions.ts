export interface IPredictions {
  get: string;
  parameters: IParameters;
  errors: any[];
  results: number;
  paging: IPaging;
  response: IPrediction[];
}

export interface IPaging {
  current: number;
  total: number;
}

export interface IParameters {
  fixture: string;
}

export interface IPrediction {
  predictions: Predictions;
  league: H2HLeague;
  teams: Teams;
  comparison: Comparison;
  h2h: H2H[];
}

export interface Comparison {
  form: Teams;
  att: Teams;
  def: Teams;
  poisson_distribution: Teams;
  h2h: Teams;
  goals: Teams;
  total: Teams;
}

export interface Biggest {
  streak: Streak;
  wins: Teams;
  loses: Teams;
  goals: BiggestGoals;
}

export interface AwayLeague {
  form: string;
  fixtures: Fixtures;
  goals: LeagueGoals;
  biggest: Biggest;
  clean_sheet: CleanSheet;
  failed_to_score: CleanSheet;
  penalty: Penalty;
  lineups: any[];
  cards: Cards;
}

export interface AwayClass {
  id: number;
  name: string;
  logo: string;
  winner?: boolean | null;
  last_5?: Last5;
  league?: AwayLeague;
}

export interface Teams {
  home: AwayClass | null | string;
  away: AwayClass | null | string;
}

export interface BiggestGoals {
  for: FulltimeClass;
  against: FulltimeClass;
}

export interface FulltimeClass {
  home: number;
  away: number;
}

export interface Streak {
  wins: number;
  draws: number;
  loses: number;
}

export interface Cards {
  yellow: { [key: string]: Missed };
  red: { [key: string]: Missed };
}

export interface Missed {
  total: number | null;
  percentage: null | string;
}

export interface CleanSheet {
  home: number;
  away: number;
  total: number;
}

export interface Fixtures {
  played: CleanSheet;
  wins: CleanSheet;
  draws: CleanSheet;
  loses: CleanSheet;
}

export interface LeagueGoals {
  for: FluffyAgainst;
  against: FluffyAgainst;
}

export interface FluffyAgainst {
  total: CleanSheet;
  average: Average;
  minute: { [key: string]: Missed };
}

export interface Average {
  home: string;
  away: string;
  total: string;
}

export interface Penalty {
  scored: Missed;
  missed: Missed;
  total: number;
}

export interface Last5 {
  form: string;
  att: string;
  def: string;
  goals: Last5_Goals;
}

export interface Last5_Goals {
  for: PurpleAgainst;
  against: PurpleAgainst;
}

export interface PurpleAgainst {
  total: number;
  average: string;
}

export interface H2H {
  fixture: Fixture;
  league: H2HLeague;
  teams: Teams;
  goals: FulltimeClass;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: null | string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
}

export interface Venue {
  id: number | null;
  name: string;
  city: string | null;
}

export interface H2HLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round?: string;
}

export interface Score {
  halftime: FulltimeClass;
  fulltime: FulltimeClass;
  extratime: Teams;
  penalty: Teams;
}

export interface Predictions {
  winner: Winner;
  win_or_draw: boolean;
  under_over: string;
  goals: Teams;
  advice: string;
  percent: Percent;
}

export interface Percent {
  home: string;
  draw: string;
  away: string;
}

export interface Winner {
  id: number;
  name: string;
  comment: string;
}
