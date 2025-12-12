import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as dados from "../db.json";
import { Postagem } from '../models/post.model';

export const postResolver: ResolveFn<Postagem | undefined> = (route: ActivatedRouteSnapshot) => {
  
  const id = route.paramMap.get("id");
  const posts: Postagem[] = dados.posts;
  return posts.find(post => post.id === id);

};
