import React, { useState } from 'react';
import { Theme } from '../types';
import { ChevronDown, Check, AlertCircle } from 'lucide-react';

interface RealityMirrorProps {
  theme: Theme;
}

// 7 大對照模塊資料
const REALITY_MIRRORS = [
  {
    id: 1,
    title: '元壹宇宙 vs 榮格心理學',
    subtitle: 'Jungian Shadow vs. ANOTHER (伊)',
    contrast: [
      {
        category: '本體性質',
        yuanyi: '伊是弧度位移後的壹，不是人格碎片',
        existing: '陰影是人格結構的一部分'
      },
      {
        category: '作用機制',
        yuanyi: '伊因拒絕承擔而生成，不能被整合，只能被迎回',
        existing: '陰影可被整合並成為人格的一部分'
      },
      {
        category: '層級',
        yuanyi: '宇宙結構層（Arc Displacement）',
        existing: '心理現象層（心理詮釋）'
      },
      {
        category: '根本差異',
        yuanyi: '是你推開的那個「一」，唯一的受害者',
        existing: '是你不想看到的自己，視為黑暗面'
      }
    ]
  },
  {
    id: 2,
    title: '元壹宇宙 vs 佛學',
    subtitle: 'Integrity vs. Karma & Causality',
    contrast: [
      {
        category: '循環本質',
        yuanyi: '弧度循環＝完整性封印（結構必然）',
        existing: '因果循環＝業力果報（道德因素）'
      },
      {
        category: '目標',
        yuanyi: '回到壹（完成）',
        existing: '離開循環（解脫）'
      },
      {
        category: '苦的根源',
        yuanyi: '苦＝弧度不在原位（結構張力）',
        existing: '苦＝執著與無常'
      },
      {
        category: '解脫觀',
        yuanyi: '不是超越，而是回返',
        existing: '不是回返，而是超越'
      }
    ]
  },
  {
    id: 3,
    title: '元壹宇宙 vs 道家',
    subtitle: 'Integrity vs. Wu Wei (無為)',
    contrast: [
      {
        category: '陰陽定義',
        yuanyi: '壹與伊＝本體與反相（因果關係）',
        existing: '陰陽＝兩個必要向度（平衡關係）'
      },
      {
        category: '運動原理',
        yuanyi: '回返＝結構必然（不是選擇）',
        existing: '無為＝順勢（不介入）'
      },
      {
        category: '根本律法',
        yuanyi: '完整性法則（Zero-Law）',
        existing: '自然之道（道法自然）'
      },
      {
        category: '終極目標',
        yuanyi: '弧度完整閉環',
        existing: '道的和諧流動'
      }
    ]
  },
  {
    id: 4,
    title: '元壹宇宙 vs 西方哲學',
    subtitle: 'Structural Ontology vs. Epistemology',
    contrast: [
      {
   
