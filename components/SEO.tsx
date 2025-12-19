import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const defaultMeta = {
  title: '元壹宇宙 | 默默超思維系統',
  description: '探索默默超思維系統，一個融合哲學、邏輯與宇宙觀的深度思維框架。透過九大起源、七大法則與真實之鏡，重新認識自我與世界的本質。',
  keywords: '默默超, 思維系統, 哲學, 宇宙觀, 九大起源, 七大法則, 真實之鏡, 元壹宇宙, 邏輯循環, AI對話',
  image: 'https://yyuniverse.com/og-image.jpg',
  url: 'https://yyuniverse.com',
  siteName: '元壹宇宙',
  twitterHandle: '@yyuniverse',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  const metaTitle = title ? `${title} | ${defaultMeta.siteName}` : defaultMeta.title;
  const metaDescription = description || defaultMeta.description;
  const metaKeywords = keywords || defaultMeta.keywords;
  const metaImage = image || defaultMeta.image;
  const metaUrl = url || defaultMeta.url;

  return (
    <Helmet>
      {/* 基本元數據 */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:locale" content="zh_TW" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content={defaultMeta.twitterHandle} />
      <meta name="twitter:creator" content={defaultMeta.twitterHandle} />
      
      {/* 規範 URL */}
      <link rel="canonical" href={metaUrl} />
      
      {/* 語言與地區 */}
      <html lang="zh-TW" />
    </Helmet>
  );
};
