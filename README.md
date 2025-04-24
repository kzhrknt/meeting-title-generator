# 会議タイトルジェネレーター

会議タイプ、案件名、アジェンダ、場所を入力すると、予定のタイトルを自動生成するシンプルなWebアプリケーションです。

## 特徴

- 直感的なユーザーインターフェース
- Ext（外部）/Int（内部）の会議タイプ選択
- 自動生成されたタイトルのワンクリックコピー機能

## 使用方法

1. 会議タイプを選択
2. 案件名を入力
3. アジェンダを入力
4. 場所を入力
5. 「タイトル生成」ボタンをクリック
6. 生成されたタイトルをコピーボタンでコピー

## 開発

### 静的バージョン（GitHub Pages用）

`docs/index.html` にある静的HTMLファイルを編集してください。

### Flask版（サーバー実行用）

1. 仮想環境をセットアップして有効化:

```bash
python -m venv venv
source venv/bin/activate  # Windowsの場合: venv\Scripts\activate
```

2. 依存関係をインストール:

```bash
pip install -r requirements.txt
```

3. アプリケーションを実行:

```bash
flask run
```

4. ブラウザで http://127.0.0.1:5000 にアクセス

## デプロイ

- GitHub Pages: `docs` フォルダがサイトのルートとして使用されます
- その他のホスティングオプション: Render, Vercel, Netlify など