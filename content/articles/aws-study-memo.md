---
id: saa-study-001
title: 'AWS 認定 ソリューションアーキテクト 学習メモ'
description: 'AWS 認定 ソリューションアーキテクト 学習メモ'
createdAt: 2020-10-25
updatedAt: 2021-01-02
tags: [aws-saa, memo]
---

## RDS の DB パラメータグループ

- https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
- DB エンジンの設定を管理する
- 一つ以上の DB インスタンスに適用される
- 動的パラメータは即時適用される
- 静的パラメータは再起動が必要

## EC2 のプライベート IP アドレスと内部 DNS ホスト名

- https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-private-addresses
- インターネットから到達できない IP アドレス
- 同じネットワーク内のインスタンス間の通信に使用する
- インスタンス起動時にプライマリプライベート IPv4 アドレスと内部 DNS ホスト名が割り当てられる
  - 同じ VPC 内のインスタンス間の通信に利用可能

## EBS のスナップショット

- https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/EBSSnapshots.html
- S3 へ増分のみバックアップ
- バックアップ中のステータスは pending

## S3 の堅牢性及び可用性

- 堅牢性：99.999999999 %
- 可用性：99.99 %
  - 年間のダウンタイムは 52 分

## S3 へのファイルアップロード失敗時の挙動

- マルチパートアップロードを使用している場合、途中から再開できる
- マルチパートアップロードを使用しない場合、最初からアップロードする必要あり

## Elastic IP アドレスの費用

- 費用が掛かるパターン
  - 実行中のインスタンスに関連付けられていない
  - 関連付けられているインスタンスが停止している
  - 関連付けられているネットワークインターフェースがアタッチされていない

## RDS のリードレプリカ

- DB インスタンス削除時
  - MySQL
    - アクティブ状態のまま
  - PostgreSQL
    - スタンドアロン DB インスタンスに昇格
- リードレプリカを削除する場合はコンソール等で明示的に指定する

## Auto Scaling

- リージョン内の複数の AZ に分散させる
- グループは複数のリージョンをまたぐのは不可

## EC2 スポットインスタンスの料金

- スポット価格が入札価格を上回るとインスタンスは強制終了される
- 強制終了された場合……
  - 最初の一時間以内は料金の請求はなし
  - 一時間以降は秒単位で四捨五入

## AWS の利用ログ

- AWS Cloudtrail
- ログを S3 に保存可能

## CloudWatch のメトリクスデータの保管期間

- 15 ヶ月
