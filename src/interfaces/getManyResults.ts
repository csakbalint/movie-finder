export interface GetManyResults<Entity> {
  page: number;
  results: Entity[];
  cached: boolean;
  total_pages: number;
  total_results: number;
}
