interface ICategories {
  kills: number;
  deaths: number;
  gibs: number;
  suicides: number;
  teamkills: number;
  headshots: number;
  damagegiven: number;
  damagereceived: number;
  damageteam: number;
  hits: number;
  shots: number;
  accuracy: number;
  revives: number;
  ammogiven: number;
  healthgiven: number;
  poisoned: number;
  knifekills: number;
  killpeak: number;
  efficiency: number;
  score: number;
  dyn_planted: number;
  dyn_defused: number;
  obj_captured: number;
  obj_destroyed: number;
  obj_returned: number;
  obj_taken: number;
}

export interface ILeaderItem {
  real_name: string;
  value: number;
  guid: string;
  games: number;
}

export interface IMatch {
  match_id: string;
  round: string;
  round_start: string;
  round_end: string;
  map: string;
  time_limit: string;
  allies_cycle: string;
  axis_cycle: string;
  winner: string;
  date_time_human: string;
  server_name: string;
  jsonGameStatVersion: string;
  type: string;
  match_round_id: string;
  teams: string;
}

export interface IMatchesAPIParams {
  queryKey: any;
}

interface IElo {
  elo: number;
  games: number;
}

interface IAggStats {
  kills: number;
  killpeak: number;
  gibs: number;
  obj_returned: number;
  accuracy: number;
  obj_captured: number;
  damageteam: number;
  knifekills: number;
  score: number;
  headshots: number;
  healthgiven: number;
  dyn_planted: number;
  games: number;
  damagegiven: number;
  dyn_defused: number;
  deaths: number;
  obj_taken: number;
  efficiency: number;
  poisoned: number;
  revives: number;
  hits: number;
  teamkills: number;
  ammogiven: number;
  suicides: number;
  damagereceived: number;
  shots: number;
  obj_destroyed: number;
}

export interface IRecentPlayer {
  last_seen: string;
  real_name: string;
  alias: string;
  last_match: number;
  guid: string;
}

export interface IPlayerDetails {
  elos: Record<string, IElo>;
  kdr: Record<string, number>;
  acc: Record<string, number>;
  real_name: string;
  last_seen: string;
  aggstats: Record<string, Record<string, number>>;
  aggwstats: {
    Knife: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    "MP-40": {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Dynamite: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Grenade: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Airstrike: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Artillery: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Thompson: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
    Mauser: {
      kills: number;
      hits: number;
      games: number;
      headshots: number;
      shots: number;
      deaths: number;
    };
  };
  player_guid: string;
}

export interface IPlayerSearchResult {
  real_name: string;
  last_seen: string;
  guid: string;
  frequent_region: string;
}

export interface IPlayerAlias {
  guid: string;
  real_name: string;
  alias: string;
  last_match: string;
  last_seen: string;
}

export interface IPlayerStats {
  alias: string;
  realName: string;
  elo: number;
  match_id: string;
  team: string;
  type: string;
  start_time: number;
  num_rounds: number;
  categories: ICategories;
  jsonGameStatVersion: string;
}

export interface IPlayerStatsDictionary {
  [playerId: string]: IPlayerStats;
}

export interface IEloProgress {
  value: number;
  elo: number;
  match_id: number;
  real_name: string;
}

export interface IServersAPIParams {
  queryKey: any;
}

export interface IServerDetail {
  server_name: string;
  region: "na" | "eu" | "unk" | "sa";
  last_submission: string;
  submissions: number;
  IP: string;
  data: {
    unixtime: string;
    jsonGameStatVersion: string;
    serverName: string;
    serverIP: string;
    gameVersion: string;
    g_customConfig: string;
    g_gametype: string;
    g_gameStatslog: string;
  };
}

export interface IServerSimple {
  server_name: string;
  region: "na" | "eu" | "sa" | "unk";
  last_submission: string;
  submissions: number;
  IP: string;
}

export interface IStatsResponse {
  statsall: IPlayerStatsDictionary[];
  match_id: string;
  type: string;
  match_summary: iMatchSummary;
  elos: IElos;
  classes: IClasses;
  awards: IAwardSummary;
  top_feuds: IFeud[];
}

export interface iMatchSummary {
  duration: number;
  duration_nice: string;
  finish_human: string;
  games: number;
  results: iGameResultsObject;
}

export interface IElos {
  [guid: string]: IPlayerNameElo;
}

export interface IClasses {
  [guid: string]: string;
}

export interface IPlayerNameElo {
  0: string;
  1: number;
}

export interface IAwardSummary {
  [awardName: string]: iAwardSingle;
}

export interface iAwardSingle {
  [real_name: string]: number;
}

export interface IFeud {
  0: string;
  1: string;
  2: number;
  3: number;
}

export interface iGameResultsObject {
  [match_id: string]: iGameResult;
}

export interface iGameResult {
  map: string;
  winner: string;
  winnerAB: string;
  round1: {
    duration: number;
    duration_nice: string;
  };
  round2: {
    duration: number;
    duration_nice: string;
  };
}

export type IPlayerStatsWithId = IPlayerStats & {
  playerId: string;
};

export interface ITeamOverviewData {
  a: IPlayerStatsWithId[];
  b: IPlayerStatsWithId[];
}

export interface IGroupInput {
  group_name: string;
  matches: number[];
  region: string;
  type: string;
}

export interface IGroup {
  matches: number[];
  cached: string;
  teams: string;
  games: number;
  finish_human: string;
  duration_nice: string;
}

export interface IGroupResponse {
  [index: string]: IGroup;
}
