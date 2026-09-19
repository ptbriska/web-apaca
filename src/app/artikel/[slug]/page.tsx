import React from 'react';
import { allArticles } from '@/data/articles';
import DetailArtikelClient from './DetailArtikelClient';

// 1. Fungsi wajib untuk Next.js Static Export
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

// 2. Server Component Page Wrapper
export default function DetailArtikelBerita({ params }: { params: { slug: string } }) {
  const article = allArticles.find((art) => art.slug === params.slug) || allArticles[0];

  return <DetailArtikelClient article={article} />;
}
