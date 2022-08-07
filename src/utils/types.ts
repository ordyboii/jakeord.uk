export type Project = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  client: string;
  tags: string[];
  content?: string;
};
