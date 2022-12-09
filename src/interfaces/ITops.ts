export interface ITops {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: ITop[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface ITop {
  player: Player;
  statistics: Statistic[];
}

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: null | string;
  weight: null | string;
  injured: boolean;
  photo: string;
}

export interface Birth {
  date: string;
  place: null | string;
  country: string;
}

export interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

export interface Dribbles {
  attempts: number;
  success: number;
  past: null;
}

export interface Duels {
  total: number;
  won: number;
}

export interface Fouls {
  drawn: number;
  committed: number;
}

export interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number: null;
  position: string;
  rating: string;
  captain: boolean;
}

export interface Goals {
  total: number;
  conceded: number;
  assists: number | null;
  saves: null;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

export interface Penalty {
  won: null;
  commited: null;
  scored: number;
  missed: number;
  saved: null;
}

export interface Shots {
  total: number;
  on: number;
}

export interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

export interface Tackles {
  total: number;
  blocks: number | null;
  interceptions: number | null;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
