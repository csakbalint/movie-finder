export interface GetManyResults<Entity> {
  page: number;
  results: Entity[];
  cached: boolean;
  hit_count: number;
  total_pages: number;
  total_results: number;
}
