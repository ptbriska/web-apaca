import tipsMemilihJurusan from './tips-memilih-jurusan';

export interface Article {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  caption?: string;
  summary: string;
  content: string;
}

export const allArticles: Article[] = [
  tipsMemilihJurusan,
  // Tambahkan import artikel baru kamu di bawah sini nanti
];

export const allTags = Array.from(
  new Set(allArticles.flatMap((art) => art.tags))
);

export const allCategories = [
  "Semua",
  "Parenting",
  "Karir",
  "Mental Health",
  "OSN",
  "Learning",
  "Sekolah",
  "Kerjasama",
  "Workshop"
];
