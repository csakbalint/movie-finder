export interface GetManyResults<Entity> {
  page: number;
  results: Entity[];
  total_pages: number;
  total_results: number;
}
