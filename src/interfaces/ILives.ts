export interface ILives {
  response: ILive[];
}
export interface ILive {
  fixture: Fixture;
  league: League;
  teams: Goals;
  goals: Goals;
  score: Score;
}
export interface Fixture {
  id: number;
  referee: string;
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
  elapsed: number | null;
}
export interface Venue {
  id: number;
  name: string;
  city: string;
}
export interface Goals {
  home: AwayClass;
  away: AwayClass;
}
export interface AwayClass {
  id: number | null;
  name: string | null;
  logo: string | null;
  winner: boolean | null;
}
export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}
export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}
