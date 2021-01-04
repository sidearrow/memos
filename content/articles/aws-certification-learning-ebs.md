---
title: 'AWS 認定試験学習メモ Amazon EBS 編'
description: ''
createdAt: 2021-01-04
updatedAt: 2021-01-04
tags: [aws, aws-certification]
---

# AWS 認定試験学習メモ Amazon EBS 編

## 概要

- Amazon Elastic Block Stroe
- EC2 と一緒に使用する用のブロックストレージ
- ５つのボリュームタイプを提供
  - EBS プロビジョンド IOPS SSD (io2)
  - EBS プロビジョンド IOPS SSD (io1)
  - EBS 汎用 SSD (gp2)
  - スループット最適化 HDD (st1)
  - Cold HDD (sc1)
- io2 は io1 と比較して耐久性が高い
- io2, io1 ではパフォーマンスを最大限活用するために、EBS 最適化 EC2 インスタンスの使用が推奨される
- 標準では同じ AZ 内でレプリケートされる
- スナップショット機能を提供
- ボリューム内データ、EC2 インスタンス間との移動データ、スナップショットが暗号化される

## ボリュームタイプの特徴

## 参考資料

- [Amazon EBS（EC2 ブロックストレージボリューム）| AWS](https://aws.amazon.com/jp/ebs/) 2020/01/04 閲覧
