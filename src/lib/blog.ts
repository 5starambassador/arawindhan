import { BlogPost } from '@/types';
import { INITIAL_BLOGS, blogsList } from '@/data/blogs';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogsList;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogsList.find((b) => b.slug === slug);
}
