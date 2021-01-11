---
title: 'AWS 認定試験学習メモ Amazon S3 編'
description: ''
createdAt: 2021-01-02
updatedAt: 2021-01-09
tags: [aws, aws-certification]
---

# AWS 認定試験学習メモ Amazon S3 編

## 概要

- 利用形態に合わせたいくつかのストレージクラスが提供されている
  - Standard（標準）
  - Intelligent-Tiering
  - Standard-IA（標準 - 低頻度アクセス）
  - One Zone-IA（１ゾーン - 低頻度アクセス）
  - Glacier
  - Glacier Deep Archive
  - Outposts
- ストレージクラスはオブジェクト単位で設定可能
- Standard
  - 耐久性 99.999999999%
  - 可用性 99.99%（SLA: 99.9%）
- Intelligent-Tiering
  - アクセスパターンを解析してストレージコストを最適化
- Standard-IA
  - 長期保存、バックアップ等用
- One Zone-IA
  - 一つの AZ で保管
- Glacier
  - 低コストで長期アーカイブ
  - 取得時間を設定可能
  - Vault Lock
    - データ保存後に編集不可にする設定が可能
- Glacier Deep Archive
  - 7 ~ 10 年間保管されるデータの長期保存用に設計
  - 磁気テープライブラリの代替
  - 取り出し時間は 12 時間以内
- ストレージクラス分析
  - ストレージアクセスパターンを分析し、適切なデータをいつ適切なストレージクラスに移行すべきかを判断
- S3 Transfer Acceleration
  - クライアントと S3 バケット間で、長距離のデータ転送も高速に実行可能
  - Cloud Front のエッジロケーションを利用している
- マルチパートアップロード
  - 大容量データを分割してアップロード
  - 中断後、途中から再開可能
- 最大オブジェクトサイズは 15TB
