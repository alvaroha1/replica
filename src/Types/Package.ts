export interface Package {
  name: string;
  stars: number;
  rank: number;
  forks: number;
  description: string;
  homepage: string;
  repository_url: string;
  owner?: string;
}