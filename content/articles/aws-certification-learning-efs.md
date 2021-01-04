---
title: 'AWS 認定試験学習メモ Amazon EFS 編'
description: ''
createdAt: 2021-01-04
updatedAt: 2021-01-04
tags: [aws, aws-certification]
---

# AWS 認定試験学習メモ Amazon EFS 編

## 概要

- Amazon Elastic File System
- 伸縮自在な完全マネージドなファイルシステムを提供
- 容量はファイルの追加・削除に合わせて自動で拡縮
- データはリージョン内の複数の AZ に格納
- 標準と低頻度アクセスの二種類のストレージクラスが用意
- 10 GB/秒超 及び 500000 超の IOPS をサポート
- POSIX 準拠
  - IEEE が策定した異なる OS 間で共通となる API 規格
- NFS v4.0, v4.1 をサポート
- 格納中のデータと転送中のデータを暗号化
  - 暗号化には KMS で管理される暗号化キーを使用

## 参考資料

- [Amazon EFS（EC2 用フルマネージド型ファイルシステム）| AWS](https://aws.amazon.com/jp/efs/) 2020/01/04 閲覧