# IDOL FIGHTER - Vite版セットアップガイド

## 必要な環境

- Node.js (v18以上推奨)
- npm または yarn

## セットアップ手順

### 1. Node.jsのインストール

Node.jsがインストールされていない場合は、以下からダウンロードしてインストールしてください:

https://nodejs.org/

### 2. 依存パッケージのインストール

プロジェクトディレクトリで以下のコマンドを実行:

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで自動的に http://localhost:3000 が開きます。

### 4. 本番用ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## プロジェクト構造

```
my work/
├── index.html              # メインHTMLファイル
├── styles.css              # カスタムCSS
├── package.json            # npm設定
├── vite.config.js          # Vite設定
├── src/
│   ├── app.jsx            # メインアプリケーション
│   ├── data.js            # データ定義
│   ├── hooks.js           # カスタムフック
│   └── components/        # Reactコンポーネント
│       ├── ExplosionParticles.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── IdleBackgroundElements.jsx
│       ├── IdolsSection.jsx
│       ├── LoadingScreen.jsx
│       ├── MovieSection.jsx
│       ├── NewsSection.jsx
│       ├── PoppingText.jsx
│       ├── RevealOnScroll.jsx
│       ├── StatBar.jsx
│       ├── StorySection.jsx
│       ├── SystemSection.jsx
│       └── TopSection.jsx
└── index-working.html      # 元の動作する単一ファイル版(バックアップ)

```

## トラブルシューティング

### Node.jsがインストールされていない場合

すぐに動作を確認したい場合は、`index-working.html` をブラウザで開いてください。
これは元の単一ファイル版で、Node.js不要で動作します。

### Viteが起動しない場合

1. Node.jsのバージョンを確認: `node --version`
2. npmのバージョンを確認: `npm --version`
3. 依存パッケージを再インストール: `rm -rf node_modules package-lock.json && npm install`

## 開発時の注意点

- ホットリロード機能により、ファイルを保存すると自動的にブラウザが更新されます
- CSSの変更も即座に反映されます
- エラーは開発サーバーのコンソールとブラウザのコンソールに表示されます
