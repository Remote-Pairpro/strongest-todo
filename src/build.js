var packager = require('electron-packager');  
var config = require('./package.json');

packager({  
  dir: './app',          // 対象
  out: './dist',      // 出力先
  name: config.name,  // 名前
  platform: 'linux', // darwin, linux, win32
  arch: 'x64',        // 64bit
  version: '0.34.2',  // electron のバージョン
  icon: './app.icns', // アイコン

  'app-bundle-id': 'kazuhito-m.github.io', // ドメイン(TODO見直し)
  'app-version': config.version,          // バージョン

  overwrite: true,  // 上書き
  asar: true,       // アーカイブ
  prune: true,
  // 無視ファイル
  ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
}, function done (err, appPath) {
  if(err) {
    throw new Error(err);
  }
  console.log('Done!!');
});
