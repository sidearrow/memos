---
title: 'AWS 認定試験学習メモ Redshift 編'
description: ''
createdAt: 2021-01-02
updatedAt: 2021-01-02
tags: [aws, aws-certification]
---

パチスロ トータル・イクリプス 面白いですね、レッドシフトタイム。
ではなく、Amazon Redshift はフルマネージド型のデータウェアハウスサービスです。

スナップショット

- Redshift はスナップショット用に無料ストレージを提供している
- 一定の容量以上は課金される

VPC ルーティングの使用

- VPC ルーティングを使用すると、クラスターとデータリポジトリ間の一部のトラフィックが Amazon VPC を経由する
  - COPY と UNLOAD のトラフィック
