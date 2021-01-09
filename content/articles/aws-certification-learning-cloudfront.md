---
title: 'AWS 認定試験学習メモ CloudFront 編'
description: ''
createdAt: 2021-01-02
updatedAt: 2021-01-09
tags: [aws, aws-certification]
---

# AWS 認定試験学習メモ CloudFront 編

## 概要

- エッジロケーションにコンテンツがない場合、データはオリジンサーバーから取得する
- 署名付き URL
  - S3 のコンテンツを特定のユーザーに配信する場合、 プライベートに設定された S3 バケットにオリジンアクセスアイデンティティ（OSI）を利用してアクセスし
- 署名付き Cookie
  - 署名付き URL と同様、特定のユーザーのみにコンテンツを配信可能
  - オブジェクトの URL 変更なしに導入可能
