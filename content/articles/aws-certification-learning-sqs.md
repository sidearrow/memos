---
title: 'AWS 認定試験学習メモ Amazon SQS 編'
description: ''
createdAt: 2021-01-09
updatedAt: 2021-01-09
tags: [aws, aws-certification]
---

# AWS 認定試験学習メモ Amazon SQS 編

## 概要

- Amazon Simple Queue Service
- 二種類のメッセージキューを提供
  - 標準キュー
    - 配信順序はベストエフォート
    - 少なくとも一回の配信を保障
      - 複数回配信される可能性あり
  - FIFO キュー
    - 順序通り一回のみ確実に配信
- 可視性タイムアウト
  - 特定のインスタンスで一定時間キューが処理されなかった場合、他のインスタンスで処理を可能にする
