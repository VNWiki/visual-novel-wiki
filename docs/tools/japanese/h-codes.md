---
title: H-codes
description: 'Textractor Hook Codes'
---

# H-Codes

> [!IMPORTANT] 
> This is a backup of the [Visual Novel Text Hooking Wiki](https://web.archive.org/web/20221114220419/https://vn-hooking.fandom.com/wiki/H-Code), re-formatted for the Visual Novel Wiki project.

This page contains hook code information for Visual Novels. Feel free to add your own H-code into the list below, but do use the following format:

```
[Developer] (Visual Novel title): (H Code)
```

> [!TIP] Use the 'Search' function (<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>Cmd</kbd>+<kbd>F</kbd>) to search for the H-code of the game you're looking for.


## H-Codes (Set 1)

### [5pb.Games]
```
- メモリーズオフ -Innocent Fille- /HHN-C:-18@319AF:Game.exe
```

### [Azarashi Soft]
```
- Osananajimi no Iru Kurashi /HW8:14@1D1320:Osananazimi_No_Irukurashi.exe
```

### [CRYSTALiA]
```
- 絆きらめく恋いろは
  (Previously: /HSN-C@38648:mekuiro.exe /HBN-C@37F46:mekuiro.exe)
  /HBN-C@3832F:mekuiro.exe

- 絆きらめく恋いろは -椿恋歌-
  Note: Change the in game font (to ゴシック)

- 白刃きらめく恋しらべ
  /HS4@17FB0:KERNEL32.DLL (or use Textractor)
```

### [Ensemble]
```
- 恋はそっと咲く花のように /HQN-8@9570:AdvHD.exe
- 恋はそっと咲く花のように～二人は永遠に寄り添っていく～ /HQN-1C@92F0:AdvHD.exe
- 黙って私のムコになれ！/HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- 乙女が結ぶ月夜の煌めき /HW-1C@C8B8:advhd.exe
- 乙女が結ぶ月夜の煌めき FullMoon Days /HW-1C@CA2D:AdvHD.exe
- 想いを捧げる乙女のメロディー ～あふれる想いを調べにのせて～ ヘッダー＆アイコン
  /HW-1C@A883:AdvHD.exe or /HQN-8@9AC0:AdvHD.exe
- Secret Agent ～騎士学園の忍びなるもの～ TRIAL EDITION, Hシーン体験版
  /HW-1C@CC4F:AdvHD.exe
- Secret Agent ～騎士学園の忍びなるもの～
  /HW-1C@CCAF:AdvHD.exe
  Note: Code doesn't hook '?', '!', or alphabets in Textractor
- お嬢様は素直になれない～大好きをキミだけに～ /HW-1C@AE2E:AdvHD.exe
```

### [Ensemble SWEET]
```
- 乙女騎士♥いますぐ私を抱きしめて /HWN10@43063:AdvHD.exe
- 乙女とふれあう、ひとつ屋根の下 /HQ-10@6430:AdvHD.exe
  Note: UTF-16 format
- ウブな処女のエッチなお願い /HQN-8@9AC0:AdvHD.exe
```

### [eRONDO]
```
- こいのす☆イチャコライズ /HW-8@190DA1:erondo02.exe
```

### [Eushully/Anastasia]
```
- 魔法が世界を救います！: /HA-4@43CA50
- 冥色の隷姫～緩やかに廃滅する青珊瑚の森～: (Ver. 1.01) /HSN18@44DF10
```

### [Eushully]
```
- 天冥のコンキスタ /HS4@3E740:AGE.EXE
- 姫狩りダンジョンマイスター /HSN4@41DB97 /pnage.exe
- 戦女神ＺＥＲＯ: (BG0_101) /HSN18@4503F0 or /HS18@4503F0
- 封緘のグラセスタ /HSN18@C3990:AGE.exe
```

### [Guilty Nightmare Project]
```
- Nightmare×Sisters～淫獄のサクリファイス～
  /HW-1C:-10@CC70:AdvHD.exe
```

### [HARUKAZE]
```
- らぶおぶ恋愛皇帝 of LOVE！ v1.03 /HAC@50C10:らぶおぶ恋愛皇帝ofLOVE!.exe
- ノラと皇女と野良猫ハート v1.08 /HAC@55930:ノラと皇女と野良猫ハート.exe
```

### [Jitaku Studio]
```
- リアルエロゲシチュエーション！Hx3 /HSN4@1511F0:Reaeroh3.exe
```

### [Kaeru Soft]
```
- 現実が見えてきたので少女を愛するのを辞めました：/ HS-4 @ 268E00：noshoujo.exe
```

### [Lump of Sugar]
```
- ねこツク、さくら。体験版 /HS-8:8@A0620:Nekotsuku_Trial.exe
```

### [Madosoft]
```
- ラズベリーキューブ /HSN4@10C24B:raspberrycube.exe (Works with VNR)
```

### [Minato Soft]
```
- 真剣で私に恋しなさい! A 猟犬ルートアフター
  /HAC@62F30:真剣で私に恋しなさい！Ａ猟犬ルートアフター.exe
- 我が姫君に栄冠を (Waga Himegimi ni Eikan o)
  /HAC@63910:我が姫君に栄冠を.exe
- 我が姫君に栄冠を 将軍の誘惑
  /HS-20@2E861:我が姫君に栄冠をＦＤ 将軍の誘惑.bin
  Note: use with Textractor regex filter:,[A-Z_0-9]+|\[n\]
  /HS18@55B80:我が姫君に栄冠をＦＤ 将軍の誘惑.bin
  Note: read https://vndb.org/t17108 for more info
```

### [Mirai]
```
- 宿星のガールフレンド ALLSTAR / Shukusei no Girlfriend ALLSTAR
  /HAC@61A60:宿星のガールフレンド.exe
  /HAC@628D0:宿星のガールフレンド２.exe
  /HAC@63260:宿星のガールフレンド３.exe
  /HAC@63560:宿星のガールフレンド 芙慈子編.exe
```

### [Onomatope*Raspberry]
```
- Sis△Camp /HS18*50:18*14@0:GDI32.dll:GetTextMetricsA
```

### [Purple Software]
```
- 青春フラジャイル 体験版第一弾 /HS-20:-8@63896:cmvs32.exe
- 初恋サクラメント：/HA-4@440540
- 夏に奏でる僕らの詩: /HA-4@43AA50
- 秋箱: /HA-4@40A3D0
- 秋色恋華: /HA8@407250 | (Ver 1.20) /HA8@407C10
- 明日の君と逢うために: /HA-4@433550 | (Ver. 1.02) /HA-4@4337E0
- 明日の七海と逢うために: /HA-4@435AF0
- 春色桜瀬: /HA-4@435910
- プリミティブ リンク: /HA-4@426B90 | (ver. 1.01) /HA-4@426EF0
- Signal Heart: /HB-C*0@4889C8 | (Ver. 1.1) /HB-C*0@488A00
- Signal Heartぷらす: /HA18@48BF80 /KS /Ftext@48BC81 | (Ver. 1.1) /HB-C*0@48B368
- シグナルハートぷらす /HA18@48BF80 /KS /Ftext@48BC81
- Signal Heart /HB-C*0@4889C8 (V1.0) /HB-C*0@488A00 (V1.1)
- 明日の七海と逢うために /HA-4@435AF0
- 青春フラジャイル　体験版 /SeishunFragileTrial /HA8*2:8*14@61BB0:cmvs32.exe
  Note: 64-bit version of the game doesn't need any H-codes if hooked with ITH64
- 夏色小町：/HB-4@40FD53
- 初恋サクラメント /HA-4@440540
- 夏に奏でる僕らの詩 /HA-4@43AA50
- はっぴ～ぶり～でぃんぐ /HB4*0@41B390
```

### [SMEE]
```
- Hajirabu -Making*Lovers- - Promotional Edition /HW8:4@A030:ハジラブ.exe
- Hajirabu -Making*Lovers- /HW8:4@A1C0:ハジラブ.exe
  Note: or rename the .exe to BGI.exe and use/HW8:4@A1C0:BGI.exe. Also works with the trial version.
- HaremKingdom /HS-10@A07A0:HaremKingdom.exe
- Harem ja Nai yo Kingdom - Hikari & Sophia & Kiki Hen /HW8:4@A020:HaremKingdom.exe
- Harem ja Nai yo Kingdom – Charlone & Marrou Hen /HW8:4@A020:HaremKingdom.exe
- カノジョ＊ステップ(Kanojo＊Step) /HS8:20@3A730:KanojoStep.exe
- フレラバ ~Friend to Lover~ HD Renewal Edition /HS8:20@35370:フレラバ.exe
- Making＊Lovers /HS8:20@3B7E0:MakingLovers.exe
- Making＊Lovers - Full HD Remaster H-code /HW8:4@A040:MakingLovers.exe
- Making＊Lovers 激イチャアフターストーリー Vol.01 通常版
  /HXS8:20@3B350:MakingLovers_FD01.exe
- Making＊Lovers 激イチャアフターストーリー Vol.02 通常版
  /HXS8:20@3B350:MakingLovers_FD02.exe
- Sugar*Style 体験版 /HS8:20@3BA80:SugarStyle.exe
- Sugar*Style /HS8:20@3BAC0:SugarStyle.exe
- Sugar*Style プロモーション版 /HS8:20@3B890:SugarStyle.exe
- Sugar*Style Music and Happiness Pack
  /HS4:8@3A740:SugarStyle_恋人以上夫婦未満アフターストーリー.exe
```

### [Waffle]
```
- エデンズリッター 第2章外伝 煉獄の魔王バルベリト編 /HB-4*0:48@12D75F:er2_ss.exe
```

### [Wonder Fool]
```
- ユキイロサイン v1.00 : /HW8:14@526520
```

### [Yumemiru]
```
- Girls Book Maker -Shiawase no Libretto-/HS-1C@C647:gbm.exe
```

### [Unknown Developer] (From entry: 新説魔法少女)
```
- 新説魔法少女 v1.036 (tested with Textractor only)
  HQ4@0:oleaut32.dll:SysAllocString
```

### [Interheart]
```
- 人妻スイミング倶楽部 /HS-4:8@1DA513:HSWIM.exe
```

### [ChuableSoft]
```
- あなたをオトコにしてあげる！ /HSN-8@50637:あなたをオトコにしてあげる！.exe
```

### [Blue Gale]
```
- ＪＫとオーク兵団
  /HS-C@10E997:jkorc.exe
```

### [Leaf]
```
- WHITE ALBUM 2～introductory chapter + closing chapter～ SET版
  /HS0@438604 (ver 1.01)
```

### [A-Kaguya Honky-Tonk Pumpkin]
```
- エロティ課　誘惑研修はじまるよ～
  /HB8@1C630!4A0FEAB4
```

---
## H-Codes (Set 2)

### [TinkerBell]
```
- [130118] 籠女の繭
  /HAN-4@66DA7:kagome.exe
```

### [パープルソフトウェア] (Purple Software)
```
- [130228] ハピメア
  /ha-c@448FF0   or
  /HAC@48FF3:cmvs32.exe
```

### [STREGA]
```
- [130222] 木洩れ陽のノスタルジーカ -Raggio di sole nostalgico
  /HB18*0@4D3F18
```

### [PeasSoft]
```
- [110729] 君を仰ぎ乙女は姫に
  /HB-20*0:-14@442755
```

### [Lime]
```
- [130222] Royal Duty
  /HB18*0@4D3F18
```

### [CosmicCute]
```
- [130322] LOVESICK PUPPIES-僕らは恋するために生まれてきた-+Tokuten+Patch 1.01
  /hw-4*14:-4*0@1137F8
```

---
## H-Codes (Set 3)

### [Pink Tissue]
```
- [120928] 人妻ンション2～うるわしの巨乳人妻三姉妹～
  /HSN-4@541E4:hitozuma2.exe
  /HSN-4@4541E4
```

### [ルナソフト] (Luna Soft)
```
- [121214] 深淵のレコンキスタ
  /HBN-C*0@2484D:lus001.exe
```

### [Puzzlebox]
```
- 誘惑女教師 ～熟れた蜜の味～
  /HSN-4@CE68:ags.exe
```

### [ぱるふぁんそふと] (Parfum Soft)
```
- 一緒にちゃぷちゃぷたいむ！～お風呂でいちゃいちゃ生活～
  /HSN4@4413B0
  Note: or use ITH v2, v3 won't autodetect the game's engine
```

### [D:drive.]
```
- ツゴウノイイ彼女 ～Gカップおもらしツンデレ下級生『瑠璃子』
  /HB-4*-1@1D5C72:tsugokano_R.exe
```

### [たぬきそふと] (Tanuki Soft)
```
- 隣りのぷ～さん
  /HSN-8@200FE7:tonarino.exe
```

### [Ｇ．Ｊ？] (G.J?)
```
- [121221] 百機夜行
  /HSN-8@46F79F
```

### [モニスタラッシュ / a Matures] (Monista Rush / a Matures)
```
- [121129] 人妻AV嬢 瑤子
  Note: rename the main exe file to bruns, once that is done run latest ith
```

### [エウシュリー] (Eushully)
```
- [060825] 峰深き瀬にたゆたう唄
  /HB10:30@3B481:AGE.EXE
  Note: v.1.00.0008, probably with applied no-dvd patch
```

### [Studio Ryokucha]
```
- 祝福の鐘の音は、桜色の風と共に
  /HA-4@94D62:shukufuku_main.exe
```

### [Princess Sugar]
```
- プリンセスキッス！ ～少女1000年紀物語～
  /HBN-C*0@4F3CC:プリンセスキッス！.exe
```

---
## H-Codes (Set 4)

### [STUDIO邪恋]
```
- 操心術0 /HA-8@428623
- 操心術 外伝 (Soushinjutsu Gaiden) /HAN-10@0049254A
```

### [シルキーズ] (Silky's)
```
- [121122] 女系家族III ～秘密HIMITSU卑蜜～ /HBNC@4CE6E6
```

### [IRIS]
```
- ないしょのないしょ! /HW-4@4148B7
  Note: works fine for me with ITH 2.3 but ITH3 lets the game terminate.
```

### [Hammerheads]
```
- [121130] 販売淫～夫の留守中に疼く妻～/HBC*0@4044F0 /KF
```

### [M-O]
```
- [121130] 少女迷宮 ～淫猥姉妹の男性調教支配録～
  /hw18:-14@148a0:siglusengine.exe
  Note: use ITH2, ITH3 will crash the game, or use AGTH.
```

### [unicorn-a／げーせん18]
```
- 三極姫2 ～天地大乱・乱世に煌く新たな覇龍～ 遊戯強化版
  /HB-C*0@465E10
```

### [eufonie]
```
- [121221] 恋剣乙女 /HA-20@4928CC /KS1
```

### [ブルゲLIGHT] (Bluegale LIGHT)
```
- JK初音アフター ～エロ議員センセイと流されて無人島編～
  /HA-C@4924F8 /KS
  /hb18*0@4D3E60
```

### [D：drive.]
```
- [121026] ツゴウノイイ彼女～Iカップ甘えさせ癒し系上級生『夏音』
  /HB-4*0@1D5C62:tsugokano_N.exe
```

---
## H-Codes (Set 5)

### [Lump of Sugar]
```
- 花色ヘプタグラム
  /HA-8@42D423
```

### [アトリエかぐや] (Atelier Kaguya)
```
- 姉母娘でイクッ！～大好きな姉を奪ったくせに浮気を続けるクズ旦那から姉の娘と共にネトリ返す～
  /HB-4*0@C75F0:Start.exe
```

### [Navel]
```
- [121026] 月に寄りそう乙女の作法
  /HB18*0@4D3E60
  Note: v1.01
- [121026] 月に寄りそう乙女の作法append patch
  /HBN14*0@4CC2C4
- [130726] 乙女理論とその周辺
  /HBN14*0@4CC2C4
```

### [スタッフィング] (Staffing)
```
- 催眠遊戯
  /HAN-10@492607 /KS1
- 催眠演舞
  /HAN-10@00491B0A
```

### [げーせん18] (Gesen18)
```
- 戦極姫4～争覇百計、花守る誓い～
  /HBN-20*0@A1967:Sengokuhime4.exe v1.03 nodvd
```

### [Mignonne]
```
- MISTAKE×MISCAST カコトミライノコイモノガタリ
  /kf /HBN10@4293:MISTAKE_X_MISCAST.EXE /pnMISTAKE_X_MISCAST.EXE
  Note: AGTH ONLY! And set text speed to max.
```

### [げーせん18] (Gesen18)
```
- 決戦!!乙女たちの戦場3 ～電撃作戦!戦果はエースの名のもとに～
  /HBN-4*0@1396B3:otsen3.exe
```

### [Cage]
```
- 恋する妹はせつなくてお兄ちゃんを想うとすぐＨしちゃうの
  /HB18@3AD78:imouto.exe
```

### [ABALONE KISS]
```
- 孕狂 胎魔巫女 ～はっきょう たいまみこ～
  /HBN18@561B1:taimamiko.exe
```

### [天狐] (Tenko)
```
- 英雄＊戦姫
  /HBN-8*4@ADA17:英雄＊戦姫.exe
  Note: v1.05
```

---
## H-Codes (Set 6)

### [ぱてぃしえ] (Patissier)
```
- まじかる☆ている
  /HSN10@243B2:mTale.exe
  Note: There are occasional problems with special characters which break sentences, you'll have to manually select/copy parts of a sentence for translation.
```

### [戯画] (Giga)
```
- ショコラ ～maid cafe ”curio”～ Re-order
  /x3 /v
  Note: Agth with /x3 /v parameters got 41a2b5:wvsprintfA thread.
  In ITH you can use h-code: /HBN0@1A2B5:Chocolat.exe but speaker names will be broken and maybe there will be some other problems.
```

### [Unknown Developer] (From entry: Cross Days)
```
- Cross Days
  /HWN-4@41F3A8
  Note: v1.00b
```

### [bolero]
```
- らぶらぼ ～調教なんて興味のなかった俺と彼女の放課後SMラボラトリー～
  /HS-20@146447:bolero01sys.exe
  Note: Winxp/ITH. Tested for a very short time, there's some unreadable character at the end of captured text (cursor icon maybe?).
  If at one point your text would split into several threads, use /HSN-20@146447:bolero01sys.exe instead.
```

### [Applemint]
```
- 淫忍伝 さくら繚乱
  /HBC*0@4500:sakura.exe /KF
```

### [玉藻スタジオ] (Tamamo Studio)
```
- 冒険者の町を作ろう!
  /HAN-18@485AA9 /KF
  Note: v1.12
```

### [レッドレーベル] (Red Label)
```
- JK家政婦はミタ肛門
  /HB-C*0@4290:RL09.exe /kf
```

### [天狐] (Tenko)
```
- 英雄＊戦姫
  /HBN-8*4@4ADA17
  Note: v1.06
```

### [平安亭] (Heiantei)
```
- 友達のお母さんは好きですか？～息子の友人にハマったオバちゃん妻～
  /HA-18@69396:tomo.exe
```

### [D：drive.]
```
- ツゴウノイイ彼女 ～Hカップいいなり服従委員長『遥』～
  /HB-4*0@1D4902:tsugokano.exe
  Note: パケ版, no updates
```

---
## H-Codes (Set 7)

### [unicorn-a／げーせん18]
```
- 三極姫2 ～天地大乱・乱世に煌く新たな覇龍～
  /HB-C*0@62CF0:sangokuhime2.exe
  Note: + update 1.01a + nodvd crack
```

### [Exception]
```
- 白神子
  /HSN-14*8C:-F@41C9A0
```

### [CODEPINK]
```
- ヌキアニ!! Vol.1 イってイかせてブッかけてつるぺたツンデレ処女＆セクハラ大好き巨乳女子大生 with Sweet Home パッケージ版 + 同梱特典
  /x3 /v /w434C3A
```

### [ソフトハウスキャラ] (Softhouse Chara)
```
- 門を守るお仕事
  /HW-8*0@AFD0:PgsvTd.dll
```

### [みなとカーニバル] (Minato Carnival)
```
- 辻堂さんの純愛ロード
  /HAC@7D240:辻堂さんの純愛ロード.exe (v1.03-1.04)
  /HAC@71C10:辻堂さんの純愛ロード.exe (v1.01-1.02)
  /HAC@70E60:辻堂さんの純愛ロード.exe (web trial)
- 辻堂さんのバージンロード
  /HSN-4@41D07D
  Note: *with version 1.11 update patch to be announced.
```

### [BLUE GALE]
```
- パパラブ 2軒目 ～私たちみ～んな、お父さん大好き!～
  /HANC:-18@92984:papalove2.exe
```

### [アイル] (Ail)
```
- 僕の目の前で××される彼女
  /HB+1C@3A248:bokukano.exe
```

### [Yeti]
```
- ルートダブル
  /hsn-c@be00:rw.exe /pnrw.exe
```

---
## H-Codes (Set 8)

### [シルキーズ] (Silky's)
```
- ベロちゅー！ ～コスプレメイドをエロメロしちゃう魔法の舌戯～
  /HBNC@A73A6:AI6WIN.exe
```

### [Hammerheads]
```
- 熟女保健室～淫らな巨乳に誘われて～
  /HBC*0@4044F0 /KF
```

### [Circus]
```
- Infantaria XP
  /HSN-1C@4066D0
```

### [Groover]
```
- グリーングリーン CD-ROM版
  /HBN-1C*44362A@41B4EB
  Note: (GR2_P101.exe and GR2_P102.exe)
```

### [Unknown Developer] (From entry: 奪母姦)
```
- 奪母姦
  /HBC*0@469080 /KF
```

### [アストロノーツ・シリウス] (Astronauts Sirius)
```
- デモニオン ～魔王の地下要塞～
  /HWN-10@50F535 /kf
  Note: (The original entry had /kx, but /kf is more common and likely what was intended given other similar entries.)
```

### [Aries]
```
- 俺の彼女のウラオモテ
  /HBC@46a3e0
```

### [PeasSoft]
```
- ずっとつくしてあげるの!
  /HS10*0@442A75
```

### [ボクカノProject] (Bokukano Project)
```
- ボクスキ！ 男の娘（ボク）を好きって言ってよ！
  /HW-4*0@48CF5A
```

### [エウシュリー] (Eushully)
```
- 創刻のアテリアル
  /HAN44@46B6D9
  Note: Append01 + 1.01 update installed (says 1.01.0008 in main menu)
- 創刻のアテリアル
  /HAN44@46B5D9
  Note: Append01 + Append02 + 1.02 update
```

### [RUNE]
```
- ANGEL-CORE
  /HS14@43eab8 /PNanglcore.bin /Ftext@0
```

### [天狐] (Tenko)
```
- 英雄＊戦姫
  /HBN-8*4@4AD257 (v1.00)
  /HBN-8*4@4AD807 (v1.01)
  /HBN-8*4@4AD7E7 (v1.02a)
  /HBN-8*4@4AD897 (v1.03)
```

### [Unknown Developer] (From entry: M（エム）～お姉ちゃんの集中恥療！)
```
- M（エム）～お姉ちゃんの集中恥療！～
  /hsn+c@0042955f
```

### [アイル【チーム・Riva】] (Ail [Team Riva])
```
- 脅迫3～遙かに響く光と影の淫哀歌（うた）～
  /HA4@416DA0
```

### [bootup]
```
- あねいも×あねいも２　サマー愛ランド　～二組のカップル　皐月＆真奈美編～
  /HBC@455D80
```

### [Unknown Developer] (From entry: しすたー・すきーむ2 HD)
```
- しすたー・すきーむ2 HD
  /HB-C*0@4072F3
```

### [Unknown Developer] (From entry: ワルキューレロマンツェ)
```
- ワルキューレロマンツェ
  /HB18*0@4D2CD8
```

---
## H-Codes (Set 9)

### [すたじお緑茶] (Studio Ryokucha)
```
- 恋色空模様 after happiness and extra hearts
  /HA8@1141F0:koisora_ex_main.exe
```

### [Unknown Developer] (From entry: レイコ －囚われし女捜査員－)
```
- レイコ －囚われし女捜査員－
  /HA4@417340
```

### [Lillian]
```
- ティンクル☆くるせいだーす -Passion Star Stream-
  Note: version 1.01
  /HBC@48F3F0
  Note: set font in option 'MSゴシック'
```

### [すたじおちゃれん] (Studio Charen)
```
- 放課後催眠倶樂部
  /HAC@4276F0
```

### [G.J?]
```
- マドンナ ～完熟ボディCollection～
  /HA8:4@2E7BB:gdi32.dll
```

### [Unknown Developer] (From entry: BUNNYBLACK 2)
```
- BUNNYBLACK 2
  Note: version 1.01
  /hq40@b4ae:pgsvtd.dll
```

### [Unknown Developer] (From entry: 太陽のプロミア Flowering Days?)
```
- 太陽のプロミア Flowering Days?
  /HBC@46AA70
```

### [ルネ Team Bitters] (Lune Team Bitters)
```
- マリッジブルー「婚約者がいるのに、どうしてこんな男に……」
  /HSN0:24@470061 /KF /Fdialogue@1:420BC2;speaker@1:42178E;choices@1:421909
```

### [MBS TRUTH]
```
- OH！ステルス紳士 ～隠密ザーメン公開中出し学園～
  Note: You need to turn off the voice/text in sync option.
```

---
## H-Codes (Set 10)

### [Sugar Pot]
```
- ツクモノツキ
  /HA-C@40EEB0 /KS
```

### [Unknown Developer] (From entry: 処女と魔王とタクティクス ～魔王争奪戦～)
```
- 処女と魔王とタクティクス ～魔王争奪戦～
  /HW8@4F13C0 /KF
```

### [speed]
```
- 藍色ノ狂詩曲～Deep Blue Rhapsody～
  /HAN-18@40611A
```

### [Lump of Sugar]
```
- 学☆王 -THE ROYAL SEVEN STARS-
  /HA8:-14@4242B0
```

### [bootUP!]
```
- ふたあねHs ～若葉とあやめのLOVEエロ物語～
  /HBC@4A7580
```

### [TinkerBell]
```
- 喰ヒ人（くらいびと）
  /HAN-10@46D62A /pnkurahito.exe
```

### [Unknown Developer] (From entry: 鬼作 アニメーション追加完全版)
```
- 鬼作 アニメーション追加完全版
  Note: "edit AI6WIN.ini in the game directory then find
  [Font]
  Type =1
  change to
  Type =0"
```

### [etude]
```
- 七つのふしぎの終わるとき
  /HB18*0@4D2EC4
```

### [Leaf]
```
- White Album 2
  /HS0@4383F4
```

---
## H-Codes (Set 11)

### [平安亭] (Heiantei)
```
- 平凡な奥さんは好きですか～真面目な主婦をエッチ漬けにしちゃおう!～
  /HBC*0@469080 /KF /pnheibon.exe
```

### [TerraLunar]
```
- らくえん ～あいかわらずなぼく。の場合～
  /HS-4@41E48A
```

### [レッドレーベル] (Red Label)
```
- JK痴漢電車 ～通学中の処女
  /HBC*0@4044f0 /kf
```

### [TinkerBell]
```
- 凌成敗！～学園美少女制裁秘録
  /pnryousei.exe /HAN-10@46C24A
```

### [Unknown Developer] (From entry: 夢みる月のルナルティア)
```
- 夢みる月のルナルティア
  /HBN-C*0:-14@42D54D
  /HBN-C*0:4C@42D54D
```

### [Unknown Developer] (From entry: 牝贄女教師～私は彼の前で跪く～)
```
- 牝贄女教師～私は彼の前で跪く～
  /HB30@42EFCC
```

### [LiLiM]
```
- 魔法神姫リリカ
  /HA-C@40F2D0 /KS1
```

### [PULLTOP]
```
- 神聖にして侵すべからず
  /HS20@415F00
```

### [Delta]
```
- 獣魔戦姫エクセリア ～異種交配実験のはてに～
  /HBN0*0@414D0E (/pnMPE.exe) (1.2)
```

---
## H-Codes (Set 12)

### [Twinkle]
```
- D-EVE in you
  /HBN14*0@40CC68
```

### [Lime]
```
- ラブ☆キス
  /HB18*0@4D285C
```

### [Triangle]
```
- 魔法戦士フェアリーメイズ
  /HS4@4383C0 /pnFMS.exe
```

---
## H-Codes (Set 13)

### [bootUP!]
```
- あねいも エターナルエディション
  /HBC@55BE0:aneimoee.exe
```

### [Winters]
```
- KISS×400
  /HSN14:A8@00427F79
```

### [Rabbit]
```
- フローライトメモリーズ
  /HA8:-14@422DF0
  Note: generated by using ITH. If you like the speaker's name together with the rest of the dialogue, just delete the :-14 part.
```

### [M de PINK]
```
- しすたー・すきーむHD
  /HB-C*0@4072F3
  Note: For cracked exe that was with version I downloaded. (1.406.976 bytes) Remember to set text speed to max and disable slow text for voices.
```

### [コンプリーツ] (Complets)
```
- ツマ×ヘヴン
  /HBN-20*0:38@0040DBF4 /PNC4.exe
```

### [アニゼッタ] (Anizetta)
```
- 12+
  /HAN-10@4095C1 (1.2)
```

### [Apricot Cherry]
```
- えむっ娘シスターズ
  /HW-20@4B7C20 /KF
```

### [Sanctuary]
```
- 雅恋～MIYAKO～月詠の夢
  /HB38:14@420DC0
  Note: Works, besides the hook not getting the choices. The game engine seems to be the same as in Circus games, it should be possible to find a hook which also gets those but not sure if I find more time to search for it.
```

### [Syuntada]
```
- 高慢な奥さんは好きですか？～傲慢人妻教師の堕とし方～
  /HAN8@56D620 /Ftext@1
```

### [Chariot]
```
- 処女と魔王とタクティクス
  /HW8@4EF330 /KF
```

---
## H-Codes (Set 14)

### [Apricot Plum]
```
- なでしこドリップ /HW8:4*28@4BFD40 /KF
  Note: Set ingame message speed to max to make it work better.
```

### [キャラメルBOX ミルク味] (Caramel Box Milk Aji)
```
- 雨芳恋歌 「センセイ。わたし、もうオトナだよ……」 /HS4@7E6612 /KF /FDialogue@81B556
```

### [ブルゲLIGHT] (Bluegale LIGHT)
```
- JKと淫行教師SP～渡る世間はエロ教師ばかり～ /HA-C@492565
```

### [Key]
```
- Rewrite /HQN54@48693e /NH
```

### [CandySoft]
```
- もっと 姉、ちゃんとしようよっ！ アフターストーリー /HSN-4@4FF1B:mottoaneas.exe
```

### [ソフトハウスキャラ] (Softhouse Chara)
```
- 雪鬼屋温泉記 /HW-8*@8A30:PgsvTd.dll
```

### [脳内彼女] (Nounai Kanojo)
```
- 女装山脈 /HS-20:-4@425115 /KS4
```

### [げーせん18] (Gesen18)
```
- 出撃!!乙女たちの戦場～闇を切り裂く、にび色の徹甲弾～ /HBN-4*0@4FD1B5 (1.02)
```

### [Patissiere]
```
- まじかる☆ている /HSN10@414E6A
```

### [Unknown Developer] (From entry: 限界!?お兄ちゃん vol.2)
```
- 限界!?お兄ちゃん vol.2 /HAN-C@FBFDC /Ftext@1
```

---
## H-Codes (Set 15)

### [May-Be SOFT]
```
- へんし～ん!!!～ パンツになってクンクンペロペロ ～
  /HA8@766EA50A
```

### [Ume Soft]
```
- 野獸戰隊シバルカン
  /HAN-8@47AD30 /R
```

### [Delta]
```
- 魔法の守護姫アルテミナ
  /HSN-C@41CFD7
```

### [LoveJuice]
```
- 姉キス＠Home～恋するお姉ちゃんとえっちな日常～
  /HBN-1C*0@4170b7
- 姉キス＠Home～恋するお姉ちゃんとえっちな日常～
  /HB-4*0@43672D
  Note: leave text speed at slow or normal and most likely also want to use a substitution filter in TA to remove tab characters on line endings, with can be done using \t in the original text and leaving the replacement field empty.
```

### [softhouse-seal]
```
- 変態勇者の中出し英雄記
  /HS-8*4@46F7F7 /KF
```

### [aromarie]
```
- 蝶の毒 華の鎖 初回限定版
  /HWN-4*14:-4*0@5136F4
  Note: Seems like another game with Kirikiri issues, meanwhile ITH has no correct default hook you could link 2 threads together that should work. Alternatively /HWN-4*14:-4*0@5136F4 which fixes the issues due to Furigana but you'll get the speaker names twice infront of the text.
```

### [SEVEN WONDER]
```
- 太陽のプロミア
  /HBN18@6b12e:promia.exe
```

### [FIANCEE]
```
- 美衣菜△です！（みいなさん、かっけーです！）－Loveイチャ同居生活のススメ－
  /HBC*0@4044F0 /kf
```

### [DigiAnime]
```
- ふしぎ電車
  /HAN-4@40753C
```

---
## H-Codes (Set 16)

### [Unknown Developer] (From entry: 廻り巡ればめぐるときっ!?)
```
- 廻り巡ればめぐるときっ!?
  /KF1:200 /HSN-4@004B31ED
```

### [Silky's]
```
- 姫騎士アンジェリカ～あなたって、本当に最低の屑だわ！～
  /HAN8:58@41926C
```

### [Light]
```
- タペストリー -you will meet yourself-
  /HWN-4:-8@77C4F8 /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1 /pnmalie.exe
```

### [WAFFLE]
```
- インチキ霊媒師
  /HBN-4*0@E1BE08 or /HBN-4*0@46BE08
```

### [BLACKRAINBOW with ニコチンソフト]
```
- 新婚性活
  /HB4:B@58BF80
```

### [AUGUST]
```
- 穢翼のユースティア
  /HA8:-14@421530 /pnBGI.exe
```

### [RococoWorks]
```
- ヴァニタスの羊
  /HSN-4@41F4F9
```

### [Unknown Developer] (From entry: デュエリスト×エンゲージ 初回限定版)
```
- デュエリスト×エンゲージ 初回限定版
  /HA-1C@415C49
```

### [Willowsoft]
```
- お母さんがいっぱい!!
  /HBN10*0@401526 (1.07)
```

### [ブルゲLIGHT] (Bluegale LIGHT)
```
- JKと淫行教師6～ラブラブカップル寝取り編～
  /HA-C@492429
```

---
## H-Codes (Set 17)

### [TOMATO]
```
- 姫武者
  /HSN-20@434ec4
```

### [アニゼッタ] (Anizetta)
```
- 12+
  /HAN-10@009561:twplus.exe (1.1)
```

### [H+]
```
- つま恋。
  /HA8*0@45AC40
```

### [プラリネ] (Praline)
```
- デュエリスト×エンゲージ
  /HA-1C@415C49
```

### [La'cryma]
```
- fortissimo EXA//Akkord：Bsusvier
  /HSN-1C@41C3A2 /kf
```

### [Aries]
```
- とらぶる＠すぱいらる！
  /HBC@455BA0
```

### [DisAbel]
```
- オタカノ－こんなに可愛い彼女がオタクなわけがない
  /HBC*0@4044f0 /kf
```

### [MBS Truth]
```
- Doop Advance
  /HAN-C@4D7EAB
  Note: ITH 2.3 & AGTH v2011.5.9 support game directly
```

### [Unknown Developer] (From entry: JK交姦～そこのアナタ、娘の処女を貰ってください～)
```
- JK交姦～そこのアナタ、娘の処女を貰ってください～
  /HBC*0@4044f0 /kf /pn
```

---
## H-Codes (Set 18)

### [Wheel]
```
- ぶら ぶら
  /HW-4*14@5B9B1A
```

### [CandySoft]
```
- つよきす3学期
  /x3 /fText@44ee95:0 /pn
```

### [Crepe]
```
- 変身淫魔少女 かりん～淫らな悪魔はHがお好き～
  /HSC@4042B0 /KF
```

### [ABALONE KISS]
```
- 鬼孕の学園～スク水少女異種姦凌辱劇～
  /HBC@44C8B0
```

### [Aries] (Duplicate from Set 17)
```
- とらぶる＠すぱいらる！
  /HBC@455BA0
```

### [sol-fa-soft]
```
- プールのじかん スク水不要論2
  /HA4@62AE10
```

### [Lune Team Bitters]
```
- それでも妻を愛してる
  /HS-4*0@67C000 /KF /Fdialogue@41A54E;speaker@41AEBC;choices@41B037 (110325)
```

### [アイル【チーム・Riva】] (Ail [Team Riva])
```
- 脅迫DVG～囚われた明日～
  /HBN0*0:4@4423B9
```

### [可憐ソフト] (Karen Soft)
```
- なめなめっ！
  /HS-C@405E90
```

### [Crepe]
```
- 戦巫女あかり ～悪鬼妊娠凌辱の宴～
  /HSC@4044B0 /KF
```

---
## H-Codes (Set 19)

### [Unknown Developer] (From entry: ボクの目の前で親友に抱かれ腰を振る彼女―奴の言いなりにそのエロい肢体は開かれてい)
```
- ボクの目の前で親友に抱かれ腰を振る彼女―奴の言いなりにそのエロい肢体は開かれてい
  /HB4:-14@58BA80 or /HB4B@58BA80
```

### [八房の小部屋] (Yatsufusa no Kobeya)
```
- 淫魚妖伝
  /HAN-C#2@0:GDI32.dll:GetGlyphOutlineA /Ftext@1
```

### [ブルゲLIGHT] (Bluegale LIGHT)
```
- JKと淫行教師5～借金姉妹編～
  /HA-C@492429
```

### [Mink]
```
- あまふたサンドイッチ！！！ -AMA-AMA-FUTA-MATA-SANDWICH!!!-
  /HB-10*0@40712F
```

### [Princess Sugar]
```
- 姫様限定！～Princess Limited～
  /HB-C*0@44F094
```

### [Lune]
```
- 純潔★女神さまっ！「種付けしてください、ダンナさまっ！」
  /HS-4@408D7C /FChoices@18FD40;Text@18FE48 /KF (pg_upd110225.zip)
- 純潔★女神さまっ！「種付けしてください、ダンナさまっ！」
  /HSN-C@419E4B (pg_upd110225.zip)
```

### [catwalkNERO]
```
- 聖戦姫ヴァルキュア・シスターズ～淫闇（やみ）に堕ちたアイドル～
  /HA14:-14@4ACDC0 /pnREALLIVE.EXE
```

### [WAFFLE]
```
- 巨乳ファンタジー外伝 (Kyonyuu Fantasy Gaiden)
  /HB-1C*4:1E8@56E0EE
```

### [FrontWing]
```
- グリザイアの果実
  /HA8:-4@2E7BB:gdi32.dll
  Note: Use this code only if you find the speaker's name appearing at the end of the sentence to be annoying, and you're not using TAHelper.
```

---
## H-Codes (Set 20)

### [CLOCKUP]
```
- まかぱらっ!～あの世でめちゃモテ～
  /HS-20:-4@425641 /KS4
  Note: Code is for splitting the speaker's name and the dialogue, since /ks or /kf option doesn't work on the repetiton of the name part.
```

### [Lune]
```
- 純潔★女神さまっ！「種付けしてください、ダンナさまっ！」
  /HSN-C@41951B
```

### [WitchFlame]
```
- 蠱蝶の夢
  /HB-1C*0@415b1c, set text speed to slow or normal
```

### [Princess Sugar]
```
- [110225] 姫様限定！～Princess Limited～
  /HB-C*0@44F094
  Note: ITH only code, won't work with agth
```

### [Guilty]
```
- 種憑け村～白濁神、念仏講ノ儀～
  /HA-C:40@0:GDI32.dll:GetTextMetricsA /KS7 /w00432DBF:141414FF
  Note: in the game options - change this setting 文字装飾 -> change to the 3rd option (or see screenshot)
```

### [TinkerBell]
```
- 懲罰指導（おしおき）～学園令嬢更性計画～
  /HBC*0@467DF0 /pnoshioki.exe
```

### [Puzzlebox]
```
- 叔母の寝室
  /HBN-C*0:1C@42D640
```

### [Xuse]
```
- 詩乃先生の誘惑授業
  /HAN-20:C@422796
```

### [Light]
```
- カスタムＳＥＸＤＯＬＬ
  /HAN-20:C@415BFC
```

---
## H-Codes (Set 21)

### [3rdEye]
```
- BLOODY†RONDO
  /HA-C:40@0:GDI32.dll:GetTextMetricsA
```

### [コンプリーツ] (Complets)
```
- 診てくださいます？
  /HBN-20*0:38@40DF14
- ママクラブ参観
  /HBN-20*0:38@40DCF4
```

### [Mucadet]
```
- 令嬢の秘蜜
  /HBC*0@4044F0 /KF
```

### [Unknown Developer] (From entry: Cross Days)
```
- Cross Days
  /HWN-4@41EED8 /pnCrossDays.exe (1.00)
  /HWN-4@41F068 /pnCrossDays.exe (1.00a)
```

### [ぱじゃまソフト] (Pajama Soft)
```
- プリズム☆ま～じカル！ AFTER STORYS 迷える子羊といけにえの山
  /HSN-1C@46493E
```

### [Palette]
```
- もしも明日が晴れならば
  /HSNC@164A:system.dll /PN
```

### [NAVEL]
```
- 世界征服彼女
  /HAC@425800
```

### [little cheese]
```
- 黒と金の開かない鍵
  /HAN-C@43E95C /Ftext@1 (1.01)
  Note: V1.01 and set message speed to instant/max.
```

### [でぼの巣製作所] (Debonosu Seisakusho)
```
- 神楽幻想譚～妖かしの姫～
  /HBN-C*0@4B77CC (1.01e)
```

---
## H-Codes (Set 22)

### [SkyFish]
```
- よついろパッショナート！
  /HA8:-4@2E7BB:gdi32.dll
```

### [Nitroplus]
```
- Axanael
  /HA-8@48DE10 (1.10)
```

### [Bluegale Light]
```
- 妻交換～あいつのワイフと俺の嫁～
  /HAN1C@491E24 /Ftext@1
```

### [HammerHeads]
```
- 熟処女～私、はじめてなんです……
  /HBC*0@4044F0 /kf
```

### [Jitensha Sougyou]
```
- Lost Colors
  /HSN-4@41350A
```

### [Lump of Sugar]
```
- Hello，good-bye
  /HAC@425770
```

### [little cheese] (Duplicate from Set 21)
```
- 黒と金の開かない鍵
  /HAN-C@43E95C /Ftext@1 (V1.01)
  Note: V1.01 and set message speed to instant/max.
```

### [Circus]
```
- UNI.
  /HBN8@4217F9
```

### [TakeOut]
```
- 誘惑っぽい！
  /HBN-1C*0@414766
  Note: I think you need to set msg speed to slow/normal.
```

---
## H-Codes (Set 23)

### [Light]
```
- ルナそら
  /HAN-20@408d5e /pnmalie.exe
```

### [Circus]
```
- あるぴじ学園
  /HS-10@41BC65 /KF (v1.5)
  Note: A couple of odd behaviors with this code. Sometimes, a sentence with, say, one or two words will still repeat a couple of times, despite the /kf option. Also, whenever the texts change into a larger font (for showing characters are yelling), there's a "@|" symbol in front of the sentence.
```

### [Studio Ring]
```
- ななみとこのみのおしえてA・B・C HDワイドスクリーン版
  /HW8:-4@433560 /KF /pnSiglusEngine.exe
```

### [Unknown Developer] (From entry: I女の聖域-)
```
- I女の聖域- (This title might be part of the note for the previous entry or a separate game)
  /HB18*4@0:ChipmunkSpriteEngine.dll:SP_SetTextSprite /pnMankuchu.exe
  Note: -Worked with WinXP, don't know how well it works with other OS.
  -Picks up very little during the battle scene. Looks like some of the texts are on a different thread.
  -Speaker's name and dialogue are split up. For some reason, the speaker's name thread\nisn't picking up the actual name, but some random words.
  -During battle, if you decide to return to the title scene and reload, agth will stop picking up any texts.
```

### [Fizz]
```
- さくらのしっぽ～さくらテイルファンディスク～
  /HB4*0@572920
```

### [TinkerBell]
```
- 魍魎の贄
  Note: No need for custom hook. There's a group of four checkboxes in text settings, by default two of them are checked (1st and 4th as I remember). Uncheck them all.
```

### [Unknown Developer] (From entry: さくらテイル-the tale of cherry blossoms septet-)
```
- さくらテイル-the tale of cherry blossoms septet-
  /HB4*0@57d2a0 (v1.02a)
```

### [M de PINK]
```
- りぼる・さもなー Revolving Summoner
  /HBN-10*0:-20@40708F
  Note: Turn "Match text speed with voice length(音声の長さに合わす)" off.
```

### [Palette]
```
- MERI+DIA～マリアディアナ～
  /HS-1C@402458 /fText@00000048:00000000 /kf
```

### [オーバードーズ] (Overdose)
```
- 母乳が染み出る愛娘 愛美
  /HBN-1C*0@415e57
  Note: Text speed must be normal or slow.
```

---
## H-Codes (Set 24)

### [オーバードーズ] (Overdose)
```
- 母乳が染み出る愛娘 愛美
  /HBN-1C*0@415e47 (v1.1)
  Note: Now it's the same as for their previous game. Text speed must be normal or slow.
```

### [May-Be SOFT]
```
- 学園☆新選組！～乙女ゴコロと局中法度～
  /HB-4@40a14a
```

### [sprite]
```
- 恋と選挙とチョコレート
  /HSN-4@B14B4:dirapi.dll /PN
```

### [Xuse]
```
- [101029] 聖なるかな外伝・精霊天翔 ～Crystal Friends～
  /HW-4*14:-4*0@521DD8
  Note: actually kirikiri engine.
```

### [アトリエかぐや Honky-Tonk Pumpkin] (Atelier Kaguya Honky-Tonk Pumpkin)
```
- [100924] キラリ☆南国小麦色 ～潮吹きパラダイスへようこそ！～
  /HB8@41E4A0
```

### [あかべぇそふとつぅTRY] (Akabeisoft2 TRY)
```
- [101028] 俺サマのラグナRock!?
  Note: Hook of this game is a little tricky, need to reverse from mscorlib.ni.dll. If that description seems meaningless to you, latest ITH will do that for you.
```

### [Atelier Kaguya]
```
- 他の男の精液で孕んでもいいですか…？3 僕の知らない所でイキ狂っていた最愛彼女―生真面目な学園副会長―
  /HB8:-14@594280
```

### [APRICOT]
```
- 桜花センゴク～信長ちゃんの恋して野望!?～
  /HW-20@4C4DA0 /KF
```

### [Sugar pot+]
```
- お嫁さん候補があらわれた！ コマンドは？
  Note: You just need to disable antialiasing. It's in upper menu (System) -7th - 3rd - 1st options.
```

### [SAGA PLANETS]
```
- キサラギGOLD★STAR
  /KF /HW8@439690 /pnSiglusEngine.exe
  Note: The only problem is that the game ignores text speed setting (or maybe that's intro only?) I used nocd from one of game threads.
```

---
## H-Codes (Set 25)

### [Unknown Developer] (From entry: SCHOOL DAYS HQ)
```
- SCHOOL DAYS HQ
  /KF32:16 /HQN30@43B66B
```

### [ALL-TiME]
```
- 普通じゃないッ!!
  /HW-C@6e28c0:mscorlib.ni.dll /pnigs_sample.exe (Win7, .net 2.0.50727)
  /HW-C@6e2710:mscorlib.ni.dll /pnigs_sample.exe (WinXP, .net 2.0.50727)
```

### [ケロQ] (KeroQ)
```
- 二重影
  /HSN-C@413FDC
```

### [Unknown Developer] (From entry: 必殺シゴキ人)
```
- 必殺シゴキ人～学園高慢女斬り
  /HBN-1c*0@4158E9
  Note: don't forget to set text speed to slow or normal
- 必殺シゴキ人～神聖巨乳巫女斬り
  /HBN-1c*0@415CF9
  Note: don't forget to set text speed to slow or normal
- 必殺シゴキ人～院内巨乳天使斬り
  /HBN-1c*0@415D99
  Note: don't forget to set text speed to slow or normal
```

### [ミンク] (Mink)
```
- 破談屋
  /HBN-4*0@42AF06 /PNhadan.exe
- 破談屋
  /HBN-4*0@42AF96 /PNhadan.exe
  Note: hadan_update_001.exe
```

### [Jellyfish]
```
- Lovers
  /HA-C@27A8A:ism.dll /PNlovers.exe
```

### [Abel Software]
```
- 萌恋維新！
  /KF /HB-4@4042B2
```

---
## H-Codes (Set 26)

### [ALcot]
```
- Vestige ―刃に残るは君の面影―
  /HB8*0:d4@0:GDI32.dll:GetTextExtentPoint32A
```

### [Unknown Developer] (From entry: 催眠学級)
```
- 催眠学級
  /HANC:18@42F362
```

### [EX12]
```
- 他人妻～誘淫～
  /HW-4@41A3B0
```

### [Bluegale Light]
```
- JKと淫行教師4
  /HA-C@492168 /KS /pnjk4.exe
```

### [Unknown Developer] (From entry: fortissimo//Akkord:Bsusvier)
```
- fortissimo//Akkord:Bsusvier
  /KF /HSN-1C@41AAB6 (v1.0.0.1)
```

### [Unknown Developer] (From entry: タイムリープぱらだいす)
```
- タイムリープぱらだいす
  /HSN-4@00461713 (v2.0)
```

### [Unknown Developer] (From entry: お姉ちゃんメイドのご奉仕タイム～秘密なんだからね～)
```
- お姉ちゃんメイドのご奉仕タイム～秘密なんだからね～
  /HA-C@41a10c /pnOneechanMaid~.exe
```

### [Unknown Developer] (From entry: らぶいも ～お兄ちゃんエッチしよ～)
```
- らぶいも ～お兄ちゃんエッチしよ～
  /HA-C@41a10c /pnRT_LOVEIMO.EXE
```

### [catwalkNERO]
```
- 性器雇用
  /HAN-C:-14@448278 /pnRealLive.exe
```

### [Unknown Developer] (From entry: fortissimo//Akkord：Bsusvie)
```
- fortissimo//Akkord：Bsusvie
  /HSN-320@420050
```

---
## H-Codes (Set 27)

### [Waffle]
```
- 巨乳魔女
  /HBN-4*0@57c4c8
- 巨乳魔女
  /HBN-4*0@17c4c8:巨乳魔女.exe
  Note: I didn't check any other waffle games but I think this method will work on all of them - substract 0x400000 from XP's /h address (that way you get relative address) and make /H code with this relative offset and game's exe.
```

### [Honky-Tonk Pumpkin]
```
- キラリ☆南国小麦色～潮吹きパラダイスへようこそ！～
  /HB8@41E4A0
```

### [Muscadet]
```
- Rakuen no Rukia
  /HBC*0@4044F0 /KF
```

### [Purplesoftware delight]
```
- Orange Memories：/HSN-4@41F4FE
```

### [ぱじゃまソフト] (Pajama Soft)
```
- プリズム☆ま～じカル PRISM Generations
  /HS-20@46486C
  Note: Hook has some issues with lines that have furigana, if you want to have that fixed use Translation Aggregator and its addon TAHelper and enter \\\\{;\\|.*?\\\\} into the remove from sentence field from TAHelper and check the checkbox infront of it.
```

### [神無月製作所・妻魅組] (Kannazuki Seisakusho Tsumami-gumi)
```
- 姦交バスツアー～色情に染められた花嫁～
  /HA4@41A2F8
```

### [Nitroplus]
```
- Soukou Akki Muramasa Janen Hen
  /HA-8@470160
```

### [milk-pai]
```
- でれスク
  /HAN4@41A2F8 /Ftext@1
```

### [Nitroplus]
```
- Steins;Gate
  /HAN4:1C@49DC26 (v1.1)
```

---
## H-Codes (Set 28)

### [Etoiles]
```
- Elle: PrieR ～しあわせの欠片をさがして～
  /HS4@42E130
```

### [light]
```
- まじのコンプレックス
  /HWN-4:-8@E168:tools.dll /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1 /PN
```

### [Unknown Developer] (From entry: 邪!! ぱんでみっく)
```
- 邪!! ぱんでみっく
  /HA-10:48@4ABBB8
- 邪!! ぱんでみっく
  /HAN-C:-14@448878
```

### [Troy]
```
- Reverse desire～裏返る欲望～
  /HBNC*0@2120:sfe.dll /PN
```

### [Frill]
```
- 姫剣士エステル -孕ませ王２-
  /KF /HW8@432d10 /pnSiglusEngine.exe
```

### [Unknown Developer] (From entry: ラブ・バインド 初回限定版)
```
- ラブ・バインド 初回限定版
  /HAN-C:-14@448278
```

### [etude]
```
- 秋空に舞うコンフェティ!
  /HAN1C:14@49234C /KS6
```

### [Guilty]
```
- 癒しん母 The Motion～世界で一番好きなひと～
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A /PN
  Note: Actually I figured out an approach last year and it seems /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A works as generic code for those double sentence games (shows 椎名里緒 v2.47 in the title when you start the game).
```

### [さんぼん堂] (Sanbon-do)
```
- 幻想少女大戦紅
  /HSN-20:-4@4055C5
  Note: Pretty annoying engine. Can't find a really good hook. Try /HSN-20:-4@4055C5 I could image with some additional substitution (to remove useless trash and convert \n to a line break) like Translation Aggregator offers, you could get a workable versions of the dialogues.
```

---
## H-Codes (Set 29)

### [Unknown Developer] (From entry: Soul Link Ultimate)
```
- Soul Link Ultimate
  /HA-20@48D8B7 /W12F9A8:00000000 /PN
```

### [コンプリーツ] (Complets)
```
- じゅーしぃエイジ
  /HSNC:28@410BC1
```

### [Mirai-soft]
```
- 夢をもう一度
  /HBN10*0@40D1A0
```

### [DISKDREAM]
```
- エンドレスセレナーデ
  /HS-4@456CEF /KF (v1.01) or /HB4*0@456C3C (v1.00)
  Note: To quote myself from another post about getting this game to run: "エンドレスセレナーデ doesn't seem to work under NT by default. It complains with an "BITMAP1 ﾘｿｰｽが見つかりません." Error msg. On checking what the program is doing it seems to first load a resource named BITMAP2 which works fine, but then fails to do so with BITMAP1. I just went ahead and renamed BITMAP1 to BITMAP2 and that seems to do it. BITMAP2 is the end of line kinda like > symbol so maybe BITMAP1 was somehow related to it as well.
  Open Endless.exe in a hex editor, search for "BITMAP1" and replace it with "BITMAP2", i.e. to fix unpatched/v1.00 Endless Serenade modify the .exe as follows:
  Endless.exe @ 00055CC6: 31 -> 32
```

### [ブルゲLight] (Bluegale Light)
```
- JKと淫行教師3 ～万引き少女編～
  /HA-C@493351 /pnjk3.exe
```

### [Crepe]
```
- このわたくしが…こんな触手で絶頂なんて!～触手びしょ濡れ高慢JK・杏珠～
  /HSN0:C@486678 /Ftext@1:4413F3;choices@1:4423C0;names@1:440D94
```

### [Moonstone]
```
- あした出逢った少女
  /HA18:24@405930
```

### [SHChara] (Softhouse Chara)
```
- Bunny Black
  /hw10@199c0:PgsvTd.dll: (v1.11)
- Bunny Black
  /hw10@19980:PgsvTd.dll:
```

### [Debonosu] (Debo no Su Seisakusho)
```
- 空を仰ぎて雲たかく
  /HBN-C*0@4A75D8
```

---
## H-Codes (Set 30)

### [Love Juice]
```
- オレの姉ちゃん。～オレは姉ちゃんのオモチャじゃないっ！
  /HB-4*0@4331ED
  Note: Text speed needs to be set to slow or normal. Looks like they still have the same engine like back here: http://www.hongfire.com/forum/showthread.php?t=36807&p=1859260#post1859260
```

### [Unknown Developer] (From entry: 女医さんのお言いつけっ!!～エッチな診察してあげる♪～)
```
- 女医さんのお言いつけっ!!～エッチな診察してあげる♪～
  /HAN-C:-14@448878
```

### [Unknown Developer] (From entry: ツンデレ★Ｓ乙女)
```
- ツンデレ★Ｓ乙女
  /HBN10*0@4637FB /Ftext@1
```

### [Unknown Developer] (From entry: 聖なるかな・外伝 精霊天翔～壊れゆく世界の少女たち～)
```
- 聖なるかな・外伝 精霊天翔～壊れゆく世界の少女たち～
  /HWN-4*14:4@4CD4CC
```

### [Guilty+]
```
- Ran→Sem ~Hakudaku Delmo Tsuma no Miira Tori~
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A
  /Ftext@4339A2:0;choices@4339A2:ffffff
  Note: Message speed needs to be set to something slower then
  fastest(instant) or text wont show up in agth.
  Note: As with earlier guilty titles
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A works with this game. The /F
  part below varies from game to game (leave it out, if you try it with a
  different game), but helps to remove all useless threads.
```

### [Unknown Developer] (From entry: 最果てのイマ)
```
- 最果てのイマ
  /HSN-4@4DA711
```

### [あっぷりけ] (Applique)
```
- 黄昏のシンセミア 初回限定版
  Note: 文字表示(C) - > フォント(F) change the font to ＭＳ ゴシック select the kirikiri
  thread - set text speed to fastest
```

### [Lose]
```
- ゴスデリ -GOTHIC DELUSION-
  Note: 文字表示(C) - > フォント(F) change the font to ＭＳ ゴシック select the kirikiri
  thread - set text speed to fastest
```

### [ROOT]
```
- PARA-SOL
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
```

### [Kogado]
```
- Shirogane no Cal to Aozora no Jouou V1.1
  /HBN24:-14@41C1FB /KF
```

---
## H-Codes (Set 31)

### [Red Label]
```
- Oukoku Kyousei Seijoku Oujo
  /HBN0:3C@40458D /Ftext@1 /KF /PN
```

### [StudioMebius]
```
- 友達以上恋人未満 ～HD Plus Edition～
  /HAN-C:-14@448928 /pnreallive.exe
```

### [Unknown Developer] (From entry: 魔王の淫具)
```
- 魔王の淫具
  /HW-C@6e20e0:mscorlib.ni.dll
  /HW-C@6E29A0:mscorlib.ni.dll
  Note: If anyone has another version - try searching for 8B 4E 0C 0F B7 55 F0
  FF (there should be three, take one that have four MOV operators after
  it), then scroll a few lines up - there should be starting bytes (see
  Freaka's post - 55 8B EC 57 56 53 83 EC etc)
  C:\WINDOWS\assembly\NativeImages_v2.0.50727_32\mscorlib\0309936a8e1672d39b9cf14463ce69f9\mscorlib.ni.dll
  Sequence:
  55 8B EC 57 56 53 83 EC 08 89 55 F0 8B F1 83 7E 04 00 0F 84 C2 00 00 00
  dll-Base in Memory = 790C0000 which makes it an offset 6E2220 to the
  target address, but checking the dll itself in a hex-editor reveals it
  at 6DFE20.
```

### [Unknown Developer] (From entry: Soranica Ele)
```
- Soranica Ele
  /HQ-8@5157A1
  Note: Cracked
```

### [BLACK CYC]
```
- 闇の声 特別編
  /HSN-1C@414224
```

### [TerraLunar]
```
- 星刻のかなた
  /HAN-C@40FEE8
```

### [Unknown Developer] (From entry: Baldr Force EXE)
```
- Baldr Force EXE
  /HSN18@4637F6 (v1.10)
```

### [Triangle]
```
- エグゼクタースクリプト
  /HSN4@435F40 /PNEXS.EXE
```

### [Unknown Developer] (From entry: 処女はお姉さまに恋してる　2人のエルダー)
```
- 処女はお姉さまに恋してる　2人のエルダー
  /HSN8@415CF0 (v1.1)
```

### [KEY]
```
- クドわふたー
  /HAN-C:-14@448878 /PN
```

---
## H-Codes (Set 32)

### [Abelsoftware(アーベルソフトウェア)]
```
- デュアル・エム ―空の記憶―
  /HSC@4044F0 /KF
```

### [OVERDRIVE]
```
- DEARDROPS
  /HAC@423790
```

### [ad：lib]
```
- ボクラはピアチェーレ 初回版
  /HSC@4044F0 /KF
```

### [あかべぇそふとつぅ(Akabeesoft2)]
```
- 光輪の町、ラベンダーの少女 初回版
  Note: go to (Menubar) 文字表示(C) -> フォント(F) to bring up font dialog, then
  choose another font such as ＭＳゴシック then close the dialog. it should be
  enough to bring up the kirikiri threads in agth on next run.
```

### [Unknown Developer] (From entry: JKと淫行教師2～痴漢電車編～)
```
- JKと淫行教師2～痴漢電車編～
  /HA-C@48D6AD /pnjk2.exe
  Note: For cracked version, jk2.exe size is 1,667,072
```

### [アイル【チーム・SOIF] (Ail [Team SOIF])
```
- 魔ヲ受胎セシ処女（おとめ）ノ苦悦2
  /HS10@41320C /PNmajutai2c.exe
  Note: (or majutai2.exe if not using the nodvd)
```

### [Sugarpot]
```
- はぴ☆さま！ ～宮乃森村へようこそ！
  Note: (game File menu) システム-> 設定 -> フォント->アンチエイリアスあり <(Uncheck)
  // start game again with agth and should hook all text normally
```

### [Unknown Developer] (From entry: ゴニン!? ～ピタリと的中！強制占い♪～)
```
- ゴニン!? ～ピタリと的中！強制占い♪～
  /HA-18*0@41F810
```

### [Silky's]
```
- 風紀委員長 聖薇
  Note: Edit AI6WIN.ini file in game folder, Under [font] change "Type = 1" to
  "Type = 0" That should disable caching and there will be a thread with
  full text.
```

### [caramel-box]
```
- 廻り巡ればめぐるときっ！？
  /KF1:200 /HSN-4@004B31ED
```

---
## H-Codes (Set 33)

### [WAFFLE]
```
- インチキ霊媒師
  /HBN-4*0@46BE08
```

### [WhiteSoft]
```
- りとるらびっつ－わがままツインテール
  /HB8*0:2@0:GDI32.dll:GetTextExtentPoint32A
```

### [Lump of Sugar]
```
- PrismRhythm-プリズムリズム-
  /HAC@423790 or /HS4@425510 (for ruby text)
```

### [ぱわふるソフト] (Powerful Soft)
```
- よう∽ガク～妖学園の未来は会長次第!～
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
```

### [Unknown Developer] (From entry: 主に交われば朱くなる)
```
- 主に交われば朱くなる
  /X /W45BE4B
```

### [Unknown Developer] (From entry: Incest lover ～ママと母の秘蜜)
```
- Incest lover ～ママと母の秘蜜
  /HA-C@F45F8
```

### [Unknown Developer] (From entry: 優良健康生徒の超羞恥体験)
```
- 優良健康生徒の超羞恥体験
  /HA-C@F804C
```

### [Muscadet]
```
- 満淫車両～制服生出しイキ放題～
  /HBC*0@4044F0 /kf
```

### [bootUP!]
```
- あねいも～～夏の残照～
  /HBC@44BA10
```

### [willow]
```
- Okaa-san ga Ippai
  /KS /HBN10*0@4015A6 (v1.06)
```

---
## H-Codes (Set 34)

### [Tinkerbell]
```
- あねぼく～お姉ちゃんは美人3姉妹～ /HBC*0@463220 /pnaneboku.exe
```

### [Lime]
```
- ぺたぺた
  Note: Also, for Lime's latest, ぺたぺた (Petapeta), for now, you have to turn off
  anti-alias option in order for agth to work. Click on F9 tab on top,
  then select the middle tab of the 3 next to Config, the top box on the
  upper right (right next to your font selection) is for anti-alias.
  Uncheck that, and agth should be able to catch the texts.
```

### [PrimRose]
```
- 超時空爆恋物語 ～door☆pi☆chu～ /HS4@424BD0
```

### [bootUP!]
```
- FUTA・ANE～ふたあね～bitter＆sweet /HBC@454DC0 /pnFUTAANE.exe
- あねいも2・あねあねミニFD /HBC@4549E0
```

### [CIRCUS]
```
- ことり Love Ex P /HBC*0@421440
```

### [Clockup]
```
- ノーブレスオブリージュ /HSN-C:-C@405DE7
```

### [VEGA]
```
- Chin Manai Tsuki /HB-4*0@404F23 use with game.exe
```

### [ブルゲLIGHT] (Bluegale LIGHT)
```
- JKと淫行教師 ～夜回り先生編～ /HA-C@48BDCD /pnJK.exe
```

### [Unknown Developer] (From entry: Cross Days)
```
- Cross Days /HWN-4@41F068 /pnCrossDays.exe (v1.00a)
```

---
## H-Codes (Set 35)

### [yuukari]
```
- Black-Teacher-Core
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
```

### [Unknown Developer] (From entry: 他の男の精液で孕んでもいいですか～女子校生寝取られ事情～)
```
- 他の男の精液で孕んでもいいですか～女子校生寝取られ事情～
  /HB8:-14@593420 /KF
```

### [Guilty+]
```
- 馴染みのオバちゃん～バツイチ熟女と淫乱未亡人～
  /HB8*0:2C@0:GDI32.dll:GetTextExtentPoint32A
```

### [Shallot]
```
- Happy Wardrobe (ハッピーワードローブ)
  /HW8*0:D4@0:GDI32.dll:GetTextExtentPoint32W /KS /pnhwr.exe
  Note: start the game through the loader exe, then run agth
```

### [Unknown Developer] (From entry: 家族監禁 ～愛妻さやか、奈落の底の快楽人形～)
```
- 家族監禁 ～愛妻さやか、奈落の底の快楽人形～
  /HA-C@41A190
```

### [studio ryokucha]
```
- 恋色空模様
  /HAN10:6C@6F7A30 /KS /w1
```

### [Lime]
```
- Maximum Magic（マキシマムマジック） Quirk Of Destiny -Limited Edition-
  /HS204:-8@4E6A14 /KF /pnMaximumMagic.exe
```

### [mana]
```
- メアメアメアSP（Sister Plus）
  /HW8@4C5C40 /KF
```

---
## H-Codes (Set 36)

### [ルネ] (Lune)
```
- 悪の女幹部「この私にオシオキだと!? ふざけるなっ！」
  /HA-C@419A3C
```

### [すたじお緑茶] (Studio Ryokucha)
```
- 恋色空模様 初回版
  /HSN8@4D3AC0
- 恋色空模様 初回版
  /HA-4@6F7E20 /KS
```

### [ケロQ] (KeroQ)
```
- 素晴らしき日々～不連続存在～
  /HAC@423390
```

### [Crepe]
```
- 先生、膣内に触手を挿入れて!～学費をカラダで支払う女子校生 未枝～
  /HBC*0@4044F0 /KF
```

### [Unknown Developer] (From entry: 傷モノの学園（発禁版）)
```
- 傷モノの学園（発禁版）
  /HA18@4211B0
```

### [Lapis lazuli]
```
- Areas～恋する乙女の3H
  /HA-10:58@4ABD58
```

### [0verflow]
```
- Cross Days（クロスデイズ） 初回限定版
  /HWN-4@41EED8
```

### [Frill]
```
- Frill Extreme Collection -痴漢専用車両アートワークス＆ファンディスク-
  /HA4@47DCB7
```

### [ruf]
```
- セイレムの魔女たち
  /HA-C@426408
```

---
## H-Codes (Set 37)

### [NekoNekoSoft]
```
- ねこねこファンディスク3
  Note: /x3 is OK. Will find in one _mbsinc thread.
```

### [Hecate]
```
- お姫様は、ぱんてられお
  Vista: /HW-4@20CD80:mscorlib.ni.dll
  7: /HW-4@20CD60:mscorlib.ni.dll
```

### [DIVA]
```
- こいらぼ[KOI-LABO.]初回限定版
  /HA-20:-10@13F970:resident.dll
```

### [アーベルソフトウェア] (Abel Software)
```
- 恋刀乱麻～わたしが、アナタを、守るから!!!～
  /HB-4@4042B2 /KF
```

### [WAFFLE]
```
- 右手がとまらない僕と幼なじみの姉妹
  /HB8*4@C3F65:右手がとまらない僕と、幼なじみの姉妹.exe
  Note: /pn is recommended
```

### [Tinkerbell]
```
- 孕ノ胤
  /HBC*0@463220 /PN
  Note: Or use the following trick by ozdog. Go to system setting and turn off font antialiasing effect. Add /KS7.
```

### [skysphere]
```
- 翼をください
  /HWN8:20@0:GDI32.dll:GetCharABCWidthsW
```

### [P-factory]
```
- 甘い刻 - Sweet Time -
  /HS4@424BD0
```

### [Lune]
```
- 小公女シャルロット
  /HA-C@4199C0
```

### [Honky-Tonk Pumpkin]
```
- 姉です。
  /HB8@41DA80
```

### [Bluegale]
```
- ふくびき！
  /HA18@48C0A4
```

### [Unknown Developer] (From entry: 癒しん母 The Motion～世界で一番好きなひと～)
```
- 癒しん母 The Motion～世界で一番好きなひと～
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
  Note: Actually I figured out an approach last year and it seems
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A works as generic code for
  those double sentence games (shows 椎名里緒 v2.47 in the title when you
  start the game).
```

### [Unknown Developer] (From entry: コープスパーティー ブラッドカバー)
```
- コープスパーティー ブラッドカバー
  /HB-8*0:-1C@4085B9 /KS3 /Ftext@1
  Note: after selecting the correct hook that shows the onscreen text, minimize
  agth if the game slows down
```

### [purple heart]
```
- Polygon Love 2 Okawari
  /HS-C@403A62 /KF
```

### [morning]
```
- 性奴交換指導 ～とある学園長の欲望劇
  /HBN-C*0@41A6B4 /Ftext@1
```

### [Mink]
```
- Sister Scheme2
  /HB-C*0@40706F
```

### [Unknown Developer] (From entry: bruns.exe)
```
- bruns.exe
  /HW4@0:msvcp80.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
  /HW4@0:msvcp90.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
  Note: As with other bruns.exe games
  /HW4@0:msvcp80.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
  works (if they have msvcp80.dll otherwise replace that by mscvp90.dll)
```

---
## H-Codes (Set 38)

### [Unknown Developer] (From entry: Ripple～ブルーシールへようこそっ～)
```
- Ripple～ブルーシールへようこそっ～
  /HBN-8@4043C5 (v1.0)
  /HBN-8@404ED5 (v1.2)
  Note: To switch from full screen mode to window mode press F4.
```

### [Ciel]
```
- そらのいろ、みずのいろ
  /HB10*0:-14@0:GDI32.DLL:TextOutA
```

### [Shakunage]
```
- みみをすませば
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A (1.01)
  Note: for game based on 椎名里緒
```

### [Muscadet]
```
- 熟恋願望 秘めた想いと淫らな愛のカタチ
  /HBC*0@4044F0 /KF or /HB4:-14@404290 /KF
  Note: use /pn
```

### [Apricot]
```
- MapleColors2
  /HA8@5472F0 /KF (v1.01)
```

### [ういろうそふと] (Uiro Soft)
```
- お母さんがいっぱい!! 限定ママBOX
  /HBN10*0@401476 /KS (v1.03)
- お母さんは俺専用！ ～あなたの初めてを…母さんが貰ってア・ゲ・ル～
  /HSN-4@43F3DA
```

### [Unknown Developer] (From entry: 姫騎士壊妊～子宮征服計画～)
```
- 姫騎士壊妊～子宮征服計画～
  /HWN-4*0@5DD906 /Ftext@1
```

### [130cm]
```
- 鬼まり。
  /HA-10:58@4ABD18 /pnreallive.exe
  Note: remove :58 if you want names.
```

---
## H-Codes (Set 39)

### [Xuse]
```
- 聖なるかな外伝・精霊天翔～壊れゆく世界の少女たち～
  /HWN-4*14:4@4CD4CC
  Note: I think /pn is necessary though I didn't test this code without pn.
```

### [Unknown Developer] (From entry: マインドコントロール・ラバー)
```
- マインドコントロール・ラバー
  /HAN-C@F81BC /Ftext@1
```

### [Hearts]
```
- メルクリア～水の都に恋の花束を～
  /HW-4*0@5D3132
```

### [Little Witch]
```
- シュガーコートフリークス
  /HBN-8*4@4ACEE1 /Ftext@1
```

### [Antique]
```
- カミ☆たま－神様のたまご－ 初回限定版
  /HS48@404B40 /KF5:100
```

### [An*tique]
```
- あそび塾
  /HSN8@40A7A0
```

### [Unknown Developer] (From entry: ド田舎ちゃんねる5:)
```
- ド田舎ちゃんねる5:
  /HAN-C:-14@4488E8
```

### [Unknown Developer] (From entry: なりきりバカップル:)
```
- なりきりバカップル:
  /HBN-8*0@44B684
```

### [Apricot]
```
- ゆにばる！ PARANORMAL GIRLS STRIKE!!
  /HW-20@49AE30 /KF
```

### [Unknown Developer] (From entry: シグナルハートぷらす)
```
- シグナルハートぷらす
  ver. 1.2
  /HB-C*0@48B368
```

### [Unknown Developer] (From entry: alice 2010)
```
- alice 2010
  /HBN1C*4@0:StoatSpriteEngine.dll:SP_SetTextSprite /Ftext@1
```

### [Unknown Developer] (From entries: Sister Scheme, Kanojo x Kanojo x Kanojo)
```
- Sister Scheme: /HB10*0:2@422B50
- Kanojo x Kanojo x Kanojo: /HSC@4044D0 /KF
```

---
## H-Codes (Set 40)

### [RococoWorks]
```
- airy[F]airy
  /HSN-1C:4C@4150AA /KF1:200
```

### [Studio e.go!]
```
- トキノ戦華
  /X /kf5:200 /W5e62b7
```

### [Front Wing]
```
- ふたごえっち
  /HB4*0@43FBA8 /pnADV.exe
```

### [Nitro+]
```
- 続・殺戮のジャンゴ ─地獄の賞金首─
  /HA-C@451DD4
```

### [Lilim]
```
- 鳳凰戦姫　舞夢
  /HAN4@411850 /KS /Ftext@1
```

### [Cage]
```
- ナイショのよりみち
  /HA-10@44B450
```

### [mini]
```
- 夏菓子
  /HB-4@4C971F
  Note: Bloody annoying engine. I haven't found a good hook without modifying
  the executable. With the attached .exe /HB-4@4C971F should give you a
  good hook. (Attached .exe refers to a potential file linked on the original wiki, not included here).
```

### [FULLTIME]
```
- エロ医
  /HSN4:C*44@4ED953 /KF
```

### [light]
```
- dies irae append version
  /HWN-10*-8:-10*10@46AE01 /KF
  Note: (Its for the last update of the FULL version)
```

### [black cyc]
```
- 夢幻廻廊 Mugen Kairou
  /HSN14@412EF0 /Ftext@1
  Note: Set text output speed to max or you'll get text repetitions.
```

---
## H-Codes (Set 41)

### [Unknown Developer] (From entry: 鈴夏のメロディー)
```
- 鈴夏のメロディー
  /HAN-C@F81BC /Ftext@1
```

### [Unknown Developer] (From entry: ザーメン セキュリティ 2009)
```
- ザーメン セキュリティ 2009
  /HBNC*0:20@42CD70 /KS7
```

### [Leaf]
```
- Routes CD
  NOCD: /HS1C@476999 /KF
```

### [Digital Lover]
```
- School Captain 会長候補はご立
  /HWN10@49DC80 /Ftext@1
```

### [Morning Star]
```
- 淫触の魔法少女テンタクル！
  /HW4@0:msvcp90.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z /pnbruns.exe
```

### [light]
```
- Dies irae～Acta est Fabula～
  /HWN-10*-8:-10*10@46AE28 /KF
  Note: update
```

### [willow]
```
- お母さんがいっぱい!!
  /HBN10*0@401796 /KS (v1.00)
  /HBN10*0@401476 /KS (v1.01)
```

### [Unknown Developer] (From entry: ほしうた～Starlight Serenade～)
```
- ほしうた～Starlight Serenade～
  /HBN-C*1@4E8BA1 /Ftext@1
```

---
## H-Codes (Set 42)

### [milksoft]
```
- かわれる姉妹
  /HA-C@E81BC:かわれる姉妹.exe
```

### [light]
```
- Dies irae～Acta esta Fabula～ －Scharlachrot Grun－
  /HWN-10*-8:-10*10@46BF32 /KF
```

### [Q-X]
```
- 幻月のパンドオラ
  /HW-4*0@5D313E
  Note: Turn text display speed to fast to get better result.
```

### [Muscadet]
```
- Nachtmusik Zero～女衒に心身を捧げる二律背反のメイド
  /HS-8@43CEF2 /KF /PN
  Note: Adjust text display speed to fastest to get better result.
```

### [CIRCUS]
```
- D.C.Ⅱ Fall in Love～ダカーポⅡ～フォーリンラブ
  /HB8@421470
```

### [ShiruZaru]
```
- 美人妻の痴態～兄の妻は俺の嫁～
  /HA-C@41A10C
```

### [Applique sister]
```
- フェイクアズール・アーコロジー
  /HSN-1C@419004
```

### [Unknown Developer] (From entry: 愛佳でいくの!!～Leaf Amusement Soft Vol.5～ 初回限定版)
```
- 愛佳でいくの!!～Leaf Amusement Soft Vol.5～ 初回限定版
  FDCGR: /HWN-8@40138F
  まななつ: /HSN-1C@410217
```

### [ソフトハウスキャラ] (Softhouse Chara)
```
- 忍流
  /HA4@11E70:ags.dll
```

---
## H-Codes (Set 43)

### [eufonie]
```
- ひだまりバスケット
  /HA-20@48BF80 /KS
```

### [Unknown Developer] (From entry: 癒されご奉仕～夢の館で賢者タイム!～)
```
- 癒されご奉仕～夢の館で賢者タイム!～
  /HB-C*0:14@405DCB /Fdialogue@3:412603
  Note: If it doesn't show a proper hook try to remove the /F part and look
  through the usercode hooks if anybody has it, this is for the version
  seeded there (I guess 1.00) any update might break the code.
```

### [DisAbel]
```
- すくぅ～るらぶっ!3～未来へのアレグレット～
  /HB-4@4042B2 /KF
  Note: You'd better adjust text display speed to fastest.
```

### [Hanimaru]
```
- てほどき交感～ボクのが○○が××で止まらないよ…～
  /HA-C@41A10C /pn5D72A756.exe
```

### [しとろんソフト] (Citron Soft)
```
- 妹スマイル Imouto Smile
  /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
  Note: Since this game is also based on 椎名里緒, the general code will work.
```

### [eufonie] (Duplicate from same set)
```
- ひだまりバスケット
  /HA-20@48BF80 /KS
```

### [Unknown Developer] (From entry: 淫妖蟲 悦 ～快楽変化退魔録～)
```
- 淫妖蟲 悦 ～快楽変化退魔録～
  /HBNC*0@4697D0
```

### [ローズティアラ] (Rose Tiara)
```
- 姉妻～姉弟相姦遊戯～
  /HA-C@4192E0
```

### [Armonica]
```
- Skyprythem -スカイプリズム-
  /HW-4*0@54689C
```

### [RococoWorks]
```
- Volume7
  /HSN-1C:-4@414947 /KF1:200 /KS /FDiag@1:210;Choice@1:240
```

---
## H-Codes (Set 44)

### [Muscadet]
```
- Sweetest Maman!
  /HBC*0@4044F0 /kf /pnswtmaman.exe or /HB4:-14@404290 /KF /pnswtmaman.exe
```

### [Nitro+]
```
- 装甲悪鬼村正
  /HA-8@46E340
```

### [DARKROSE]
```
- 境界線の果て～ふたつの性別、ふたつの性格～
  /HBN10*0:8@488C70 /Fdialogue@1:18;speaker+choice@1:1A;furigana@1:A /w1:18
```

### [Fizz]
```
- [091030] さくらテイル -the tale of cherry blossoms septet-
  /HB4*0:2E0@57FA90
```

### [WAFFLE]
```
- 乱れて交わる俺と姫
  /HBN-4*0@46BE94
- 巨乳ファンタジー
  /HBN-4*0@46BFF1
  /HBN-8*0@6BFEC:巨乳ファンタジー.exe /pn巨乳ファンタジー.exe
```

### [Guilty+]
```
- RIN×SEN～白濁女教師と野郎ども～
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A /Ftext@4339A2:0;choices@4339A2:ffffff
- 痴漢サークル～快感ラッシュアワー・接触篇～
  /HB8*0:28@0:GDI32.dll:GetTextExtentPoint32A /Fchoices@42FE3E:ffffff;text@42FE3E
- 痴漢サークル2～猥褻エクスプレス・発動篇～
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A /Ftext@433A52:0;choices@433A52:ffffff
- 痴漢サークル3～恥辱のダイヤグラム・完結篇～
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A /Ftext@433AE2:0;choices@433AE2:ffffff
  Note: Message speed needs to be set to something slower then fastest(instant) or text wont show up in agth.
```

### [CIRCUS]
```
- プリンセスパーティー カメリア
  /HB8@420F70
```

### [ALL-TiME]
```
- 性喰体育教師
  /HBN-8*0@43CEF2 /KF
  Note: It looks better if you turn the text display speed to fastest.
```

---
## H-Codes (Set 45)

### [evee]
```
- LOVE×EVOLUTION
  /HA-4@41ED20
```

### [ルネ] (Lune)
```
- 淫夢学園「だめ…こんなになっちゃうのは夢の中だけなの…!」
  /HANC@440D36
```

### [WAFFLE]
```
- 乱れて交わる俺と姫～姫と執事と歌姫とその他大勢と～
  /HBN-4*0@C9BE94
- インチキ霊媒師
  /HBN-4*0@E1BE08
```

### [Twinkle]
```
- トロピカルKISS
  /HBN-1C*0@40CF1A
- トロピカルKISS ver.1.11
  /HSN-18@4212E4
```

### [Aries]
```
- ANGEL NAVIGATE
  /HBC@453F50
```

### [Marine]
```
- つるつるナース「恥ずかしい……こんなの誰にも見せられない……」
  /HB-C*0@419DF8
```

### [ETOILES]
```
- 姫×姫
  /HS4@427650
```

---
## H-Codes (Set 46)

### [ねこねこソフト] (NekoNeko Soft)
```
- そらいろ
  /HS-1C@418F42
  Note: AGTH will catch the protagonist's name as "置換名称"... Not perfect but acceptable.
```

### [Atelier Kaguya]
```
- プリ☆さら～ドキドキ×らぶらぶWファンディスク～
  /HSNC*0:3A4@422490
```

### [Front Wing]
```
- タイムリープ
  /hbn8*0@4470f0 (1.01)
```

### [Lilim]
```
- あい☆きゃん
  /HB8*0@4442C0 /Ftext@457FA6;names@457E9A
```

### [Undermoon]
```
- 甘い生活 -最高の義母と最高の義姉妹-
  /HA-C@419DDC /Ftext@41A352
```

### [comet]
```
- &Love
  /HSN-8@414059
```

### [Circus]
```
- ヴァルキリーコンプレックス
  /HSN-1C@413CDF
```

### [eants]
```
- てほどき交感 友母 みなみ～おばさん、ダメだよ!あぁ、ボク気持ちいい… ~
  /HA-C@419F64
```

### [でぼの巣製作所] (Debonosu Seisakusho)
```
- 神楽道中記
  /HSN@440B85 (v1.02)
```

### [UNKNOWN]
```
- ABANDONER -THE SEVERED DREAMS-
  /HSN-1C@0043BBC1
  Note: needs update patch.
```

---
## H-Codes (Set 47)

### [めくじら] (Mekujira)
```
- 彼女の浮気現場
  /HA-C@F8D98
  Note: In some scenes the text shown on screen is split up between multiple
  clicks, the hook will get it all on load. I think it doesn't happen to
  often though, so should be ok.
```

### [SAGA PLANETS]
```
- ナツユメナギサ
  /HAN-C:-14@4458F8 /PNREALLIVE.EXE
```

### [light]
```
- Dies irae Also sprach Zarathustra -die Wiederkunft
  /HWN-10*-8:-10*10@46AC08 /KF
```

### [catwalkNERO]
```
- 聖徒会長ヒカル～淫魔に占領された学園～
  /HAN-C:-14@4458F8 /pnreallive.exe
```

### [TinkerBell]
```
- なつドキ！ハーレム～親せき宅での悩める受験勉強～
  /HBC*0@4675C0 /pnndoki.exe
  Note: Strangely, that TinkerBell game will work with agth without h code, if
  you turn off the anti-alias for the text.
```

### [ivory]
```
- 桜待坂Stories vol.1
  /HA-C@414BDC
- 桜待坂Stories vol.2 せんせいがおしえてあげる
  /HA-C@417B60
```

### [アトリエかぐや Honky-Tonk Pumpkin] (Atelier Kaguya Honky-Tonk Pumpkin)
```
- ちゅぱしてあげる～スポーツクラブのおねえさん～
  /HB8@419F50
```

### [Morning Star]
```
- 処女姦　初体験を陵辱された乙女たち
  /HW4@0:msvcp80.dll:#2631
  Note: Same as an earlier bruns.exe game
```

---
## H-Codes (Set 48)

### [PIL]
```
- 仏蘭西少女 ～Une fille blanche～
  /HAN8:54@42BB30
  /HAN-10@42BB3B
  /HA-4@42BB30
```

### [Unknown Developer] (From entry: スマガスペシャル)
```
- スマガスペシャル
  /ha-4@441aa0
  /ha-4@487190
```

### [Unknown Developer] (From entry: 無差別恋愛～ボクって玩具？～)
```
- 無差別恋愛～ボクって玩具？～
  /HAN-C:-14@445578 /pnreallive.exe
```

### [Baseson]
```
- 真・恋姫†無双～萌将伝～
  /HS4@4F7730 (v1.00)
  /HS4@4F8E90 (v1.02)
```

### [Leaf]
```
- 痕－きずあと－
  /HBN-4@4AFCEA /KF
- 雫
  /HBN-C@4B2BAD /KF
```

### [130cm]
```
- 鬼うた。 ～鬼が来たりて、甘えさせろとのたもうた。～
  /HAN-C:-14@445648 /pnreallive.exe
  /HA-10:58@4A4FA8 /pnREALLIVE.EXE
  Note: Leave away :58 if you want names infront of the dialogue, but it'll be double then.
```

### [CIRCUS]
```
- D.C.Ⅱ To You～ダ カーポⅡ～トューユー
  /HSN8@41CC90
  Note: Remove N if you want to split name and text into different threads
```

### [Lune Team Bitters]
```
- 彼女が見舞いに来ない理由
  /HA-C@419D08 /Ftext@41A27E
```

### [すみっこ] (Sumikko)
```
- 絶対可憐！お嬢様っ
  /HW-4*0@5D331E
  Note: Same as 天神乱漫 released by Yuzusoft last month
```

---
## H-Codes (Set 49)

### [アトリエかぐやTEAM HEARTBEAT] (Atelier Kaguya TEAM HEARTBEAT)
```
- マジカルウィッチコンチェルト
  /HB8*4@409390
```

### [Rio]
```
- [090327] 絶対領域っ！
  /HAN14@49E690
```

### [13cm]
```
- キミベタ～キミをベタベタにさせてあげる
  /HAN-C:-14@445458 /pnreallive.exe
```

### [Frill]
```
- 痴漢専用車両2
  /HAN-C:-14@445478 /pnreallive.exe
```

### [裸足少女] (Hadashi Shoujo)
```
- 素直くーる
  /HA-18@478A47 /pnrealLive.exe
```

### [TAIL WIND]
```
- Trample on Schatten!!～かげふみのうた～
  /HB-1C*14@29170:schatten.exe
```

### [Aromarie]
```
- 銀の冠碧の涙
  /HW-C*0@415E8A
```

### [eants]
```
- ARCUS X Complete Edition
  /HB-C*0:-14@404260 /KF
```

### [Unknown Developer] (From entry: タユタマ)
```
- タユタマ
  /HAC@420680
- タユタマ -It’s happy days-
  /HAC:-14@405F50
```

---
## H-Codes (Set 50)

### [Belisama]
```
- ダストマニア・グロテスク ～解体挿入新書～
  /HQN-1C@10131E43
  Note: Some control characters mixed with text.
```

### [light]
```
- どんちゃんがきゅ～
  /HW4*0:-C@0:tools.dll:String_GetHash /Ftext@46E00D:4E95F4
  /HWN-4:-8@E168:tools.dll /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1
  /HWN-4:-8@338:tools.dll:RichString_GetAnchorCount /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1
  /HWN-4:-8@-1E8:tools.dll:RichString_GetAnchor /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1
  Note: requires /pn
```

### [StudioMebius]
```
- 悪夢 絶望～青い果実の散花～Twin Pack Edition
  /HAN14@4A1630 /Ftext@1
```

### [裸足少女] (Hadashi Shoujo)
```
- 素直くーる
  /HA-18@478A47 /PNRealLive.exe
```

### [ゆずソフト] (Yuzu Soft)
```
- 天神乱漫 LUCKY or UNLUCKY！？
  /HW-4*0@5D331E
```

### [Lump of Sugar] (Duplicate from Set 49)
```
- タユタマ -It’s happy days-
  /HAC:-14@405F50
```

### [LiLiM生] (LiLiM Nama)
```
- 医辱
  /HA4:-14@4105C0
```

### [age]
```
- アージュマニアックス ~伊隅四姉妹最期の日~
  /HA4@169D0:UnivUI.dll /KF
```

### [Shiratama]
```
- 妻ようじ～ボクは人妻管理人～
  /HB1C*0@40F1F0
  /HB-8*0@40F2C8
  /HA4@454E28 (with tyouji_update.exe)
```

### [Light]
```
- Paradise Lost
  /HAN-4@40CD70 /FText@1
```

---
## H-Codes (Set 51)

### [Muscadet]
```
- Nachtmusik～穢れし姫に淫獄の旋律を捧ぐ～
  /HBC*0@4044F0 /pnnachtmusik.exe /kf
  Note: Also, please turn the message speed to max.
  You beat me with posting by a few minutes, I got /HB4:-14@404290 /KF /pn
  which gets more texts (mostly useless though) and creates a few more
  userhook threads so it's a bit harder to find the correct one - but has
  the choice selections in one of them.
```

### [Love Juice]
```
- エンドリープ～降り積もる恋人の記憶～
  /HB-4*0@432AAD
```

### [Rio]
```
- 絶対領域っ！
  /HA14@49E690 (names and dialogue separated)
  /HAN14@49E690 (name and dialogue together, but name displayed twice)
```

### [Apricot Cherry]
```
- シスタ×シスタ～Lovevery Sisters～
  /HA-1C:4@42FAAE
```

### [Unknown Developer] (From entry: 姉ニモマケズ～お姉ちゃんズは刺激的！～)
```
- 姉ニモマケズ～お姉ちゃんズは刺激的！～
  /HSN-1C@414527
```

### [ALcot シトラス] (ALcot Citrus)
```
- 死神の接吻は別離の味
  /HA18@4887D0
```

### [Unknown Developer] (From entry: 淑女の告白 ～豊乳熟妻、白昼の蜜会)
```
- 淑女の告白 ～豊乳熟妻、白昼の蜜会
  /HW4@FD7C:msvcp80.dll
  /HW4@0:msvcp80.dll
  /HW4@0:msvcp80.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
```

### [Unknown Developer] (From entry: Baldr Sky)
```
- Baldr Sky
  /x /v /fDiaglogue@61A65F /pnbaldrsky.exe (v1.02)
  /HB10*0@5E244B (v1.01)
  /c /x /v /fDiaglogue@619CAF /pnbaldrsky.exe (v.1.01)
```

---
## H-Codes (Set 52)

### [Unknown Developer] (From entry: すくぅ～るふぁいぶ！～五つの秘密の物語～)
```
- すくぅ～るふぁいぶ！～五つの秘密の物語～
  /KF /HB-4*0@43CF0A
  Note: you need to turn the message speed to max
```

### [AXL]
```
- 恋する乙女と守護の楯
  /HSN14:-10@43BBAD
- 恋する乙女と守護の楯 Reboot：/HWN-8:-C@121BB:textrender.dll
```

### [Ail]
```
- くのいち飛鳥～吉原遊郭奇談～
  /HSN-4@42FCA0
```

### [Unknown Developer] (From entry: すみれの蕾)
```
- すみれの蕾
  /HB10*0@4613B3
```

### [Unknown Developer] (From entry: Baldr Sky) (Duplicate entry from Set 51)
```
- Baldr Sky
  /c /x /v /fDiaglogue@6183EF /pnbaldrsky.exe
```

### [circus]
```
- Princess Party
  /HS-20@422B59
```

### [Softhouse Chara]
```
- DAISOUNAN
  /HA-8@18460:Ags.dll
  /HB-1C*0@18460:Ags.dll
  /HA-8@18390:Ags.dll
  /HB-1C*0@18390:Ags.dll
  /HB8*0@18390:Ags.dll
```

### [Caramel Box]
```
- ボクの手の中の楽園
  /HSN14@414FC5 /KF
  /HSN14@414F82 /KF
```

### [Littlewitch velvet]
```
- 聖剣のフェアリース
  /HB+48@4AC1B0
```

### [Unknown Developer] (From entry: 傷モノの学園3－heaven’s door－)
```
- 傷モノの学園3－heaven’s door－
  /HB-C@43F968
```

---
## H-Codes (Set 53)

### [Unknown Developer] (From entry: おしゃぶりアナウンサー「そんなに飲まされたら……Hしたくなっちゃう」)
```
- おしゃぶりアナウンサー「そんなに飲まされたら……Hしたくなっちゃう」
  /HB-C*0@41A28C
```

### [Unknown Developer] (From entry: 妻とママとボイン)
```
- 妻とママとボイン
  /HA-10@40ACAD
```

### [Unknown Developer] (From entry: タペストリー -you will meet yourself-)
```
- タペストリー -you will meet yourself-
  /HWN-4:-8@77C4F8 /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1 /pnmalie.exe
```

### [Unknown Developer] (From entry: 辱・奴隷妻～息子の友達に犯されつづけた3日間)
```
- 辱・奴隷妻～息子の友達に犯されつづけた3日間
  /HSN14:10@4121BE
```

### [Atelier Kaguya BerkshireYorkshire]
```
- さらさらささら
  /HSNC*0:3A4@41F7D0 /FText@1:4112A9;Speaker@1:411B78;Choices@1:41368B
```

### [Pajamas EX]
```
- もみちゅぱティーチャー!～巨乳姉妹と三角関係～
  /HBC@452390
  Note: For the mini-game: みちるとラブエロ温泉旅行
  /HBC@4523E0
```

### [Lune]
```
- エルフの双子姫 ウィランとアルスラ
  /HA-C@419DDC
```

### [Unknown Developer] (From entry: まほたま)
```
- まほたま
  /KF /FGameText@74DC4712 /pnags.exe
```

### [August]
```
- 夜明け前より瑠璃色な -Moonlight Cradle-
- 夜明け前より瑠璃色な－Brighter than dawning blue－ for PC
  /HAC@421920
```

### [ωstar]
```
- 彼女×彼女×彼女 ドキドキ フルスロットル
  /HSC@4044F0 /KF
```

---
## H-Codes (Set 54)

### [AQUAPLUS]
```
- ToHeart PSE v1.00
  /HAN-4@40C4F6 /pnpsth.exe
```

### [Clochette]
```
- スズノネセブン！
  /HAN8:-1C@4A86D4
```

### [Unknown Developer] (From entry: 戦乙女ヴァルキリーG～戦乙女達の黄昏～)
```
- 戦乙女ヴァルキリーG～戦乙女達の黄昏～
  /HA-C@419B40 /Ftext@41A0B6
```

### [アイル【チ-ム ドレイク】] (Ail [Team Drake])
```
- 愛欲の半ば、陰と陽の慟哭～淫辱は制服の下に～
  /HA4:158@415550 /pnHaninyou.exe
```

### [CRAFTWORK]
```
- さよならを教えて
  /HSN-4@430B80
```

### [Unknown Developer] (From entry: 犯ワレルココロ～隷属調教～)
```
- 犯ワレルココロ～隷属調教～
  /HB4@416ED0
```

### [Unknown Developer] (From entry: 君が呼ぶ、メギドの丘で v1.01)
```
- 君が呼ぶ、メギドの丘で v1.01
  /HS4@5CDEDE
```

### [ACTIVE]
```
- SEVEN -Sympathy for the Fairies-
  /HS4:38@427730
```

### [Unknown Developer] (From entry: Twinkle Crusaders Kurukuru Miracle)
```
- Twinkle Crusaders Kurukuru Miracle
  /HBN-C@463CE3
- Twinkle Crusaders 60FPS version
  /HBN-C@464123 (v1.30)
- Twinkle Crusaders 30FPS version
  /HBN-C@463033 (v1.30)
```

---
## H-Codes (Set 55)

### [Unknown Developer] (From entry: Memories off Duet)
```
- Memories off Duet
  /HB8*0@3ADC0:MEM12.exe
- Memories off Sorekara
  /HBN-1C*0@41D74F
```

### [Unknown Developer] (From entry: Dungeon Crusaderz 2)
```
- Dungeon Crusaderz 2
  patch 1003
  /HB28@4103E8
```

### [bootUP!]
```
- あねいも2・いもいもFD
  /HBC@44CC30
```

### [tama-soft]
```
- 永遠の終わりに
  /HA-C@419F9C
```

### [Sphere]
```
- Yosuga no Sora
  /HWN4:-4@4B23ED
```

### [Frontwing]
```
- Makai Tenshi Jibril -episode 2- Vista Version
  /HBN-C*1@4D2276
- Yuki Uta Vista
  /HBN-C*1@4DDF45
- Sora Uta Vista
  /HBN-C*1@4DDF45
```

### [OLE-M]
```
- おっぱいの王者48
  /HAN4:-4@40924F
```

---
## H-Codes (Set 56)

### [highsox]
```
- 絶対女子寮域！
  /HWN4:-4@4BEB55
```

### [G.J?]
```
- 魔女道～あの散り際の美しさ～
  /HAN4:-4@40931F
- あなたの知らない看護婦～性的病棟24時～
  /HAN4:-4@409BAE
- Queenボンジョルの！～女王は制服を脱いだ～
  /HAN4:-4@4094AE
  Note: for the code to work, set the text speed to highest, and turn
  off "text/voice in sync" option. Scroll up a couple of posts to freaka's
  post on the options in the config, if you don't know which option is
  which. Also, whenever you load a new game, the texts jump to a new
  userhook thread. So, for example, if you finish one route and re-start
  on a save point, look for the new userhook thread that corresponds to
  the texts on the screen.
```

### [Frontwing]
```
- Hoshiuta
  /HBN-C*1@4DA701 /Ftext@1
```

### [Unknown Developer] (From entry: da capo II p.c.)
```
- da capo II p.c.
  /HS8@41B710 /Fdialogue@41F3C6;names@41F3A1;choices@41AD57
```

### [CLOCKUP]
```
- レクイエム
  /HSN-1C@41C094
```

### [Unknown Developer] (From entry: 君が呼ぶ、メギドの丘で)
```
- 君が呼ぶ、メギドの丘で
  /HS-8:8@5D001B
```

### [Unknown Developer] (From entry: オト☆プリ～恋せよ！乙女王子様♪ ドキドキウェディングベル～)
```
- オト☆プリ～恋せよ！乙女王子様♪ ドキドキウェディングベル～
  /HSC@4044F0 /KF /pnotpr.exe
```

---
## H-Codes (Set 57)

### [Unknown Developer] (From entry: サキュヴァス～堕ちた天使～)
```
- サキュヴァス～堕ちた天使～
  /HS4@407a40 /Ftext@407C3E
```

### [Saint Ascaron]
```
- Dungeon Crusaderz 2
  /HB28@4101B8
- Dungeon Crusaderz 2
  patch 1002
  /HB28@4103B8
```

### [Unknown Developer] (From entry: Aoishiro)
```
- Aoishiro
  /HA-4:-18@44FDF2
```

### [Unknown Developer] (From entry: 姦熟女教師～肉欲に濡れる罠)
```
- 姦熟女教師～肉欲に濡れる罠
  /HSN0:C@486678 /Fnames@1:440D94;dialogue@1:4413F3;choices@1:4423C0
```

### [Unknown Developer] (From entry: 愛奴変態調教倶楽部)
```
- 愛奴変態調教倶楽部
  /HBN-8*0:28@414F20 /FNames@1:0;Dialogue@1:1 /pn愛奴.exe
  Note: Set Textoutput speed to less then max, or you'll have names and dialogue
  in one thread - which messes up the translation. If you skip through
  that happens as well. Doesn't get text of choices.
```

### [Unknown Developer] (From entry: 校内えっち コスプレ会長 輪姦クラブ)
```
- 校内えっち コスプレ会長 輪姦クラブ
  /HAN4@419004 /Ftext@1 /pncd1935c3.exe
```

### [Atelier Kaguya HonkyTonk Pumpkin]
```
- 毎日がＭ！
  /HB8@415E00
  /HB-20@415E00
```

### [May-be Soft]
```
- GROPE(グロープ)～闇の中の小鳥たち～
  /HA-C@4AE444 (for V1.2)
```

---
## H-Codes (Set 58)

### [Unknown Developer] (From entry: 片恋いの月えくすとら)
```
- 片恋いの月えくすとら
  /HA-4@5C1C40 /KS
```

### [Unknown Developer] (From entry: 処女狩～オトメガリ)
```
- 処女狩～オトメガリ
  /x /fDialogue@426956
```

### [Unknown Developer] (From entry: 美脚性奴会長亜衣)
```
- 美脚性奴会長亜衣
  /HBN-1C*0@415d89
  Note: (Doesn't Show name)
  Work in text speed slow - normal
```

### [Sugar pot]
```
- WIZARD GIRL AMBITIOUS
  /HA-4@414160 /KS /pnwga.exe
```

### [CLOCKUP]
```
- Kurofan 2GHz
  /HBN-4*0:120@429F88
```

### [Haoh]
```
- Hard Scandal
  /HSN0@411D84 /Ftext@1
```

### [lightBox2008]
```
- Imitation Lover
  /HW-C@46E39A
- 群青の空を越えて
  /HW-C@4677DA
- Dear My Friend Complete version
  /HW-C@46EFAA
```

---
## H-Codes (Set 59)

### [Overdrive]
```
- キラ☆キラ カーテンコール
  /HAN-18:20@405850
```

### [Unknown Developer] (From entry: Twinkle Crusaders Version 1.10)
```
- Twinkle Crusaders Version 1.10
  /HBN-C@463F03 (60FPS version)
  /HBN-C@463E23 (30FPS version)
```

### [Unknown Developer] (From entry: Hako 箱-はこ-)
```
- Hako 箱-はこ-
  /KF /HSN4@63C012
```

### [Unknown Developer] (From entry: D.C. Girl’s Symphony)
```
- D.C. Girl’s Symphony
  /HW-4@43A780 /KF /FDialogue@43B780
```

### [Unknown Developer] (From entry: 人妻スワッピングゲーム)
```
- 人妻スワッピングゲーム
  /HANC@43CB40 /KF
```

### [Studio Ryokucha]
```
- 巫女さんファイター！涼子ちゃん
  /HA4@41F8E0
```

### [AXL]
```
- Tutorial Summer
  /HB8*0:4@42F2E0
```

### [Abogado Powers]
```
- Dvine Luv
  /HAN-4@486836 /KF /KS19 /Ftext@1
  /HS10@486790 /KF /KS19
  Note: both require the latest(?) update: http://www.abopa.net/download/patch/dv_luv/dv_pt5.lzh
```

### [LUNE]
```
- onsoku hishou sonikku merusedesu~futago hiroin choukyou shirei!~
  /HA-C@4196C8
```

### [Nitro+]
```
- Sumaga
  /HAN-C@47E15A /pnsmg.exe
  /HAN4@4036D0 /pnsmg.exe
```

---
## H-Codes (Set 60)

### [Nitro+]
```
- Chaos;Head
  /HAN4@403680
```

### [Milk Soft]
```
- 恥辱の渦～狙われた二人の新妻～
  /HAN-C@F3D54 /Ftext@1
```

### [Frill]
```
- 孕ませ王
  /HA4@40ED80 /pnRealLive.exe
```

### [Lillian]
```
- ティンクル☆くるせいだーす
  /HBN-4@463D76
  /HSN2C@463D65
```

### [Littlewitch]
```
- ピリオド sweet drops
  /HBN4*0@4B1EBC
```

### [枕] (Makura)
```
- しゅぷれ～むキャンディ～王道には王道たる理由があるんです！～
  /HAC@421000
```

### [Caramel Box]
```
- とっぱら～ざしきわらしのはなし～
  /HSN14@415FB5 /KF
```

### [Marine]
```
- びんかんアスリート
  /HB-C*0@419BAC
```

### [Tarte]
```
- スクールぱにっく！
  /HSN38@404E7B
```

### [Overdrive]
```
- エーデルワイス 詠伝ファンタジア
  /HAN-18:20@405750 /Ftext@1:0
```

---
## H-Codes (Set 61)

### [Moonstone]
```
- Gift
  /HA18:-1C@4053E0
```

### [Pulltop]
```
- てとてトライオン！
  /HSN20@4131E0
```

### [Kurohina]
```
- 体育調教師～鬼畜授業ブルマー遊戯～
  /HBC*0@4044B0 /KF
```

### [Lilim]
```
- 昇龍戦姫 天夢
  /HAN-4@413FA0 /KS /KF /Ftext@1 /pnsfa12.exe
```

### [Circus]
```
- ホームメイド スイーツ
  /HSN8:14@419550
```

---
## More H-Codes (List 1)

### [#DEFINE]
```
- 催眠実驗: /HA18@488B14 /Ftext@48853A
```

### [13cm]
```
- DEVOTE2 いけない放課後: /HA8@50E4B0
- キミベタ: /HAN-C:-14@445458 (use /pn)
- 仕舞妻（しまいづま）～姉妹妻3～: /HAN14@410050 or /HA14@410050
```

### [130cm]
```
- 鬼うた。: /HA-10:58@4A4FA8 or /HAN-C:-14@445648 (use /pn)
- 鬼まり。: /HA-10:58@4ABD18 (use /pn)
```

### [3rdEye]
```
- BLOODY†RONDO: /HA-C:40@0:GDI32.dll:GetTextMetricsA
```

---
## More H-Codes (List 2)

### [ABALONE KISS]
```
- 鬼孕の学園～スク水少女異種姦凌辱劇～: /HBC@44C8B0
```

### [Abelia]
```
- おねがい♪ ご主人さまっ！: /HBC*0@404500 /KF
```

### [Abogado Powers]
```
- D＋VINE[LUV]: /HAN-4@486836 /KF /KS19 /Ftext@1 or /HS10@486790 /KF /KS19
- Pigeon Blood: /HSN4@404655
```

### [Abelsoftware]
```
- まるめる～ソウシンシャは＠未来～：/HB-4@4042B2 /kf4 /ks4
- デュアル・エム ―空の記憶―: /HSC@4044F0 /KF
- 恋刀乱麻～わたしが、アナタを、守るから!!!～: /KF /HB-4@4042B2
- 萌恋維新！～アタシら、じぇいけー、新閃組！: /KF /HB-4@4042B2
```

### [Acacia Soft]
```
- 夏めろ: /HB-4*0@40DAC0 or /HB-18*0@40DAC0
```

### [ACTIVE]
```
- SEVEN -Sympathy for the Fairies-: /HS4:38@427730
```

### [Age]
```
- アージュマニアックス ~伊隅四姉妹最期の日~: /HA4@169D0:UnivUI.dll /KF
- 君が望む永遠~Latest Edition~: (rUGP Ver 5.81.03): /HA-18@2CDBC:UnivUI.dll /KF /PNrugp.exe or /HA4@2E220:rvmm.dll
- マブラヴ: (rUGP Ver 5.72.06) /HA4@1002B1A0 (english steam version AGES 7.0) /HQ-4@1C90F0:muvluv16.exe
- マブラヴAlternative: (rUGP Ver 5.70.18) /HA4@100291B0 | (rUGP Ver 5.70.51) /HA4@100295E0
- マブラヴAltered Fable: (ALTFABLE110_2) /HA4@2C0F0:rvmm.dll
```

### [Aicherry]
```
- ボクの目の前で親友に抱かれ腰を振る彼女―奴の言いなりにそのエロい肢体は開かれてい：/HB4:-14@58BA80 or /HB4B@58BA80 or /HB4:-14@18BA80:ボクの目の前で親友に抱かれ、腰を振る彼女.exe
- 他の男の精液で孕んでもいいですか…？4 憧れていた先輩のむっちり美乳は僕のものではなかった―知りたくなかった彼女の秘蜜―:/HB8:-14@594280
- 清純なカラダは、アイツの腕の中で男を知っていく：/HB4:-14@18B320:gsd.exe
```

### [All-Time]
```
- 極嬢痴漢電車～快楽絶頂ラッシュアワー：/KF /HBN-8*0@43CEF2
- 普通じゃないッ!!:
  Win7, .net 2.0.50727: /HW-C@6e28c0:mscorlib.ni.dll /pnigs_sample.exe
  WinXP, .net 2.0.50727: /HW-C@6e2710:mscorlib.ni.dll /pnigs_sample.exe
```

### [Ail]
```
- 愛奴変態調教倶楽部: /HBN-8*0:28@414F20 /FNames@1:0;Dialogue@1:1 (use /pn and don't set text speed to max)
- エインズワースの魔物たち: /HB-C*0@42DB4B
- 愛欲の半ば、陰と陽の慟哭～淫辱は制服の下に～: /HA4:158@415550 (use /pn and don't set text speed to max)
- ディープ・ボディ～変態淫具奴隷調教遊戯～: /HSN8:10@430B0E
- くのいち飛鳥～吉原遊郭奇談～: /HSN-4@42FCA0
- 魔ヲ受胎セシ処女（おとめ）ノ苦悦: /HB-8*0@415F90 or /HBC*0@415F90
- 魔ヲ受胎セシ処女（おとめ）ノ苦悦2: /HS10@41320C /PNmajutai2c.exe
- 凌母～Maternity Insult～: /HBC*0@416130
- 性奴調教指導室～変態拘束教育課程～: /HBN14@42D272 /X /FOptions@403BD6;Dialogue@1
- 私の知らない妻の貌: /HA-4@412364 (use /pn)
- 桃華散る～少女剣士の報復は恥辱に満ちて～: /HA-4@4151D6
```

### [ad：lib]
```
- ボクラはピアチェーレ: /HSC@4044F0 /KF
```

### [Ainos]
```
- ぱちぱちサーキット～やっぱレースクイーンは「速い男」が好きな訳よ～: /HA-C@42B7E0
```

### [Akatonbo]
```
- サキュヴァス～堕ちた天使～: /HS4@407a40 /Ftext@407C3E
```

### [Akatsuki Works]
```
- 僕がサダメ　君には翼を。: (Ver. 1.01) /HSNC@413AE0 or /HSN-8@413AE0
```

### [Albion]
```
- 彼女はツンデる風紀委員: /HAN-C@F8DB4 /Ftext@1
```

### [AliceSoft]
```
- しゃーまんず・さんくちゅあり -巫女の聖域-(对应系统XP)
  /HB18*4@0:ChipmunkSpriteEngine.dll:SP_SetTextSprite /pnMankuchu.exe
- 母娘乱館 /HS-20@53D8F5
- パスチャ３プラスコンテンツ /HSN4:-14@43D3AE
- パステルチャイム3 バインドシーカー /HSN4:-14@43CFB9
- New Rance 2 /HBN1C*4@0:StoatSpriteEngine.dll:SP_SetTextSprite
  /Ftext@1 /pnRance02.exe
- Rance Quest /HSN4:-14@42E08A
- Rance02
  /HBN1C*4@0:StoatSpriteEngine.dll:SP_SetTextSprite /Ftext@1 /PN
- ランス５Ｄ /HSN-1C@466897
- ランス8 Magnum：/HSN4:-14@42D5EA
- Rance Quest Magnum /HSN4:-14@42D5EA
- Rance 9 The Helmanian Revolution (Either of those three)
  /HB-C*@56FE3D
  /HB-8*@56FE61
  /HB-C*@56FE3F
- ランス8: /HSN4:-14@42E08A
- Rance 10 ランス10 /HSN30:0@00614875:
- 戦国ランス: /HB40*0@3C4AED0 or /HB40*0@AED0:SactEngine.dll
  /pnSYSTEM40.exe (altered dll found here)
- 妻みぐい /HSN-10@467799 /PNsystem39.exe
- 妻みぐい ボイス追加ダウンロード版 /HSN-1C@464EC4
  Tsuma.exe CRC-32: 5c903578
- 妻みぐい /HSN-20:3C@465FF6
- 妻みぐい2 /HSN-C@8844:SACT.dll /pnsystem39.exe
- 妻みぐい3 /HSN-1C:-14@200E25HSN-8@46F7CF
  V1.02し
- 妻みぐい3 //HSN-1C:-14@200E25:Tsumamigui3.exe
- シェル・クレイル /HSN-C@8954:SACT.dll /pnsystem39.exe
- ナイトデーモン－夢鬼－ /HSN-C@8954:SACT.dll /pnsystem39.exe
- DALK外伝 /HBN-4*0@3D06:DrawMsgManager.dll /PNsystem40.exe
- ままにょにょ /HBN-4*0@3D06:DrawMsgManager.dll /PNsystem40.exe
- ももいろガーディアン /HB38@623F0:StoatSpriteEngine.dll
- 僕だけの保健室 /HB38@623F0:StoatSpriteEngine.dll.
- 闘神都市III /HBN-8*0@EC60:SACTDX.dll or /HB30*0@12760:SactEngineDX.dll
- 大番長: /w1 /HBN-10*0@488B:DrawMsg2.dll
- アリス2010: /HBN1C*4@0:StoatSpriteEngine.dll:SP_SetTextSprite
  /Ftext@1
- 僕だけの保健室: /HB38@623F0:StoatSpriteEngine.dll (use /pn)
- ももいろガーディアン: /HB38@623F0:StoatSpriteEngine.dll (use /pn)
- ばにしゅ！～おっぱいの消えた王国～: /HB8*4@59370:StoatSpriteEngine.dll (use /pn)
- ALICEの館7: /HB-4*0@9CA0:SactEngine.dll /pnSYSTEM40.exe
- 超昂閃忍ハルカ: /HBN8C@EE78:SactEngineDX.dll /PNSYSTEM40.exe (see
this post for more detail). Can also try /HB30*0@13DC0:SactEngineDX.dll
/pnSYSTEM40.exe or /HB40*0@13DC0:SactEngineDX.dll /pnSYSTEM40.exe
- だぶる先生らいふっ: /HBN8C@DC7D:SactEngineDX.dll /pnSystem40.exe or
/HB-4*0@B0F0:SACTDX.dll /pnSystem40.exe (see this post for more detail).
Can also try /HB30*0@12760:SactEngineDX.dll /pnSYSTEM40.exe or
/HB40*0@12760:SactEngineDX.dll /pnSYSTEM40.exe
- GALZOOアイランド: /HB1C*0@A830:SactEngine.dll /pnSYSTEM40.exe
- 魔女の贖罪: /HB28*0@AF40:SactEngine.dll /pnSYSTEM40.exe
- お嬢様をいいなりにするゲーム: /HB28@13F70:SactEngineDX.dll
/pnSYSTEM40.exe or /HB-C*0@13F70:SactEngineDX.dll /pnSYSTEM40.exe or
/HB30*0@135F0:SactEngineDX.dll /pnSYSTEM40.exe or
/HB40*0@135F0:SactEngineDX.dll /pnSYSTEM40.exe
- ぱすてるチャイムContinue: /HB1C*0@03E1A810 or
/HB1C*0@A810:SactEngine.dll /pnSYSTEM40.exe
- ぱすちゃC＋＋: /HB1C*0@03E0A830 or /HB1C*0@A830:SactEngine.dll
/pnSYSTEM40.exe
- 闘神都市III: /HBN-8*0@EC60:SACTDX.dll: or
/HB30*0@12760:SactEngineDX.dll:
- 妻しぼり: /HB40*0@3DDAED0 or /HB40*0@AED0:SactEngine.dll
/pnSYSTEM40.exe
- よくばりサボテン: /HB40*0@AED0:SactEngine.dll
/pnSYSTEM40.exe8*0@43CEF2 /KF (This line seems to be a mix-up from another entry)
- 妻みぐい：/HSN-10@467799 /PNsystem39.exe
- 妻みぐい2：/HSN-C@8844:SACT.dll /pnsystem39.exe
- シェル・クレイル：/HSN-C@8954:SACT.dll /pnsystem39.exe
- ナイトデーモン－夢鬼－：/HSN-C@8954:SACT.dll /pnsystem39.exe
- DALK外伝：/HBN-4*0@3D06:DrawMsgManager.dll /PNsystem40.exe
- ままにょにょ：/HBN-4*0@3D06:DrawMsgManager.dll /PNsystem40.exe
```

### [Alcot Citrus]
```
- 死神の接吻は別離の味: /HA18@4887D0
```

### [Alcot]
```
- Vestige ―刃に残るは君の面影:    /HB8*0:d4@0:GDI32.dll:GetTextExtentPoint32A
```

### [An*tique]
```
- カミ☆たま～神様のたまご～: /HS48@404B40 /KF5:100
```

### [AniSeed]
```
- 重装皇女メタルプリンセス＆ガンシスター DVDパック : /HB4*0@421C10 and /HB-1C*0@421C10
- Relict2～エピソード・ムーン～: /HBNC*0:10@435D90 | (Upd01) /HBNC*0:10@435CE0
```

### [Apple Mint]
```
- ばんぷり　～いきなり吸われてＨしよ！～: /HSC@4044C0 /KF
- かてきょっ！　～おしえてエッチなこと～: /HB8*0@404960 /w43C331
```

### [Applique -Imouto-]
```
- フェイクアズール・アーコロジー: /HSN-1C@419004
```

### [APRICOT]
```
- AYAKASHI: (v1.01) /HAC@4F1660 /KF5:100 | (v1.01) /HA28@4F18F5 /KF5:100 | (v1.03 PACK) /HAC@4EB0A0 /KF1:100 /KS1
- AYAKASHI H: /HAC@4E5E20 /KF5:100
- Maple Colors 2: /HAN8@546DA0 /KF | (Ver. 1.01) /HA8@5472F0 /KF
- ゆにばる！ PARANORMAL GIRLS STRIKE!!: /HW-20@49AE30 /KF (on Vista/Win7, must use this exe)
- 桜花センゴク～信長ちゃんの恋して野望!?～：/HW-20@4C4DA0 /KF
```
### [APRICOT Cherry]
```
- シスタ×シスタ～Lovevery Sisters～: /HA-1C:4@42FAAE
- えむっ娘シスターズ：/HW-20@4B7C20 /KF
```
### [APRICOT Plum]
```
- なでしこドリップ: /HW8:4*28@4BFD40 /KF
```

### [Aquahouse]
```
- 淫らな看護婦物語: /HS-4*0@45B58C /KF
- 館の奥さま: (oksup103) /HS-4*0@45B58C /KF
```

### [AQUAPLUS]
```
- ToHeart PSE v1.00: /HAN-4@40C4F6 (use /pn)
```

### [Aries]
```
- ANGEL NAVIGATE: /HBC@453F50
- とらぶる＠すぱいらる！：/HBC@455BA0
```

### [Art]
```
- こすちゅーむ☆ぷれいやー: /HA-8@419434
- ヘブンズケージ/Heaven's Cage: /HA-8@418C24
```

### [Atelier D]
```
- ナースのお勉強: /HB8*0@40D4B0
- ナースのお勉強応用編～受けシチュ以外は絶対禁止！: /HB8*0@407CE3#2 | (V.1.10) /HS4@419660 (use /pn)
```

### [Atelier Kaguya]
```
- 他の男の精液で孕んでもいいですか～女子校生寝取られ事情～: /HB8:-14@593420 /KF
- 他の男の精液で孕んでもいいですか…？２: /HB8:-14@593420 /KF
```
### [Atelier Kaguya Berkshire Yorkshire]
```
- プリマ☆ステラ: /HSNC*0:368@41E920
  /FText@1:411149;Speaker@1:4119F8;Choices@1:4134AB
- プリ☆さら -ドキドキ×らぶらぶWファンディスク: /HSNC*0:3A4@422490
- さらさらささら: /HSNC*0:3A4@41F7D0
  /FText@1:4112A9;Speaker@1:411B78;Choices@1:41368B
```
### [Atelier Kaguya DREIZEHN]
```
- 淫皇覇伝アマツ～白濁の呪印～: /HBN28@410C6B
- 裏入学～淫液に濡れた教科書～: /HB28@4308FC
```
### [Atelier Kaguya Honky-Tonk Pumpkin]
```
- 姉です。（Death）～姉死覚悟の「弟しぼり」な夏が来る！～: /HB8@41DA80
- ちゅぱしてあげる: /HB8@419F50
- でるた！: (delta_up01) /HB28@40F0EF
- 毎日がＭ！: /HB8@415E00 or /HB-20@415E00
- 新妻イカせてミルク！ 団地妻、昼下がりの下半身事情！: (tumamiruku_up01) /HB8@4159F0 |(tumamiruku_up02) /HB8@4158C0
- オレと彼女は主従なカンケイ: /HBN28@40E33F
- いじらレンタル～エロあまおねえさんに貸し出されちゃった!!～：/HB8:-14@41F4E0
```
### [Atelier Kaguya TEAM HEARTBEAT]
```
- ダンジョンクルセイダーズ２: (Ver. 1003) /HB28@4103E8
- 人妻コスプレ喫茶２: /HB88*0@40BC4D or /HBN28@40E56B
- マジカルウィッチアカデミー: /HBN28@424F3C | (with adv17_2 patch) /HBN28@42513A
- マジカルウィッチコンチェルト: /HB8*4@409390
- 牝奴隷 ～犯された放課後～: /HBN28@42497E
- 夏神: /HBN28@40E56F
- 人形の館～淫夢に抱かれたメイドたち～: (ADV08) /HB14@41052D
- 女教師 DVD EDITION: /HBN28@425A1A
- 最終痴漢電車 DVD EDITION: /HB28@434467C (original code has extra C, might be typo)
- 最終痴漢電車２: /HB28@432C9C
- 瀬里奈: /HB28@43E2AC
- ダンジョンクルセイダーズ: (dc_up04) /HB28@4245FB
- ダンジョンクルセイダーズ2～永劫の楽土～: /HB28@4101B8
- 虜ノ姫: /HBN28@40F40F
```

### [August]
```
- FORTUNE ARTERIAL: /HAC@41EBD0 or /HA8@41B010 /KS
- 夜明け前より瑠璃色な: /HA8@414040 or /HA68@4057F0
- 夜明け前より瑠璃色な-MoonlightCradle-: /HSC@44782A or /HAC@421920 or /HA8@414040 or /HA68@4057F0
- 夜明け前より瑠璃色な-Brighter Than Dawning Blue-: /HSC@44782A or /HAC@421920
- 穢翼のユースティア：/HA8:-14@421530 /pnBGI.exe
```

### [AXL]
```
- 恋する乙女と守護の楯: /HSN14:-10@43BBAD
- キミの声がきこえる: /hs+10@443DA0
```
### [AXL/Studio Miris]
```
- チュートリアルサマー: /HB8*0:4@42F2E0
```

---
## More H-Codes (List 3)

### [Bannou Honpo]
```
- ビーチ区バレー　～マッシブとミニスカとスペルマ～: /HAN-C@E5F5C
```

### [Baseson]
```
- 恋姫†無双～ドキッ★乙女だらけの三国志演義～: (v1.00) /HS4@4F7730 / (v1.02) /HS4@4F8E90
```

### [Basil]
```
- それは舞い散る桜のように: /HSN3C@4423E6
```

### [Belisama]
```
- ダストマニアグロテスク ～解体挿入新書～: /HQN-1C@10131E43
```

### [Beenyan]
```
- 痴漢貴族: (requires kizoku_up patch) /HB10*0@41168B or /HB-10*0@40F656
- おすめすたいむすりっぷ！(version 1.01): /HB4*0@433EBF
```

### [Bianca]
```
- 人妻遊戯: /HS-4*0@45BC40 /KF
- 淫欲母娘: /HS-4*0@45BC40 /KF
- お姉さんがおしえてア・ゲ・ル: /HS-4*0@45BC40 /KF
```

### [Bjoern Bjoern]
```
- 八咫の帰還 (Standard Version): /HA-C:8@F3B24
- 八咫の帰還 (Updated Special Version): /HA-C:8@F3D54
```

### [Black Cyc]
```
- 闇の声ZERO: /HS-C@47DBA0 or /HS10@47DBA0
```

### [Black Rainbow]
```
- 相姦遊戯: /HB4*0@403003 (Note: not work for window 7)
```
### [Black Rainbow with ニコチンソフト]
```
- 新婚性活：/HB4:B@58BF80
```
### [Black Tale]
```
- きまぐれ不良道: /HAN-C@F4360 /Ftext@1
```

### [Bloom Handle]
```
- 恋と水着と太陽と～スミレ島ライフセーバーず～：/X3 /KS1
```

### [Bluegale]
```
- ふくびき！トライアングル:  /HA18@48C0A4
- 禁区に咲く花～淫徳の牝姉妹～: /HB10*0@429880
- 鬼父２: /HA18@4AE5B8
```
### [Bluegale Light]
```
- 妻交換～あいつのワイフと俺の嫁～: /HAN1C@491E24 /Ftext@1
```
### [Bluegale LIGHT]
```
- JKと淫行教師 ～夜回り先生編～: /HA-C@48BDCD
- JKと淫行教師2 ～痴漢電車編～: /HA-C@48D6AD /pnjk2.exe
- JKと淫行教師3 ～万引き少女編～: /HA-C@493351 /pnjk3.exe
- JKと淫行教師4~なまいきモデル少女編~: /HA-C@493351 /pnjk3.exe
- JKと淫行教師5～借金姉妹編～：/HA-C@492429
- JKと淫行教師6～ラブラブカップル寝取り編～：/HA-C@492429
- JKと淫行教師SP～渡る世間はエロ教師ばかり～：/HA-C@492565
```

### [bootUP!]
```
- あねいも エターナルエディション：/HBC@55BE0:aneimoee.exe
- FUTA・ANE～ふたあね～bitter＆sweet: /HBC@454DC0 /pnFUTAANE.exe
- あねいも: /HBC@44BA10
- あねいも２: (UPAI2_101) /HBC@44BE70
- あねいも２Ｈ’ｓ　～もっとＨにステップＵＰ！～!: /HBC@44CC30
- あねいも２　いもいもＦＤ　～皐月＆唯のＬＯＶＥエロプチ旅行編～: /HBC@44CC30
```

### [Broccoli]
```
- プリズムパレット: (use priconUpdate101) /HA-4@496714
- ギャラクシーエンジェル Eternal Lovers: /HAN20@9A1C:2DGrpLib.dll (must use /p)
- ギャラクシーエンジェル Moonlit Lovers (w/ Chitose Add-on): /HAN1C@D909:Iks2DGrp.dll (must use /p)
- ギャラクシーエンジェル: Project Galaxy Angel: (DVD or CDROM Ver. 1.1.0)
  /HANC@5051:Iks2DGrp.dll (must use /p)
```

---
## More H-Codes (List 4)

### [C:drive]
```
- 催眠生活～校則だからしかたない！？～: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- 巫女だし: /HA-10@44B450 (use /pn)
- ツイ☆てる: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- してして: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- おいしい魔法のとなえかた。: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- ステルラエクエス　コーデックス　～黄昏の姫騎士～: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- ステルラエクエス: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
```

### [C-Side]
```
- 赤線街路～昭和33年の初雪～: /HWN-4*14#1@53FDDA /KS3 /KF1:30
```

### [Cage]
```
- ナイショのよりみち: /HA-10@44B450 (use /pn)
- ぷる萌えンジェル アイドルあいこ: /HAN24@46F6B5
```

### [Candysoft]
```
- すうぃと！: /HB4*0@449100 /KF
```

### [CandySoft]
```
- もっと 姉、ちゃんとしようよっ！ アフターストーリー：/HSN-4@4FF1B:mottoaneas.exe
- つよきす3学期：/x3 /fText@44ee95:0（最好加/pn） (Note: Best to add /pn)
- メカミミ： /HB-8*@42AFA7 （Version: 1.0.0.0）
- メカミミ： /HB-8*@42AF97 （Version: 1.1.0.0）
```

### [Caramel Box]
```
- ボクの手の中の楽園: /HSN14@414FC5 /KF or /HSN14@414F82 /KF
- 終末少女幻想アリスマチック: /HBC*0@4086D0
- うつりぎ七恋天気あめ: /HBC*0@407E70
- 処女はお姉さまに恋してる　2人のエルダー: /HSN8@415CF0
- やるきばこ２ エピソードＶ：やるきねこの逆襲: /HSN14@40F697 /KF or /HBNC*0@40FF90
- 処女はお姉さまに恋してる 3つのきら星 /HWN18*0@53A964
```
### [Caramel Box ミルク味] (Caramel Box Milk Aji)
```
- 雨芳恋歌 「センセイ。わたし、もうオトナだよ……」：/HS4@7E6612 /KF /FDialogue@81B556
```
### [Caramel Box Ichigo Aji]
```
- とっぱら ～ざしきわらしのはなし～: /HSN14@415FB5 /KF
```

---
## More H-Codes (List 5)

### [Carmine]
```
- 空蝉に触れるもの: (Utsu_UPD) /HA4@41A130 or /HB20*0@41A130
```

### [Catwalk NERO]
```
- 淫堕の姫騎士ジャンヌ～オーガの仔種を注がれる気高き姫！～: /HA14@40F200
- 聖徒会長ヒカル～淫魔に占領された学園～: /HAN-C:-14@4458F8 (use /pn)
```
### [catwalkNERO]
```
- 性器雇用 製薬会社の新人狂育「一日一錠、わたし身も心も捧げます!」：/HAN-C:-14@448278 /pnRealLive.exe
```

### [Chain Reaction]
```
- 巫女だし: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
```

### [Chariot]
```
- 処女と魔王とタクティクス: /HW8@4EF330 /KF
```

### [Chien]
```
- 冷徹冷静しかしてXXX！！: /HWN-4*14#1@53FD82
```

### [Chiffon]
```
- デュアルカラーズ: /HS4*0@40C208 /kf /w40741C
- 看護日誌マニア: /HS-4*0@45C08C /KF
- 魅惑の独り妻: /HS-4*0@45B58C /KF
- 陵辱裁判: (rsbup101) /HS-4*0@45B58C /KF
```

### [Chuable]
```
- Pure x Cure: (purecure_patch20) /HW-4*14@505BFC
```

### [Circle Yuki]
```
- 退魔師イズミ: /HAN-C@F384C /Ftext@1
```

### [Ciel]
```
- 人形哀歌: /HSN-1C@40A401 /KF /Ftext@1;choice@40FD1B:787878
- そらのいろ、みずのいろ: /HB10*0:-14@0:GDI32.DLL:TextOutA
```

---
## More H-Codes (List 6)

### [Circus]
```
- あるぴじ学園１.５:/HS-10@41BC65 /KF
- ことり Love Ex P: /HBC*0@421440
- C.D. Christmas Days: /HBC*0@417BD0
- C.D.C.D 2: /HBC*0@420CA0 or /HB-C*0@420CA0
- ダ・カーポ プラスコミュニケーション: /HBC*0@416F90
- ダ・カーポ Summer Vacation: /HBC*0@427890
- ダ・カーポ　ホワイトシーズン: /HBC*0@408180
- ダ・カーポ アフターシーズンズ/After Seasons: /HBC*0@41F920 or /HB-C*0@41F920
- ダ・カーポ II: /HBC*0@419200
- D.C.II Fall in Love: /HB8@421470
- D.C.II プラスコミュニケーション: /HS8@41B710
  /Fdialogue@41F3C6;names@41F3A1;choices@41AD57
- D.C.II Omake Disk feat. Yun2!: /HBC*0@419060
- D.C.II Spring Celebration: /HBC*0@41EA20
- D.C.II To You: /HSN8@41CC90
- エターナルファンタジー: /HBN-14*0@48085B or /HBN44@460E00 /KS50
- ホームメイド: /HBC*0@416D70
- ホームメイドスイーツ: /HSN8:14@419550 (furigana mixed in, but choices
  visible in AGTH) or /HBC*0:24@41EAE0 (furigana filtered out, but choices
  not in AGTH)
- 舞-HiME 運命の系統樹: /HBC*0@41E190
- Owaru no Yakata series: /HBC*0@408100
- Princess Party: /HS-20@422B59
- Princess Party Camellia: /HB8@420F70
- SAKURA～雪月華～: /HBC*0@4175E0
- 水夏A.S+ ~SUIKA~: /HBC*0@416F90 or /HSN-20@41A6EA
- すくみず2～泳・げ・な・い～: /HBC*0@417800
- ヴァルキリーコンプレックス: /HSN-1C@413CDF
```

### [Citoron Soft] (Citron Soft)
```
- 妹スマイル: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
  /Fdialogue@4325F5:1;choices@4328C3:0
```

### [Clochette]
```
- スズノネセブン！: /HAN8:-1C@4A86D4
```

### [CLOCKUP]
```
- ノーブレスオブリージュ: /HSN-C:-C@405DE7 /KS /Fdiag@1:2982C68
- 癒されご奉仕～夢の館で賢者タイム！～: /HB-C*0:14@405DCB /Fdialogue@3:412603
- くろふぁん２ＧＨｚ: /HBN-4*0:120@429F88
- 麗辱の館 ～淫縁五姉妹汁姦記～: /HSN-8@43D1A3
- レクイエム: /HSN-1C@41C094
- まかぱらっ!～あの世でめちゃモテ～：/HS-20:-4@425641 /KS4
```
### [CLOCKUP/C.C. CLOCKUP]
```
- ザーメンセキュリティ２００９: /HBNC*0:20@42CD70 /KS7
```
### [CLOCKUP Team Anise]
```
- 凌辱学園長／奴隷倶楽部 ～読心調教録～: /HBNC*0@415E95 or /HB4@411A11
```

---
## More H-Codes (List 7)

### [Clover]
```
- ている・ている: /HAC@402C10 /KS
```

### [CODEPINK]
```
- Sweet Home～Ｈなお姉さんは好きですか？～: (for dialogue) /HS-4@402570 or /HS-C@402570 | (all
  text including menus) /HA8@401500 /KF or /HA-4@401500 /KF
```

### [Comet]
```
- &LOVE: /HSN-8@414059
```

### [COMPLET'S/Authoring Heaven]
```
- ボクの｢なつやすみ｣ヒミツたいけん: (UPDBNH01PK) /HB-1C*0@40BAF0
- 母性 -ママクラブ-: /HBC*0@40CDC9
- ボーイミーツワイヴス: /HB-1C*0@40E020
- ふたりは！？: /HB-1C*0@40E5F0
- マコトね～ちゃんのボク教育法？！: /HB-1C*0@40DFA0
- ママしぼり２（ママしぼりの事情）: /HB-1C*0@40DF90
- ママ！つま？: (UPDMAM01) /HB-1C*0@40E100
- まってぃ: (updmty01) /HB-1C*0@40ACF0
- もうすぐ夏休み！: (UPDMNAT1) /HB-1C*0@40DF80
- 中出しティータイム 召しませクリームパイ: /HB-1C*0@40DF90
- お願い！委員長！！: /HB-1C*0@40E510
- 野外学習: (UPDYAG01) /HB-1C*0@40DD00
- 続・ママクラブ: (updzmc01) /HB-1C*0@40B270 (Original HTML was missing code, added from similar)
- 診てくださいます？：/HBN-20*0:38@40DF14
- ツマ×ヘヴン：/HBN-20*0:38@0040DBF4 /PNC4.exe
```

### [Compromise Comprog]
```
- Silent Desire 1 and 2: Use hacked game .exe found here and /HBN-4*0:4@4CE995 (Note: "found here" refers to original wiki context)
```

### [Cotton Soft]
```
- ぐらタン: /X3
- アンバークォーツ: /X2 /W414C49
- ナツメグ: /HB10*0@411E2B or /HB-18*0@40FD90
- ナギサの: /HSNC@413B90
- レコンキスタ: (recon_update101) /HB-1C*0@413EC7
```

### [Craftworks]
```
- さよならを教えて～comment te dire adieu～ : /HSN-4@430B80
```

### [Creamy Trips]
```
- ブリードブラッド: /HBN-1C*0@40F3AB
- アーツ オブ ブラック〜魔女の箱庭〜: (aob104) /HWN-8*0@10D8B:libscr.dll: or /HWN-C*0@10D8B:libscr.dll:
```

### [Crepe]
```
- 海賊王姫アルフィアナ～淫堕と触手の幽霊船～: /HA04@418FB8
- 闘魔忍伝 ハルナとマヤ～淫触蟲に、くノ一堕つ～: /HSC@4044C0 /KF /FDialogue@43B57D;Choices@43BCF0;Names@43D185
- 変身淫魔少女 かりん～淫らな悪魔はHがお好き～: /HSC@4042B0 /KF
```

### [Crossnet]
```
- Deep Voice: /HA4@1001B0F0 /KF
```
### [Crossnet-Pie]
```
- リゾートBOIN: /HBC*0@4044C0 /KF
```

### [Cyc/Black Cyc]
```
- 夢幻廻廊: /HSN14@412EF0 /Ftext@1
```

### [Cyon]
```
- 淫獄病棟1&2: /HA-C@41679C
```

### [Dark Rose]
```
- 境界線の果て ～ふたつの性別、ふたつの性格～: /HBN10*0:8@488C70
  /Fdialogue@1:18;speaker+choice@1:1A;furigana@1:A /w1:18
- ターゲット -堕ちる姉妹-: /HB18*0@4A7840
```

---
## More H-Codes (List 8)

### [Debo no Su] (Debonosu Seisakusho)
```
- 神楽道中記: (Ver. 1.01) /HS4@440A7B | (Ver. 1.02) /HSN@440B85
- 神楽学園記: (Ver. 1.00) /HS0@424B80
- 神楽幻想譚～妖かしの姫～ (update1.01e): /HS-4@4B80DB or /HBN-C*0@4B77CC
```

### [Delta]
```
- 露出人形 ～恥ずかしさに震える少女～: /HS+4@41CF90
- 麗佳牝犬調教～××に犯されて…～: /HBNC*0:4C@40EC21
- MONSTER PARK～化け物に魅入られし姫～: /HS4@41E9B0 (DL)
  /HS4@41EA00 v1.1 (DL)
- 魔法の守護姫アルテミナ：/HSN-C@41CFD7
```

### [DIVA]
```
- こいらぼ[KOI-LABO.]: /HA-20:-10@13F970:resident.dll
```

### [Digi Anime]
```
- Present Play DVD版 /HBC*0@4010C3 /KF
```

### [Digital Lover]
```
- SchoolCaptain 会長候補はご立腹: /HWN10@49DC80 /Ftext@1
```

### [DisAbel]
```
- オタカノ－こんなに可愛い彼女がオタクなわけがない－：/HB-4@4042B2 /ks4 /kf4
- ぷりサガ！～ボクの妃は×××～ : /HBC*0@4044B0 /KF
- メイでぃ！～ご主人様は同級生～: /HBC*0@404500 /KF
- ぷりサガ！Ｘ: /HSC@4044C0 /KF
- 彷徨う魂に安らぎの刻を : /HB4@404270 /KF
- 彷徨う魂に安らぎの刻を : /HSC@4044D0 /KF (Duplicate title, possibly different versions or alternative codes)
- すくぅ～る・らぶっ！～恋と希望のメトロノーム～: /HBC*0@4042B0 /KF
- すくぅ～る・らぶっ！２～恋するパフェちっく～ : /HBC*0@4044B0 /KF
- すくぅ～る・らぶっ！３～未来へのアレグレット～: /HB-4@4042B2 /KF
- Ｓｉｍらぶっ～ひと夏の奇跡～ : /HB4@404260 /KF
- オタカノ－こんなに可愛い彼女がオタクなわけがない：/HBC*0@4044f0 /kf
```

### [DISKDREAM]
```
- Endless Serenade : /HS-4@456CEF /KF
```

### [DualTail]
```
- VenusBlood -EMPIRE-:/ks /fText@547a59:12;Message@547f9e:12;Description@54800c:e;Choices@547f9e:14 (Note: 00c might be a typo for 0C)
```

### [E.G.O]
```
- うちの妹のばあい: /HA4@4493A0 | (uchiimoj101) /HB18@447A10
```

### [eants]
```
- ARCUS X: /HBC*0@4044C0 /KF
- ARCUS X シムサード、淫欲調教の宴: /HB4@404260 /KF
- ARCUS X Complete Edition: /HB-C*0:-14@404260 /KF
- てほどき交感 友母 みなみ～おばさん、ダメだよ!あぁ、ボク気持ちいい… ~: /HA-C@419F64
```

### [eigthnote]
```
- 絶対幸せ宣言っ！: (zssup2) /HBC*0@4044C0 /KF
```

### [Elf]
```
- あしたの雪之丞 DVD Special Edition: /HBN-10:4@4090C0 /Ftext@1:416A7A (must replace game .exe with this one)  or /HBN-10@16B24:Ai5win.exe
- AVキング: /HB18*0@4B4686
- 勝：あしたの雪之丞２: /HA-C@416722
- 新・御神楽少女探偵団: /HAN8:-10@401865 /w1:11f800 (use /pn)
```

### [Eroge Honpo]
```
- 恥淫ノ教室～女教師とその娘に××する～: /HA4@418FD8
```

### [EROGOS]
```
- 淫シリーズ　特濃生中出し: /HB-C@405340 /KF
```

### [ES-Pot]
```
- マジカルチェンジゆうきくん: /HW-4*14@54230C#1 /KS /KF
```

---
## More H-Codes (List 9)

### [Etoiles]
```
- 姫×姫: /HS4@427650
- Elle: PrieR ～しあわせの欠片をさがして～: /HS4@42E130
```

### [Etude]
```
- 秋空に舞うコンフェティ: /HAN1C:14@49234C /KS6
```

### [Eufonie]
```
- カラフル アクアリウム: /HA14@47FEF0 /KS8
- ひだまりバスケット: /KS /HA-20@48BF80
```

### [Evee]
```
- LOVExEVOLUTION: /HA-4@41ED20
```

### [EX12]
```
- 他人妻～誘淫～：/HW-4@41A3B0
```

### [Fairytale]
```
- エスカレーション-HARD CORE-: /HBN-20*-3@40879F /KS
```

### [Falcom]
```
- 英雄伝説VI 空の軌跡: (Update 1046) /HA-8@4A6A50 /W4A63A0 /KF32:16
- 英雄伝説 空の軌跡FC: (ED6_1046) /HB4*0@4A6370 /KF32:16 or
  /HB-20*0@4A6370 /KF32:16
- 英雄伝説 空の軌跡SC: (SR2_1020) /HB4*0@4C29A0 /KF32:16 or
  /HB-20*0@4C29A0 /KF32:16
- 英雄伝説 空の軌跡the3rd: (SR3_1001) /HB4*0@49C140 /KF32:16 or
  /HB-20*0@49C140 /KF32:16 | (SR3_1002) /HB4*0@49C0C0 /KF32:16 or
  /HB-20*0@49C0C0 /KF32:16
- ZweiII: (Z2_1001) /HSN-20@425629 /KF or /HS4@4E8080 /KF
```

### [Ferret]
```
- AngelKnight: /HS4*0@40D128 /kf /w407D31
- 花触の罠（かしょくのわな）Special Disc: /HS4*0@40D160 /kf /w407D69
- 華鬼（けおに）: /HS4*0@40D160 /kf /w407D69
- 黒の十字架～per aspera（ペルアスペラ）～: /HS4*0@40D160 /kf /w407D69
- LoveSongを君に…: /HS4*0@40D128 /kf /w407D31
```

### [FIANCEE]
```
- 美衣菜△です！（みいなさん、かっけーです！）－Loveイチャ同居生活のススメ－：/HBC*0@4044F0 /kf
```

### [Fizz]
```
- 朝凪のアクアノーツ: /HB20@4EB795 or /HB4*0@4C13C0 /KF2:50
- さくらのしっぽ～さくらテイルファンディスク～:/HB4*0@572920
- ましろぼたん: /HB-4*0@4BFACA
- さくらテイル: /HB4*0:2E0@57FA90
- さくらテイル-the tale of cherry blossoms septet- ver 1.02a:
  /HB4*0@57d2a0
```

### [Frill]
```
- Frill Extreme Collection: /HA4@47DCB7
- ボイン姉妹の個人授業: /HA-20@40ED20 or /HA4@40ED20
- 痴漢専用車両２: /HAN-C:-14@445478 (use /pn)
- 孕ませ王: /HA4@40ED80 (use /pn)
- 姫剣士エステル -孕ませ王２-: /KF /HW8@432d10 /pnSiglusEngine.exe
```

---
## More H-Codes (List 10)

### [Frontwing]
```
- あきばこ～「私立アキハバラ学園」ファンディスク～ : /HB18*0@44011C
- ボーイミーツガール: /HAC*0@4243C4 or HA14@4243C4
- ふたごえっち: /HB4*0@43FBA8 (use /pn)
- ほしうた: /HBN-C*1@4DA701 /Ftext@1
- ほしうた～Starlight Serenade～: /HBN-C*1@4E8BA1 /Ftext@1
- きみはぐ: /HB-C*0@4C2B8C
- 魔界天使ジブリール: /HSN0@434FEE
- 魔界天使ジブリール  -episode 2-: /HSN0:C@405484
- 魔界天使ジブリール Vista对应版: /HSN-C:-8@50F623
- 魔界天使ジブリール -episode 2- Vista Version: /HBN-C*1@4D2276
- 魔界天使ジブリール -episode 3-: /HSN-C:-8@509091
- めがちゅ！: /HAC@47E762
- 私立アキハバラ学園 (Ver. 1.01): /HB18*0@44011C
- そらうた: /HA14@422FCC
- そらうた Vista对应版: /HBN-C*1@4DDF45
- フーリンガン: (Ver. 1.01) /HB-4*0@43B444
- タイムリープ: /HBN8*0@447000 | (Ver. 1.01) /HBN8*0@4470F0
- グリザイアの果実 ：/HA8:-4@2E7BB:gdi32.dll
```
### [Frontwing/Survive]
```
- セパレイトブルー: /HSN-20:C@44B96A
- ゆきうた (Ver. 1.02): /HB18*0@4406C0
- ゆきうた Vista对应版: /HBN-C*1@4DDF45
```

### [Fukuneko]
```
- みみ×みみ！～発情注意報～ : /HB-18*0@40FE30
```

### [Fulltime]
```
- 痴漢は犯罪！: /HAN-C:-14@48DD78 (use /pn)
```

### [Gage]
```
- 牝姫の虜-廃校舎の制服少女-: /HA14@47FE98 /KS8
```

### [GIGA/HUG]
```
- 明日はきっと、晴れますように: /HSC@451E70 /KF
```
### [GIGA/Daisy]
```
- Always ～ふと、気が付けばキミとの日常～: /HB4*0@439BF0 or /HB4*0@439B50
```
### [GIGA]
```
- BALDR FORCE Standard Edition: /HB-8*0@4A0F90
- BALDR FORCE EXE: /HB-8*0@49DDCD | (With Hell Mode Add-on): /HB-8*0@49DDBD
- Ripple: /HBN-8@4043C5
- V.G. Re-birth: /HBN-4*0@40FA0D
```
### [GIGA/Pizzicato]
```
- こいちゅ！～恋に恋するかたおもい～: /HB4*0@424F91
```
### [GIGA/Armonica]
```
- Skyprythem: /HW-4*0@54689C
```

### [Gindokei]
```
- こいとれ ～REN-AI TRAINING～: /HAC@41C630
```

---
## More H-Codes (List 11)

### [G.J?]
```
- あなたの知らない看護婦 ～性的病棟24時～: /HAN4:-4@409BAE
- 姫とボイン: /HAN4:-4@40924F
- 魔女道～あの散り際の美しさ～: /HAN4:-4@40931F
- ボンジョルの！～女王は制服を脱いだ～: /HAN4:-4@4094AE
- 妻とママとボイン: /HA-10@40ACAD
```

### [G-Spot]
```
- 今日のおかず (for msvcp80.dll): /HW4@0:msvcp80.dll:#2631 or
  /HW4@0:msvcp80.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
- 今日のおかず (for msvcp90.dll):
  /HW4@0:msvcp90.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
- 今日のおかず～ネトラレヅマ 第三夜 斎藤しづか: /HWN-8@1871A:libscr.dll (use /pn)
- 今日のおかず 放課後の姉 ～白濁輪姦陵辱の罠に陥ちた 雨宮真名：/HW4@0:msvcp90.dll:?push_back@?$basic_string@GU?$char_traits@G@std@@V?$allocator@G@2@@std@@QAEXG@Z
```

### [Groover]
```
- グリーングリーン: /HB-1C*444A5A@41CFA4
- グリーングリーン2　恋のスペシャルサマー: (use GG2_101) /HB10@422911
- グリーングリーン3　ハローグッバイ: (use GG3_update101) /HB4*0@415AA0 or
  /HA1C@415AA0
- 鐘ノ音ダイナティック: (use dynatic_update101) /HB4*0@415AA0 or
  /HA1C@415AA0
```

### [Guilty+]
```
- 痴漢サークル: /HB8*0:28@0:GDI32.dll:GetTextExtentPoint32A
  /Fchoices@42FE3E:ffffff;text@42FE3E
- 痴漢サークル2: /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A
  /Ftext@433A52:0;choices@433A52:ffffff
- 痴漢サークル3～人妻ダイヤグラム・完結篇～:
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A
  /Ftext@433AE2:0;choices@433AE2:ffffff
- RIN×SEN～白濁女教師と野郎～:
  /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A/Ftext@4339A2:0;choices@4339A2:ffffff
- Last Waltz ～白濁まみれの夏合宿～: /HB8*0:44@0:GDI32.dll:GetTextExtentPoint32A
  /Ftext@4339A2:0;choices@4339A2:ffffff
```
### [Guilty]
```
- 種憑け村～白濁神、念仏講ノ儀～：/HA-C:40@0:GDI32.dll:GetTextMetricsA /KS7
  /w00432DBF:141414FF
```

---
## More H-Codes (List 12)

### [H+]
```
- ANI嫁だからっ！: /HAN24@46EAC5 /pnaniyome.exe | (Ver. 1.01)
  /HAN-4@46E321
- ひきこもり向け人妻せんせい: /HAN24@474615 (use /pn)
- 人妻ネットオークション: (auction_v101) /HA8*0@459290
- 新妻女教師: /HAN24@473035 (use /pn)
- KAIHATSU（生） 女子アナ開発: /HA8*0@46D530 or /HA20@46CD00
- KAIHATSU（生） 女子ゴルファー開発: /HA8*0@46D590 or /HA20@46CD60
- KAIHATSU（生） 女市長開発: /HA8*0@46D3F0 or /HA20@46CBC0
- KAIHATSU（生） 温泉おかみ開発 : /HA8*0@46D3F0 or /HA20@46CBC0
- つま恋。: /HA8*0@45AC40
```

### [Hadashi Shoujo]
```
- 素直くーる: /HA-18@478A47 (use /pn)
```

### [Hakudakukei/Milk Crown]
```
- 人妻追っかけ痴漢！DL版: /HSN-1C@414527
```

### [Ham Ham Soft]
```
- ド田舎ちゃんねる5～こちら鈴音学園放送部～: /HAN-C:-14@4488E8
```

### [H-do C]
```
- 夢見白書: /HQ8@469647
- 夢見師: /HA-1C@4205F0
```

### [Hanimaru]
```
- てほどき交感～: /HA-C@41A10C (use /pn)
```

### [HammerHeads]
```
- 熟処女～私、はじめてなんです……：/kf /HBC*0@4044F0
```

### [Haou]
```
- ぼくの巫女は小さな恋妹～寵愛～: /HB10*0@411BCB
- ハードスキャンダル～淫欲の女教師～ : /HSN0@411D84 /Ftext@1
- 秘密生活～ひとつ屋根の下～: /HB10*0@4106D9 or /HB-10*0@40E8B6
- 女体採集～女の股に潜む蝶～: /HB-1C*0@413EC7
- おかあさんとな・い・しょ～美人母娘、別荘監禁7日間～: (ver1.00) /HB10*0@410B49 |
  (ver1.01)/HB10*0@410C0B
- 陵辱仕置人(after using shioki1_up patch): /HB10*0@4109E9
```

### [Hearts]
```
- メルクリア ～水の都に恋の花束を～: /HW-4*0@5D3132 (use text extractor here)
```

### [HERMIT]
```
- 世界でいちばんNGな恋: /HA-1C@44FF44 or /HS1C@40EB70
```

### [Highsox]
```
- 絶対女子寮域！: /HWN4:-4@4BEB55
```

### [Honey Pot]
```
- 黒髪少女隊りばーす！: /HH-1C*0@4204E6
```

### [Honky-Tonk Pumpkin]
```
- キラリ☆南国小麦色～潮吹きパラダイスへようこそ！～：/HB8@41E4A0
```

### [Illusion]
```
- 尾行: /HSN4@63C012 /KF
- すくぅ～るメイト: /X /KF /HSN0@46AD29 /W1
- すくぅ～るメイト2: /X /KF500:1000 (Window mode)
```

### [Ivory]
```
- 桜待坂Stories vol.1: /HA-C@414BDC
- 桜待坂Stories vol.2: /HA-C@417B60
- わんことくらそう: /HA-C#1@418E1F
```

### [Janis]
```
- CANDY TOYS: /HA-C@411728
- とらいあんぐるハート DVD Edition (use thd20020623.exe patch from official
  site): Triangle Hearts = /HB+4*0@41D730 | Triangle Hearts 2 =
  /HB+4*0@41DB90 | Triangle Hearts 3 = /HB+4*0@41D6E0 | Love Love Toy Box =
  /HB+4*0@41DD10 | Lyrical Toy Box = /HB+4*0@420AC0 | Toraha DVD Omake
  Scenerio = /HB+4*0@41C850
```

---
## More H-Codes (List 13)

### [Jellyfish]
```
- LOVERS～恋に落ちたら…～: (LOVERS104PATCH) /HB4@26E90:ism.dll /PNlovers.exe or /HA-C@27A8A:ism.dll (use /pn)
- LOVERS～恋に落ちたら…～ Gaiden for TECH GIAN: /HA-C@2791A:ism.dll
- LOVERS～恋に落ちたら…～ PREMIUM PACK (DVD Version): /HA-4@1FF90:ism.dll: or /HA4@1FF90:ism.dll: (use /pn)
```

### [Jitensha Sougyou]
```
- Lost Colors: /HSN-4@41350A
```

### [Joker]
```
- 恋夏～れんげ～: /HB8@422580
```

### [Juliette]
```
- ご主人様へ: /HBEC*0@40E8CC or /HA4@44E493
- 夏色公園～電波塔の下で愛を語る～: /HBEC*0@40EDBC or /HA4@450103
```

### [Karen Soft] (可憐ソフト)
```
- 巫女縛り: /HB-C*0@419308 or /HBN-C*0@419308
- お嬢様はマゾ: /HA-C@418DD4
```

### [Keroq] (ケロQ)
```
- 素晴らしき日々～不連続存在～: /HAC@423390
- 二重影: /HSN-C@413FDC
```

### [Key]
```
- クドわふたー: /HAN-C:-14@448878 /pnREALLIVE.EXE
```

### [Kid]
```
- 12RIVEN: /HSN@450EAA (use /pn)
- 秋之回忆 After Rain Vol. 1: /HBN-10*0@41F304
- 秋之回忆 After Rain Vol. 2: /HBN-10*0@41FA40
- 秋之回忆 After Rain Vol. 3: /HBN-10*0@420950
- 秋之回忆 二重奏: /HBN-1C*0@40C147
- 秋之回忆 想君 DVD版: /HS-20@41AE10
- 秋之回忆 从今以后 DVD版: /HBN-1C*0@41D74F
- 秋之回忆 从今以后: /HS-C@4B5080 or /HS8@4B5080
- 秋之回忆5 中断的胶片: /HS5C@44F0BE
- Remember11: /HBN8*0@441DB0 /FText@1
```

### [Koei]
```
- 无双大蛇: /HA4@4CF330 /KF
- 真三国无双2: /HA-4@523E60 /KF or /HA8@523E60 /KF
- 真三国无双5: /HAN-8@5588DD /KF
```

### [Kogasha] (高臥舎)
```
- 癒し系ソープ嬢ヒロさん: /HA4@5593B0
```

### [Kuro-Hina]
```
- 超満淫～美乳姉妹車内調教: /HSC@4044D0 /KF
- 放送禁肢～女子アナ凌辱生中継: /HBC*0@4044C0 /KF
- 淫辱診察室～愛欲のカルテ: /HBC*0@404500 /KF
- 淫辱スタジオ～背徳の密室オーディション: /HBC*0@4044C0 /KF
- 淫辱スタジオ TAKE2～姦獄鬼畜ショータイム: /HSC@4044C0 /KF
- 淫辱スタジオ 最終テイク～薄汚ねえシンデレラ: /HSC@4044D0 /KF
- 女教師を喰らう: /x3 /HB4*0@4839A7 /Fdialogue@43F8CF;all(choices,junk)@4839BE /W43F8CF
- 姦熟女教師～肉欲に濡れる罠: /HSN0:C@486678/Fnames@1:440D94;dialogue@1:4413F3;choices@1:4423C0
- 姦熟姉妹～母ふたり乳搾り: /HSC@4044C0 /KF
- 家庭訪悶: /HBC*0@4044C0 /KF
- 家政夫鬼平～潜入！未亡人一家女体まみれ: /HBC*0@404500 /KF
- 女教師を喰らう: /HBC*0@4044C0 /KF
- 隷属秘書～牝犬オフィス調教課: /HBC*0@4044B0 /KF
- 水泳調教師～母娘羞恥レッスン: /HBC*0@4044C0 /KF
- 体育調教師～鬼畜授業ブルマー遊戯～: /HBC*0@4044B0 /KF
```

---
## More H-Codes (List 14)

### [Kur-Mar-Ter]
```
- 邪！！ ぱんでみっく: /HA-10:48@4ABBB8
```

### [La'cryma]
```
- True Tears: (apply TT_Pach101) /HBC*0@424280
- fortissimo//Akkord：Bsusvier:1.0.0.1：/c /kf1:200 /HSN-1C@41AAB6
- fortissimo EXA//Akkord：Bsusvier：/kf /HSN-1C@41C3A2
```

### [Lapis Blue]
```
- BIFRONTE～公界島奇譚～: /HB-4*0@42CA50 or /HB10*0@42CA50
```

### [Lapis lazuli]
```
- Areas～恋する乙女の3H: /HA-10:58@4ABD58
```

### [Le Chocolat]
```
- Answer Dead: (use update patch) /HA-4@40F530 /FDialogue@424CAB /KS /KF
- あやつりブルマー: /HBC*0@4042B0 /KF
```

### [Leaf]
```
- 星の王子くん: /HSN-4@42F2C0
- 君が呼ぶ、メギドの丘で: /HS-8:8@5D001B or /HBN-8*0@4FC681
- 痕－きずあと－ (Re-release): Use loader located here (freeze work-around here) (Note: "located here" refers to original wiki context)
- 鎖－くさり－DVD: /HB4*0@4179D0 (Must patch with this NoDVD patch first)
- 愛佳でいくの!!～Leaf Amusement Soft Vol.5～: Dragon Chronicle Guilty
  Requiem: /HWN-8@40138F or /HWN-8@100138F | Mananatsu: /HSN-1C@410217
- Routes: (DVD) /HB14@47CA20 /kf | (CD) /HS1C@476999 /KF
- 雫－しずく－ DVD: /HB14@47D460 /kf
- 雫－しずく－ (Re-release w/ Kizuato): Use loader located here (Note: "located here" refers to original wiki context)
- 誰彼～たそがれ～: /HB30@485440 /KF
- Tears to Tiara: /HSN1C@410EBD /KF
- ToHeart2 X-Rated: Use this loader and instructions found here (Note: "found here" refers to original wiki context)
- ToHeart2 Another Days: Use this loader or follow the
  instructions found here | (Ver. 1.02) (Note: "found here" refers to original wiki context)
  /HSC@38286:AnotherDays.dll (use /pn)
```

### [Liebe]
```
- 人妻旅館: /HS-4*0@45BC40 /KF
- 先生！アエがせて♪: /HS-4*0@45BC40 /KF
```

---
## More H-Codes (List 15)

### [Light]
```
- ルナそら：/HAN-20@408d5e /pnmalie.exe
- Soranica Ele: /HQ-8@5157A1
- まじのコンプレックス: /HWN-4:-8@E168:tools.dll /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1
- あるすまぐな！-ARS：MAGNA-: /HW-C@47735C | (ars_update1201) /HWC*0@4087D0 or /HWN-C*0@408CBC /KF
- Dear My Friend Complete Version: (Ver1.00) /HA-88@40DBA0 | (Ver1.02) /HA-88@40DCB0
- Dies irae Also sprach Zarathstra: /HWN-10*-8@46B0FA
- Dies irae Also sprach Zarathustra -die Wiederkunft-: /HWN-10*-8:-10*10@46AC08 /KF
- Dies irea ~Acta esta Fabula~: /HWN-10*-8:-10*10@46AE28 /KF | /HWN-10*-8:-10*10@46AE01 /KF
- Dies irae ~Acta esta Fabula~ -Scharlachrot Grun-: /HWN-10*-8:-10*10@46BF32 /KF
- Dies Irae ~Interview with Kaziklu Bey~: /HWN-1C*0@7552A0
- ドキドキしすたぁパラダイス2: /HA8@40CDA0
- どんちゃんがきゅ～: /HWN-4:-8@E168:tools.dll /KF /FDialogue@1:3;Choices(BreakKeytoHalt)@1:1 (use /pn)
- 紅（くれない）: /HA8@40BC30
- Lightbox 2008 Dear My Friend Complete Version: /HW-C@46EFAA
- Lightbox 2008 潮風の消える海に: /HW-C@4677DA
- Lightbox 2008 Imitation Lover: /HW-C@46E39A
- Paradise Lost: /HAN-4@40CD70 /FText@1
- R.U.R.U.R: /HW-C@45C9FA
- さかしき人にみるこころ: /HW-C@46F914 or /HWN-C*0@408D20 /KF
- 潮風の消える海に: /HW-C@458E9B
- しょぱん！: /HWN8@408EA0
- カスタムSEXDOLL：/HAN-20:C@415BFC
- タペストリー -you will meet yourself-: /HWN-4:-8@C4F8:tools.dll /KF /FDialogue@1:3;Choices (BreakKeytoHalt)@1:1 (use /pn)
```

---
## More H-Codes (List 16)

### [Lilim]
```
- あい☆きゃん: /HB8*0@4442C0 /Ftext@457FA6;names@457E9A
- Blue Box: /HBN-18*0@430BD7 /W1
- 鳳凰戦姫 舞夢: /HAN4@411850 /KS /Ftext@1
- 医辱: /HA4:-14@4105C0
- Innocent Blue: /HBN-10*0@429313 /W1
- 女神大戦: /HA-4@412F40 /KF /KS
- 少女狩り: /HB10*0@41174B or /HB-10*0@40F716
- 昇龍戦姫 天夢: /HAN-4@413FA0 /KS /KF /Ftext@1 (use /pn)
- とらぶるっ！: (Ver. 1.00) /HB8*0@413550 /KS or /HA-4@413550 /KS | (Ver. 1.01) /HB8*0@413590 /KS
- True Blue: /HS100C@42FF4E /W1
```
### [Lilim/Choir]
```
- Aion Garden: /HB8*0@413790 /KS | (AG_up11) /HA-4@413790 /KS or /HA4@413790 /KS
```
### [Lilim Darkness]
```
- Dark Blue: (File menu) システム-> 設定 -> フォント->アンチエイリアスあり <(Uncheck)
- とらいあんぐるBLUE: /HB8*0@413230
- とらいあんぐるBLUE UPDATE 1.05: /HB8*0@413610
- White Blue: /HB8*0@FEB0:WhiteBlue.exe
```

### [Lillian]
```
- ティンクル☆くるせいだーす: (Ver. 1.30) /HBN-C@464123 (kurukuru.exe 60FPS version) or /HBN-C@463033 (kurukuru30.exe 30FPS version)
- ティンクル☆くるせいだーす プレミアムエディション: /HBN-C@463CE3
```

### [Lime]
```
- Maximum Magic（マキシマムマジック） Quirk Of Destiny: /HS204:-8@4E6A14 /KF /pnMaximumMagic.exe
```

### [little cheese]
```
- 黒と金の開かない鍵: /HAN-C@43E95C /Ftext@1
```

### [Little Princess]
```
- ふるふる☆フルムーン: /HB4*0@430F80 /KF or /HB-1C*0@430F80
```

### [Little Witch]
```
- リトルウィッチファンディスク～ちいさな魔女の贈りもの～: /HA-8@41F010 | (Ver. 1.2) /HA-8@41EED0
- ピリオド: /HBN4*0@4ADACC | (Ver. 1.1) /HBN4*0@4ADC7C
- ピリオド sweet drops: /HBN4*0@4B1EBC
- Quartett! スタンダードエディション: /HA-8@46C620
- ロンド・リーフレット: /HA-8@46A6B0
- 少女魔法学 リトルウィッチロマネスク: /HA-C@426430
- 少女魔法学 リトルウィッチロマネスク Editio Perfecta: /HBN4*0@4B2D7C
- シュガーコートフリークス: /HBN-8*4@4ACEE1 /Ftext@1
```
### [Little Witch Velvet]
```
- 聖剣のフェアリース: /HB48@4AC1B0
```

### [Love Cherry]
```
- 姉はグラビアアイドル: /HSNC@413AE0
- 堕淫巫女: /HB-18*0@40FDF0
- ママと妹と僕と先生: /HB4@410350
- 孕姫～令嬢妊娠調教計画～: Use patch found here（即打了官方补丁后才能正常使用AGTH）(Note: "found here" refers to original wiki context. Means after applying the official patch, AGTH can be used normally.)
```

---
## More H-Codes (List 17)

### [Love Juice]
```
- エンドリープ～降り積もる恋人の記憶～: /HB-4*0@432AAD
- 辱島-じょくじま-: /HB-4*0@4326AD
- トナリの世界－踏み外した淫靡な日常－: /HB-4*0@432A1D
- 姉キス＠Home～恋するお姉ちゃんとえっちな日常～：/HBN-1C*0@4170b7
```
### [Love Juice/Lilim]
```
- 辱アナ: /HB-4*0@42E1AC
```

### [Lucca]
```
- ママさんバレー((乳ゆれまんせー)) : (Ver 1.2.0.0) /HA-C@4250E0
```

### [Lump of sugar]
```
- Hello, Good-bye：/hac@425770
- いつか、届く、あの空に。: /HA-4@418C30 /KS or /HAC@41C050 | (after update patch) /HAC@41C220
- Nursery Rhyme－ナーサリィ☆ライム－: /HA8:-10@414810 or /HA-8@419484
- タユタマ -kiss on my deity-: /HAC@420680
- タユタマ -It's Happy Days-: /HAC:-14@405F50
- PrismRhythm-プリズムリズム-: /HAC@423790 or /HS4@425510 (ruby text)
```

### [Lune]
```
- 小公女シャルロット「ご主人様の処女人形」: /HA-C@4199C0
- エルフの双子姫 ウィランとアルスラ「私はどうなってもいいから、お姉様には手を出さないで……！」: /HA-C@419DDC
- 風輪奸山「この身幾たび汚されようとも……」: /HA-C@418DC0
- 姫辱－きじょく－プリンセスダブル狩り: /HA-C@410498
- 戦乙女ヴァルキリー「あなたに全てを捧げます」: /HA-C@412AAC or /HA-C@412A80
- 純潔★女神さまっ！「種付けしてください、ダンナさまっ！」：/HSN-C@41951B
- 戦乙女ヴァルキリー2「主よ、淫らな私をお許しください…」: /HA-C@41962C
- 戦乙女ヴァルキリーG～戦乙女達の黄昏～: /HA-C@419B40 /Ftext@41A0B6
- 淫夢学園「だめ…こんなになっちゃうのは夢の中だけなの…！」 : /HA-C@418EE8 or /HABC@440D36
- 女優・菜々子「出演条件は…おまえの肢体だ」: /HA-C@4152C0
- くのいち・咲夜: /HA-C@418B80
- -喪服妻-「許してアナタ…私、弱い未亡人（おんな）です」: /HA-C@41744C
- 音速飛翔ソニックメルセデス～双子ヒロイン調教指令！～ : /HA-C@4196C8
- 少女戦機 ソウルイーター「どんなに穢されても…私の復讐は終わらない！！」 : /HA-C@418FA7#1 or /HA-C@418DA0
```
### [Lune Team Bitters]
```
- 彼女が見舞いに来ない理由: /HA-C@419D08 /Ftext@41A27E
- 女教師・ゆうこ「ワタシ、もう…この教室から抜け出せないの…？」: /HA-C@4176D8
- 俺は彼女を信じてる！～遠距離恋愛のススメ～: /HA-C@418DC0
- 輪奸病棟 「やめて…先生、診ないで！」 : /HA-C@417350
- それでも妻を愛してる (with 110325 patch): /HS-4*0@67C000 /KF /Fdialogue@41A54E;speaker@41AEBC;choices@41B037
```

### [Lusterise]
```
- 触区～学園妖触譚～: /PNshock.000 /HA-C@418E34 /w4193AA (read above for info on the /PN parameter) (Note: "read above" refers to original wiki context)
```

### [M ni Aqua]
```
- 南の島に降る雪: /HB10*0@4234D0
```

---
## More H-Codes (List 18)

### [Makura] (枕)
```
- √ after and another: (aaa_v101) /HB4@40F5A8 or /HBC*0@413C4A or /HB-4*0@413C4A
- H2O～FOOTPRINTS IN THE SAND～: /HA8:-20@4151B0
- しゅぷれ～むキャンディ～王道には王道たる理由があるんです！: /HAC@421000
```

### [Marine]
```
- びんかんアスリート「そ、そこダメっ！……おしお噴いちゃうっ！」 : /HB-C*0@419BAC
- 人妻搾乳飯店: /HA-C@418CF4
- おしゃぶりアナウンサー「そんなに飲まされたら……Hしたくなっちゃう」: /HB-C*0@41A28C
- しおふきマーメイド「だめ……コーチッ！何かが出ちゃうぅ！」: /HA-C#1@419045 or /HA-C#1@418FBB
- とらぶるサッキュバス「ダーリン、今夜もい～っぱいえっちしちゃお」: /HB-C*0@41939C
- つるつるナース「恥ずかしい……こんなの誰にも見せられない……」 : /HB-C*0@419DF8
```

### [MarryBell]
```
- 姦獄水泳部～競泳水着に食い込む淫靡な肢体～: /HSC@4044C0 /KF
```

### [Masurao]
```
- 鈴夏のメロディー: /HAN-C@F81BC /Ftext@1
```

### [May-be Soft]
```
- Grope～闇の中の小鳥達～: (Ver. 1.2) /HA-C@4AE444
```
### [May-Be SOFT]
```
- 学園☆新選組！～乙女ゴコロと局中法度～：/HB-4@40a14a
```

### [MBS TRUTH]
```
- “中出し”以外は校則違反！！ ～女子校祭・乗っ取り計画～: /HAN4:C@408B12
- DOOP ADVANCE: /HA-C@4AE460
- 未亡人～ぬめり合う肉欲と淫らに濡れる蜜壺～: /HA-C@4B01BC
```

### [Mekujura] (めくじら)
```
- 彼女の浮気現場: /HA-C@F8D98
```

### [Meteor]
```
- 神樹の館: /HBN*@41567D (to filter out furigana)
```

### [Micro]
```
- CooL!! ～強娘純恋歌～ : /HAC@47E66E
- ソルティアンジュ魔法倶楽部:(sortie_patch101) /HB18*0@4A6780
```

### [Milk Crown]
```
- 姉ニモマケズ～お姉ちゃんズは刺激的！: /HSN-1C@414527
- らぶKiss！アンカー～あなたのキスでつかまえて～: /HBN24*0@4174C4 or /HSNC@413AC0
```

### [Milk Soft]
```
- 恥辱の渦～狙われた二人の新妻～: /HAN-C@F3D54 /Ftext@1
- かわれる姉妹: /HA-C@E81BC:かわれる姉妹.exe
- マインドコントロール・ラバー: /HAN-C@F81BC /Ftext@1
- 絶望の孤島DL Version: /HAN-C@F3F28 /Ftext@1
```

### [Milk Pai]
```
- でれスク: /HAN4@41A2F8 /Ftext@1
```

### [Mini]
```
- Kissy Kissy ～わたしのたまご～: /HAC@47B53E or /HB18*0@47B448
- 夏菓子～なつかし～: /HB-4@4C971F (must use exe found here) (Note: "found here" refers to original wiki context)
- 姉妹教師丼: /HA-8@48FA42
```
### [mini-mam]
```
- 女将・静香～熟れた果実が堕ちる刻～: /HB-C*0@4C9958
```

---
## More H-Codes (List 19)

### [Mink] (ミンク)
```
- 美学 YURIKA&ASUNA : /HSN4:64@40BED8 /FText@1
- Lingeries: (lingeries_update_ver2.exe) /HB-4*0@40FDB2 /C250
- メイドインお仕事: /HB10*0@422F50
- しすたー・すきーむ (ver. 002): /HB10*0:2@422B50
- しすたー・すきーむ2: /HB-C*0@40706F
- Swindle: /HB10*0:2@4234E0
```
### [M de PINK]
```
- りぼる・さもなー Revolving Summoner：/HBN-10*0:-20@40708F
- しすたー・すきーむHD：/HB-C*0@4072F3
```

### [Minori/Aeris]
```
- ANGEL TYPE: /HA-1C@434BB0
```
### [Minori]
```
- はるのあしおと: /HA-1C@4395
```

### [mirage]
```
- アノニマス/Anonymous: (rUGP Ver 5.70.25) /HA4@1002B080 | (rUGP Ver 5.72.25) /HA4@1002B080
```

### [Mixwill Soft]
```
- おねパパ～Onegai PaPa!～: /HS-1C@403171
```

### [Moco Pro]
```
- 訪問犯売～大人のおもちゃいりませんか？～: /HBN-8*0:838@45A715 /w1:4263FE
```

### [Moe-Hina]
```
- ご奉仕します！コスロイド: /HSC@4044C0 /KF
- 魔女っ娘とりこロール: /HSC@4044C0 /KF
```

### [Moedan Project]
```
- もえだん: /HS4@420F30 /KF
```

### [Momo-Hina]
```
- たっぷん☆ビーチ: /HBC*0@4044C0 /KF
- たっぷん☆お姉チャー: /HBC*0@4044B0 /KF
```

### [Moonstone]
```
- Gift～ギフト～: /HA18:-1C@4053E0 (Note: This is a duplicate of an earlier entry in Set 61, you might want to decide if you want to keep duplicates or consolidate)
- Gift～にじいろストーリーズ～: /HA18:24@407870 or /HA18:28@407870 or /HA14@44B8AE
- あした出逢った少女: /HAN1C:14@49234C /KS6 (Note: This is a duplicate from Set 29)
```

### [Morning]
```
- 堕トセ…　嫌がるあの娘を媚薬で堕トセ！: /HBN-C*0@40FB17
- 監禁陵辱調教 葉月＆美緒: /HB14*0:-4*A0@409B:KanKin.exe
```

### [Morning Light]
```- 敏感 えっち～二人のおやつは特濃ミルク～: /HB18*0@40FE98
```

### [Morning Star]
```
- 処女姦～初体験を陵辱された乙女たち～: /HW4@0:msvcp80.dll:#2631
- 淑女の告白 ～豊乳熟妻、白昼の蜜会: /HW4@0:msvcp80.dll:#2631 (Note: This is a duplicate from Set 51)
```

### [MSIZE]
```
- 超私立！女の子様学園: /C0 /HAN-C@F3AC0 /W1:0 /NH
- 変態性癖ドミナンス: /HAN-C@FBF1C /Ftext@1 domina.exe
- イキすぎ! Mレッスン: /HAN-C@F81BC /Ftext@1 ikiM.exe
```

### [Mu]
```
- 蒼色輪廻: /HBC*0@41EF63
- 喪失郷: /HBN-1C*0@42422E
```
---
## More H-Codes (List 20)

### [Muscadet]
```
- 令嬢の秘蜜：/HBC*0@4044F0 /KF
- 満淫車両～制服生出しイキ放題～: /HBC*0@4044F0 /kf
- 熟恋願望 秘めた想いと淫らな愛のカタチ: /HBC*0@4044F0 /KF or /HB4:-14@404290
  /KF (use /pn)
- NACHTMUSIK ～穢れし姫に淫獄の旋律を捧ぐ～: /HB4:-14@404290 /KF (use /pn)
- NACHTMUSIK ZERO ～女衒に心身を捧ぐ二律背反のメイド～: /HS-8@43CEF2 /KF (use
  /pn)
- スウィーテスト ママン！: /HBC*0@4044F0 /kf or /HB4:-14@404290 /KF (use
  /pn)
- 楽園のルキア：/HBC*0@4044F0 /KF
```

### [Navel]
```
- 世界征服彼女:/HAC@425800 (Note: Duplicate from Set 21)
- Shuffle! (.exe version 1.1.0.0): /HA4:8@406FC0
- Shuffle Anniversary Edition: /HA4@406FC0 /KS
- Soul Link: /HA-8@40B8B0 or /HA-8@407370 /KS2 or /HA4@407370
  /KS2
- Tick Tack! (Ver 1.01): /HAC@45AB48
```

### [Neko Neko Soft]
```
- Scarlett: (scarlett_fix0523) /HB10*0@411ADB |
  (scarlett_fix0720v) /HB10*0@411AEB
- そらいろ: /HS-1C@418F42 (Note: Duplicate from Set 46)
```

### [NEL]
```
- なりきりバカップル！「本当は、アンタとなんてイチャイチャしたくないんだからねっ！」: /HBN-8*0@44B684
- 薺ヶ好（なずながすき） なずなと若葉の物語: /HA-C@417658
- 宵待姫～大正淫猥吸血姫譚～: /HA-C@414554
```

### [Nitro+]
```
- CHAOS;HEAD: /HAN4@403680 or /HAN-C@45A576 (use /pn) (Note: First code is a duplicate from Set 60)
- 装甲悪鬼村正: /HA-8@46E340 (Note: Duplicate from Set 44)
- スマガ: /HAN4@4036D0 or /HAN-C@47E15A (use /pn) (Note: Duplicate from Set 59)
- スマガスペシャル: /HA-4@441AA0 or /HA-4@487190 (Note: Duplicate from Set 48)
- 続・殺戮のジャンゴ - 地獄の賞金首: /HA-C@451DD4 or /HA-4@403230 (Note: Duplicate from Set 40)
- 装甲悪鬼村正 邪念編: /HA-8@470160 (Note: Duplicate from Set 27)
- アザナエル：v1.10 /HA-8@48DE10 (Note: This is 'Axanael' from Set 22, different title spelling)
- 凍京NECRO /HS4@B5380:tokyonecro.exe (works on ver 1.00 and 1.01)
```

### [Nigred]
```
- Calling: Use .exe found here and /HBN-4*0@42770F /KF (Note: "found here" refers to original wiki context)
```

### [Nomad]
```- 外道勇者: /HA-C@418C9C
- ニセ教師～性活指導ADV～: /HAN-20@4119B9
```

### [Ohgetsu]
```
- Palmyra（パルミュラ）～熱砂の海と美なる戦姫～: /HBN-8*0@410E5E | (Ver. 1.1)
  /HBN-8*0@4108BB | (Ver. 1.2) /HA-4@410830 or /HA4@410830 (use /pn)
- Silvery White ～君と出逢った理由～: /HSN-8@41495F
```

### [OLE-M]
```
- おっぱいの王者48～何も考えず目の前のおっぱい全部しゃぶれ！: /HAN4:-4@40924F (Note: Duplicate from Set 55)
```

### [Overdress]
```
- 汗濡れ少女美咲「アナタのニオイでイッちゃう！」: /HB-4*0@43297D
```

---
## More H-Codes (List 21)

### [OVERDRIVE]
```
- DEARDROPS: /HAC@423790 (Note: Duplicate from Set 32)
- エーデルワイス: (use edelweiss_update105) /HB4*0@412C80 or
  /HA1C@412C80
- エーデルワイス 詠伝ファンタジア: /HAN-18:20@405750 /Ftext@1:0 (Note: Duplicate from Set 60)
- キラ☆キラ: /HA-4@41B010 /KS
- キラ☆キラ カーテンコール: /HAN-18:20@405850 (Note: Duplicate from Set 59)
```

### [Overflow]
```
- Cross Days: /HWN-4@41F068 /pnCrossDays.exe (v1.00a) (Note: Duplicate from Set 34)
  /HWN-4@41EED8 /pnCrossDays.exe (v1.00) (Note: Duplicate from Set 21 & 36)
- SummerDays Ver2: /HA4@2B1A0:rvmm.dll //ver 2.01 (additional
  tips here) (Note: "here" refers to original wiki context)
- School Days: Instructions here (additional tips here) (Note: "here" refers to original wiki context)
- School Days HQ: /KF32:16 /HQN30@43B66B (Note: Duplicate from Set 25)
```

### [Oz Project]
```
- 無差別恋愛～ボクって玩具？～: /HAN-C:-14@445578 (use /pn) (Note: Duplicate from Set 48)
```

### [P-Factory]
```- 甘い刻 -Sweet Time-: /HS4@424BD0 or /HAC@0041F178#1(AGTH
  2008.05.04) (Note: First code is a duplicate from Set 37)
- あの街の恋の唄: /HA-8@419694
```

### [Pajamas EX]
```
- もみちゅぱティーチャー！～巨乳姉妹と三角関係～: /HBC@452390 (Note: Duplicate from Set 53)
- みちるとラブエロ温泉旅行: /HBC@4523E0 (Note: This is a note/sub-entry from Set 53)
```

### [Pajama Soft] (ぱじゃまソフト)
```
- あねいも～アイとHのステップアップ～: /HBC@439900
- ピアノの森の満開の下: /HB-4@44A750
- プリンセスうぃっちぃず: /HBC@459EE0
- プリズム☆ま～じカル PRISM Generations: /HS-20@46486C (Note: Duplicate from Set 27)
- プリズム☆ま～じカル！ AFTER STORYS 迷える子羊といけにえの山: /HSN-1C@46493E (Note: Duplicate from Set 21)
- PRISM ARK ~PRISM HEART II~: (ver. 1.00) /HBC@479600 |
  (ver. 1.01) /HBC@479ca0 | (ver. 1.02b) /HBC@479ce0 | (ver. 1.02c)
  /HBC@479D10
- Prism Ark Love Love Maximum!: /HBC@44CCF0
- PURE MAID～着せかえしてね～: /HBC@43B060
- テレサとハート: /HBC@444940
```

### [Palette]
```- えむぴぃ~Maid Promotion Master~: /HA-4@03976E1E /KF or
  /HA-4@6E1E:Graphics.dll: /KF (use /pn)
- もしも明日が晴れならば: /HSNC@E164A:Graphics.dll /KF1:200 |
  /hsn-4@0134ADE6 | /HSNC@038E164A /KF1:200 (use /pn) (Note: Duplicate from Set 21, but more options)
- さくらシュトラッセ: /HA-4@40AB50
- さくらんぼシュトラッセ: /HA-4@40A970
```

### [Peas Soft]
```
- つくしてあげるのに！: /HB8*0@40DE40 | (Ver. 1.01) /HB8*0@40DE60
```

### [Petit Ferret]
```
- ぽぽたん DVD Version: /HAN4:48@4180A0
```

### [Petit Pajama]
```
- Puppet Princess～傀儡姫。わたしは、操り人形～: /HBC@43CFF0
```

---
## More H-Codes (List 22)

### [PIL]
```
- 仏蘭西少女～Une fille blanche～: /HAN8:54@42BB30 or use (this patch) (Note: Codes are duplicate from Set 48, "this patch" refers to original wiki context)
```

### [Plas+tic]
```
- きすみみ! ~Kiss! Me! Me!~: /HB10*0@411D5B
```

### [Ponyori Densetsu]
```
- 姫騎士壊妊～子宮征服計画～: /HWN-4*0@5DD906 /Ftext@1 (Note: Duplicate from Set 38)
```

### [Powerful soft] (ぱわふるソフト)
```
- よう∽ガク～妖学園の未来は会長次第～: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A (Note: Duplicate from Set 33)
```

### [Plum Zero]
```
- 淫落の鎖～チャットレディ姦落～: /HBC*0@417FE0
```

### [Princess Sugar]
```
- 姫様限定！～Princess Limited～：/HB-C*0@44F094 (Note: Duplicate from Set 19 & 20)
```

### [PULLTOP]
```
- 遥かに仰ぎ、麗しの: /HBEC*0@40E97C or /HA4@44F293 | (exe from 2012-08-23) /HS-4@E7E4:haruuru.exe
- 夏少女: /HA-C@423B2C
- Princess Waltz: /HBE4*0@40EE13 or /HA4@471C13
- てとてトライオン！: /HSN20@4131E0 (Note: Duplicate from Set 61)
- とらかぷっ！: /HAN-8@417110
```

### [Puzzlebox]
```
- に～づまはセーラー服 ～ダーリンは担任教師～: /HA-C@417C20
- 叔母の寝室：/HBN-C*0:1C@42D640 (Note: Duplicate from Set 20)
```

### [PrimRose]
```
- 超時空爆恋物語 ～door☆pi☆chu～: /HS4@424BD0 (Note: Duplicate from Set 34)
```

### [Purplesoftware delight]
```
- Orange Memories：/HSN-4@41F4FE (Note: Duplicate from Set 27)
```

### [Q-X]
```
- 幻月のパンドオラ: /HW-4*0@5D313E (Note: Duplicate from Set 42)
```

### [Raccoon]
```
- こいじばし: /HA14@404EEC
```

### [raiL-soft]
```
- 霞外籠逗留記: /HA4@45FD60
```

### [Rabbit]
```
- フローライトメモリーズ ：/HA8:-14@422DF0 (Note: Duplicate from Set 13)
```

### [Rasen]
```
- 突撃天使かのん: /HA-C@412F60 /Ftext@4139B1
- Cafe-Aqua: /HA-C@4143C4
- 姫巫女: /HABC@43D027
- 傷モノの少女－傷モノの学園・外伝－: /HA-C@40E7AC
- 傷モノの学園3－heaven’s door－: /HA-C@418798 or /HB-C@43F968 (Note: Second code is duplicate from Set 52)
- 魔法天使ミサキ: /HA-C@41173C (use /pn)
- 魔法天使ミサキ2: /HAN-C@418CA0 /Ftext@1
- 輪[妹]姦～傷モノの妹～: /HA4@4174C8
```

---
## More H-Codes (List 23)

### [Raspberry]
```
- ご奉仕喫茶～天使達におまかせ～ あいり編: /HS-4*0@45BC40 /KF
- ご奉仕喫茶～天使達におまかせ～ かおり編: /HS-4*0@45BC40 /KF
```

### [Red Label] (レッドレーベル)
```
- チアもえ～わたし応艶してるからっ～: /HBC*0@4044C0 /KF
- 淫DAYS: /HSC@4044C0 /KF
- 学園天獄～巨乳でイキまくり～: /HBC*0@4044E0 /KF
- まほ☆がく～まほろば国際防衛大学付属学園～: /HBC*0@4042B0 /KF
```

### [Rio]
```
- 絶対領域っ！: /HA14@49E690 (names and dialogue separated) or
  /HAN14@49E690 (name and dialogue together, but name displayed twice) (Note: Duplicate from Set 49 & 51)
```

### [Rococo Works]
```
- airy[F]airy ~Easter of Sant' Ariccia~: /HSN-1C:4C@4150AA
  /KF1:200 or use this .exe (Note: First code is duplicate from Set 40, ".exe" refers to original wiki)
- Volume7: /HSN-1C:-4@414947 /KF1:200 /KS
  /FDiag@1:210;Choice@1:240 or use this .exe (Note: First code is duplicate from Set 43, ".exe" refers to original wiki)
```

### [Roll]
```
- おしかけおさなづま3: /HA-8@48C220
- School Festa－スクールフェスタ－: /HA-8@48FBB4
- シスターシスター: /HA14@47FEF0 /KS8
```

### [ROOT]
```
- PARA-SOL: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A (Note: Duplicate from Set 30)
```

### [Rose Tiara] (ローズティアラ)
```- 姉妻～姉弟相姦遊戯～: /HA-C@4192E0 (Note: Duplicate from Set 43)
- 監禁アイドルリサイタル～アイドル陵辱日記～: /HA4@418F54
- 校内えっち コスプレ会長 輪姦クラブ: /HAN4@419004 /Ftext@1 (use /pn) (Note: Duplicate from Set 57)
- 校内えっち 妹孕ませ特別授業: /HA4@418F54 or /HB-C*0@43CFC0
- 乱母～未亡人母の熟れた肉体～: /HA4@418F54 or /HBN-C*0@419478
- 教え子の誘惑～家庭教師淫猥レッスン～: /HBN-C*0@419478
- おしかけ御奉仕！～僕のHなメイドさん～: /HA4@418F54
- 乱母～未亡人母の熟れた肉体～: /HA#1@419154 (Duplicate entry, different code)
- Tsumugurui: /HA4@418F54
- お姉ちゃんメイドのご奉仕タイム～秘密なんだからね～：/HA-C@41a10c
  /pnOneechanMaid~.exe (Note: Duplicate from Set 26)
- らぶいも ～お兄ちゃんエッチしよ～：/HA-C@41a10c /pnRT_LOVEIMO.EXE" (Note: Duplicate from Set 26)
```

### [ruf]
```
- 螺旋回廊复刻版: (rUGP Ver 5.8020EC) /HA4@1002BF80 or /HA4@2BF80:rvmm.dll
- セイレムの魔女たち: /HA-C@426408 (Note: Duplicate from Set 36)
- 奴隷市場　Renaissance (DVD): /HA-C@423988
```

### [redlabel]
```
- JK交姦～そこのアナタ、娘の処女を貰ってください～：/HBC*0@4044f0 /kf /pn (Note: Duplicate from Set 17)
```

---
## More H-Codes (List 24)

### [RUNE]
```
- 娘姉妹: /X2 /P <pid> or /HAN-20:-14@47373A
- 8665^2　ハルルコのジジョウ: /HA-4@4752A0
- 神様のいうとおりッ　くじびきAI-BIKIスクランブル: /HA-4@4DA7C1
- 今夜のオカズはレンジdeまりね: (marine_101) /HA8*0@46AD80 or /HAN-20@46D815
- 今宵も召しませAlicetale (Ver. 1.03): /HA-4@498F38
- 今宵も召しませAlicetale　おかわり (Ver. 1.00): /HA-4@498958 (use /pn)
- ナイトウィザード～魔法大戦～The Peace Plan of Save the World: (wiz_v105) /HA-4@50A2B9
- Purely～その狭い青空を見上げて～: (purely_101) /HAN-4@46E441 or /HA-4@46C640
- Ricotte～アルペンブルの歌姫～: (ricotte_v103) /HA-4@4941BB
- 思春期: /HA-4@4E9191 /FDialogue@46028A | (shishunki_102) /HAN24@4603B3 (use /pn)
- 雪のち、ふるるっ！～ところにより、恋もよう～: (fururu_v101) /HA8*0@47A570 or /HAN2C@47CED6
```

### [RUNRUNSOFT]
```
- まんきつ！～コミックカフェへようこそ！～ : /HA-C@412AAC
- 映研企画: /HA-8@4157C5
```

### [S Soft]
```
- キミのちんちん、写メらせて: /HA-C@F8088 or /HA-C@E8088:キミのちんちん、写メらせてb 34;.exe
```

### [SAGA PLANETS]
```
- ナツユメナギサ: /HAN-C:-14@4458F8 (use /pn) (Note: Duplicate from Set 47)
- 聖炎天使エレアノール: /HA14@40FF40
- キサラギGOLD★STAR：/KF /HW8@439690 /pnSiglusEngine.exe (Note: Duplicate from Set 24)
```

### [Sakuradog]
```
- 綾瀬家のオンナ～淫華の血脈～: /HAN-1C:E4@41F519
```

### [Sega]
```
- 樱花大战2 XP Version: (sakura2xp_ver101.exe) /HANC@5BF20:TITLE2_D.BIN: /C400
```

### [Serene]
```
- 凌辱家庭狂師: /HS4*0@40d128 /KF1:100
- ユリ色の少女: /HS-4*0@45BC08 /KF
```

### [SEVEN WONDER]
```
- 太陽のプロミア：/HBN18@6b12e:promia.exe (Note: Duplicate from Set 15 & "太陽のプロミア Flowering Days?" from Set 9)
```

### [Shakunage]
```
- みみをすませば: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A (Note: Duplicate from Set 38)
- ぴゅあらっ！: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A
- オト☆プリ～恋せよ！乙女王子様♪ドキドキウェディングベル～: /HSC@4044F0 /KF (use /pn) (Note: Duplicate from Set 56)
- プラゥヴ クルイード: /HBN-14*0:3C@40456D /KF | (prawf_Patch_ver101) /HSC@4044D0 /KF (use /pn)
```

### [Shall Luck Plus]
```
- インタールード: /HA14@40AA60
```

### [Shallot]
```
- Happy Wardrobe: /HW8*0:D4@0:GDI32.dll:GetTextExtentPoint32W /KS /pnhwr.exe (Note: Duplicate from Set 35)
```

### [Shiratama]
```
- はぴほす! ～お世話されます入院生活～: /HAN-1C@40F563 or /HSN1C@40F270
- 虹色あるけミカン～Magic of alchemy～: /HA4@44F9B6
- 妻ようじ～ボクは人妻管理人～: /HB1C*0@40F1F0 or /HB-8*0@40F2C8 | (with tyouji_update.exe) /HA4@454E28 (Note: Duplicate from Set 50)
```

### [ShiruZaru]
```
- 美人妻の痴態～兄の妻は俺の嫁～: /HA-C@41A10C (Note: Duplicate from Set 42)
```

### [SIESTA]
```
- あるぺじお～きみいろのメロディ～: /HB10*0@411D5B or /HB-18*0@40FCE0
- MOON CHILDe: /HB10*0@41104B
- ぱすてる: /HSNC@413AE0
```

---
## More H-Codes (List 25)

### [Silky's] (シルキーズ)
```
- 愛姉妹～どっちにするの!!～: /HA-C@40C21B
- 愛姉妹・蕾…汚してください: /HB-8*0@445765
- 奴隷介護: /HA-C@401591
- flutter of birdsII　天使たちの翼: /HA4@40A3A0 /KF
- 姫騎士アンジェリカ～あなたって、本当に最低の屑だわ！～: /HAN8:58@41926C (Note: Duplicate from Set 16)
- 女系家族: /HA-4@410C42 or /HA-C@410C36 or /HA-C@410C39
- 肉体転移: /HA4@409BF0 /KF
- 肢体を洗う: /HB-1C@429EC0
```

### [SKUNKWORKS]
```
- なりもの♪: /HB-18*0@40FDF0
```

### [SkyFish]
```
- よついろパッショナート！：/HA8:-4@2E7BB:gdi32.dll (Note: Duplicate from Set 22)
```

### [skysphere]
```
- 翼をください: /HWN8:20@0:GDI32.dll:GetCharABCWidthsW (Note: Duplicate from Set 37)
```

### [Softhouse Chara] (ソフトハウスキャラ)
```
- DAISOUNAN: /HA-8@18460:Ags.dll or
  /HB-1C*0@18460:Ags.dll or /HA-8@18390:Ags.dll or /HB-1C*0@18390:Ags.dll
  or /HB8*0@18390:Ags.dll (Note: Duplicate from Set 52)
- BUNNYBLACK: /hw10@199c0:PgsvTd.dll: / v1.1
  /HW+C@289860 /PNBunny.exe (Note: First code is a duplicate from Set 29)
- グリンスヴァールの森の中～成長する学園～: /HA-C@1001BC63 or
  /HA-C#1@1001BDF5
- 王賊: /HB-20*0@1001755F or /HA-8@16A20:ags.dll or
  /HA-1C*0@16A20:ags.dll
- 忍流: /HA4@11E70:ags.dll (Note: Duplicate from Set 42)
- ウィザーズクライマー: /HA-8@10017390 or -/HA-8@17390:ags.dll
- 雪鬼屋温泉記：/HW-8*@8A30:PgsvTd.dll (Note: Duplicate from Set 14)
```

### [softhouse-seal]
```
- 変態勇者の中出し英雄記: /HS-8*4@46F7F7 /KF (Note: Duplicate from Set 15)
```

### [Sol-fa-soft]
```
- スク水不要論: /HA4@4AD140
- プールのじかん スク水不要論2: /HA4@62AE10 (Note: Duplicate from Set 18)
```

### [SORAHANE]
```
- AQUA：/HW-4*14:-4*0@513804 /KS
```

### [SPEED]
```
- 銀行淫～堕ちゆく女達～: /HA-8@412C07
```

### [Sphere]
```
- ヨスガノソラ: /HWN4:-4@4B23ED (Note: Duplicate from Set 55)
```

### [sprite]
```
- 恋と選挙とチョコレート:/HSN-4@B14B4:dirapi.dll
  /pn恋と選挙とチョコレート.exe（但楼下有人反映打了补丁后使用不能，请勿使用升级补丁）(Note: Duplicate from Set 24. Chinese note: "but someone downstairs reported it cannot be used after patching, please do not use the upgrade patch")
```

### [SQUEEZ]
```
- 凌辱制服女学園～恥蜜に濡れた制服～: /HA-C@4AE97C
```

### [Studio Air]
```
- 紅月－くれないつき－: /HAC@404BA0
```

### [Studio e.go!]
```
- トキノ戦華: /X /kf1:200 /W5DDCD7 (Note: Different code from Set 40's entry)
- とらぶるDAYS: Add /x /w434963 parameters or /x /w43496A
  parameters.
- Xvain ~Devil Out~: /x /w485400
```

### [Studio Mebius]
```
- 悪夢 絶望～青い果実の散花～: /HAN14@4A1630 /Ftext@1 (Note: Slightly different from Set 50 entry)
```

### [Studio Ring]
```
- ななみとこのみのおしえてA・B・C HDワイドスクリーン版：/HW8:-4@433560 /KF
  /pnSiglusEngine.exe (Note: Duplicate from Set 23)
```

---
## More H-Codes (List 26)

### [Studio Ryokucha] (すたじお緑茶)
```
- 恋色空模様: /HA-4@6F7E20 /KS (Note: Duplicate from Set 36)
  /HAN10:6C@6F7A30 /KS /w1 (Note: Duplicate from Set 35)
  /HSN8@4D3AC0 (no furigana) (Note: Duplicate from Set 36)
- 片恋いの月: /HA-4@547D90
- 片恋いの月えくすとら: /HA-4@5C1C40 /KS (Note: Duplicate from Set 58)
- マジカライド: /HA-4@6F62B0
- 巫女さんファイター！涼子ちゃん: /HA4@41F8E0 (Note: Duplicate from Set 59)
```

### [Studio邪恋]
```
- ゴニン!? ～ピタリと的中！強制占い♪～: /HA-18*0@41F810 (Note: Duplicate from Set 32)
- 操心術０：/HAC@425880 (Note: Different code from Set 4)
```

### [Success]
```
- アオイシロfor Windows: /HA-4:-18@44FDF2 (Note: 'Aoishiro' from Set 57)
```

### [Sugar Pot]
```
- Wizard Girl Ambitious: /HA-4@414160 /KS (use /pn) (Note: Duplicate from Set 58)
```

### [Sumikko] (すみっこ)
```
- 絶対可憐！お嬢様っ: /HW-4*0@5D331E (Note: Duplicate from Set 48)
```

### [Tabibito no Heya]
```
- 辱・奴隷妻～息子の友達に犯されつづけた3日間: /HSN14:10@4121BE (Note: Duplicate from Set 53)
```

### [TAIL WIND]
```
- Maria～天使のキスと悪魔の花嫁～: /HB4@4112F1
- Trample on "Schatten!!" ～かげふみのうた～: /HB-1C*14@29170:schatten.exe (Note: Duplicate from Set 49)
- 剣乙女ノア（つるぎおとめのあ）: /HB4@4119EC
```

### [TakeOut]
```
- 僕と4人の女教師: /HB-4*0@42A564
- 誘惑っぽい！: /HBN-1C*0@414766 (Note: Duplicate from Set 22)
```

### [Tama Soft] (たまソフト)
```
- 永遠の終わりに: /HA-C@419F9C (Note: Duplicate from Set 55)
- LOST CHILD：/HAN-10@444F8F (v1.0.0)
  /HAN-10@41EFFF (v1.2.0)
```

### [Tamamo] (玉藻スタジオ)
```
- 人妻スワッピングゲーム: /HANC@43CB40 /KF (Note: Duplicate from Set 59)
- めざせマイホーム! ～新妻を守れ～: /HANC@455F80 /KF | (ver. 1.1) /HANC@456C10 /KF
```

### [Tarte]
```
- カタハネ: /HB10*0@411E2B
- ひなたぼっこ: (Ver1.00) /HA-8@404C9D | (Ver1.00) /HA14@404CAC | (Ver1.02) /HA14@404DFC
- ひなたると～ひなたぼっこファンディスク～: /HA8@413F40 or /HAN8@413F40 | (Ver. 1.02) /HA8@4150C0 or /HAN8@4150C0
- カタハネ: (Ver 1.10) /HB10*0@411E2B or /HB-18*0@40FD90 (Duplicate entry, different codes)
- もえママ! ～Cutie MaMa came Suddenly…～: /HBC*0@4044E0 /KF
- スクールぱにっく！: /HSN38@404E7B (Note: Duplicate from Set 60)
```

### [Teatime]
```
- エロ医: /HSN4:C*44@4ED953 /KF (Note: Duplicate from Set 40)
- らぶデス4～ν-Realtime Lovers～: /v /x /w701710D5 /kf5:255
```

### [Terios]
```
- はっぴぃプリンセス: /HSNC@413AC0
- はっぴぃプリンセス ~Another Fairytale~: /HSNC@414100
- まじかるカナン - RISEA -: /HA4@42EAC0
```

---
## More H-Codes (List 27)

### [Tinkerbell]
```
- 孕ノ胤: /HBC*0@463220 (Note: Duplicate from Set 37, without /PN)
- 人妻♪かすみさん～母娘と共同性活～: /HBN14*0:10@412369
- 淫妖蟲 悦～快楽変化退魔録: /HBNC*0@4697D0 (Note: Duplicate from Set 43)
- なつドキ！ハーレム～親せき宅での悩める受験勉強～: /HBC*0@4675C0 (use /pn) (Note: Duplicate from Set 47)
- 懲罰指導（おしおき）～学園令嬢更性計画～：/HBC*0@467DF0 /pnoshioki.exe (Note: Duplicate from Set 20)
```

### [TOMATO]
```
- 姫武者：/HSN-20@434ec4 (Note: Duplicate from Set 17)
```

### [TOP]
```
- 萌えろDownhill Night－峠最速伝説－: /HA-4@40B0A4 /kf
```

### [TranceSoft]
```
- Nightmare Knight～淫辱のレジスタンス～: /HSN1C@40E9E0
```

### [Troy]
```
- Reverse desire～裏返る欲望～: /HBNC*0@2120:sfe.dll (Note: Duplicate from Set 28, without /PN)
```

### [Triangle]
```
- エグゼクタースクリプト: /HSN4@435F40 /PNEXS.EXE (Note: Duplicate from Set 31)
- 魔動装兵クラインハーゼ: /HS+4@0041D950
- 妄想ぷろとこる！：/HSN4@422BC0 /PNdlp.exe
```

### [Twinkle]
```
- トロピカルKISS: /HBN-1C*0@40CF1A (Note: Duplicate from Set 45)```

### [U-Dash]
```
- 生徒会長は真性露出狂：/HAN-C@FC20C
```

### [Undermoon]
```
- 甘い生活－最高の義母と最高の義姉妹－: /HA-C@419DDC /Ftext@41A352 (Note: Duplicate from Set 46)
- 操り孕ませDreamNote: /HB-4*0@43216D
- D-spray 媚薬でモテモテ 課長代理補佐: (dsprayUpdate) /HB-4*0@42D05C
- D-spray2 媚薬でモテモテ 課長代理　湯けむり旅情編: /HB-4*0@430FCD
- 催淫孕ませキーワード「…あぁん、そんなコト言われたら、もう私…わたし…」: /HBN-C*0@432AE2
```

### [Unisonshift]
```
- Peace＠Pieces（ピース・ア・ピーシーズ）: /HB-4*0@402DE3 /KF
- Peace＠Piecesファンディスク　わんもあ＠ぴぃしぃず: /HB-4*0@402E63 /KF
- WAGA魔々かぷりちお: /HB-4*0@4030F0 /KF
```
### [Unisonshift Accent]
```
- おしえて Re：メイド: /HBC@43E6E0
```
### [Unisonshift Blossom]
```
- ALICE♥ぱれーど～ふたりのアリスと不思議の乙女たち～: /HB4*0@401D31
- ななついろ★ドロップス: (Before patch) /HBC@43FE50 | (After patch) /HBC@43FCC0
```

### [Unknown]
```
- Abandoner - The Severed Dreams: /HB4*0@408BC0 | (with XP fullscreen patch) /HB4*0@408BA0 (Note: Duplicate from Set 46, different codes)
```

### [Ume Soft]
```
- 野獸戰隊シバルカン：/R /HAN-8@47AD30 (Note: Duplicate from Set 15)```

### [Vitamin Soft]
```
- どうして？いじってプリンセス Final Road～もう！またこんなところで3～: /HBC*0@44DC70
- ねとって女神 NEO: /HSN4@459E10
```

### [w star]
```- 彼女×彼女×彼女～三姉妹とのドキドキ共同生活～: /HS-4@4044D0 /KF | (kano3_Patch_ver101) /HSC@4044D0 /KF
- 彼女×彼女×彼女　ドキドキ フルスロットル！: /HSC@4044F0 /KF (Note: Duplicate from Set 53)
```

---
## More H-Codes (List 28)

### [Waffle]
```
- 右手がとまらない僕と、幼なじみの姉妹: /HB8*4@C3F65:右手がとまらない僕と、幼なじみの姉妹.exe (Note: Duplicate from Set 37)
- インチキ霊媒師: /HBN-4*0@46BE08 | (Vista only) /HBN-4*0@E1BE08 (Note: Duplicate from Set 16, 33, 45)
- 巨乳ファンタジー: /HBN-4*0@46BFF1 or /HBN-8*0@6BFEC:巨乳ファンタジー.exe (use
  /pn) (Note: Duplicate from Set 44)
- 巨乳ファンタジー外伝：/HB-1C*4:1E8@56E0EE (Note: Duplicate from Set 19)
- 乱れて交わる俺と姫～姫と執事と歌姫とその他大勢と～: (XP) /HBN-4*0@46BE94 | (Vista)
  /HBN-4*0@C9BE94 (Note: Duplicate from Set 44, 45)
- 真希ちゃんとなう。：/HB50@5fa2e2
- 巨乳魔女：/HBN-4*0@57c4c8 (Note: Duplicate from Set 27)
```

### [WhiteSoft]
```
- りとるらびっつ－わがままツインテール:
  /HB8*0:2@0:GDI32.dll:GetTextExtentPoint32A (Note: Duplicate from Set 33)
```

### [Willow]
```
- お母さんがいっぱい!: (v1.00) /KS /HBN10*0@401796 | (v1.01) /KS
  /HBN10*0@401476 | (v1.03) /KS /HBN10*0@401476 (Note: Duplicate from Set 41, v1.07 from Set 16)
- お母さんは俺専用！～あなたの初めてを…母さんが貰ってア・ゲ・ル～: /HSN-4@43F3DA (Note: Duplicate from Set 38)
```

### [Windmill]
```
- はぴねす！: /HA4@45D860
```

### [Winters]
```
- KISS×300 こんな世界: /HS20@4813D0
- KISS×400 懐かしき日々の連続: /HS-C@4848FAB9 or /HS28@48FAB9 (Note: First code is different from Set 13's /HSN14:A8@00427F79)
- KISS×500　KISS権、発動: /HWN-4*0@476253
- アンバランス～彼女の心は奪えない？～: /HW-4*0@4761D2
```

### [WitchFlame]
```
- 瞳の烙淫～淫縛の牝奴隷～: /HB-4*0@432A2D
```

### [X-BANGBANG]
```
- さわさわ絵にっき～妹と××編～: /X3
```

### [Xuse]
```
- 聖なるかな・外伝 精霊天翔～壊れゆく世界の少女たち～: /HWN-4*14:4@4CD4CC (Note: Duplicate from Set 30 & 39)
- 詩乃先生の誘惑授業：/HAN-20:C@422796 (Note: Duplicate from Set 20)
- 聖なるかな外伝・精霊天翔 Crystal Friends: /HW-4*14:-4*0@521DD8 (Note: Duplicate from Set 24)
```

### [Yuzu Soft] (ゆずソフト)
```
- 天神乱漫 LUCKY or UNLUCKY!?: /HW-4*0@5D331E (Note: Duplicate from Set 50)
```

### [ZERO]
```
- オレの妹のエロさが有頂天でとどまる事を知らない: /HA-10:50@4ABD58
- 許嫁: /HA8:14@407AC0
```

### [ZyX]
```
- 雷の戦士ライディComplete Pack (use this AlphaROM patch first): (Note: "this AlphaROM patch" refers to original wiki context)
  雷の戦士ライディ～破邪の雷光～= /HB14*0@40B2A0 / 雷の戦士ライディII～邪淫の神殿～= /HB14*0@40C7E0
```

### [神無月製作所・妻魅組]
```
- 姦交バスツアー～色情に染められた花嫁～: /HA4@41A2F8 (Note: Duplicate from Set 27)
- 家族監禁 ～愛妻さやか、奈落の底の快楽人形～: /HA-C@41A190 (Note: Duplicate from Set 35)
```

### [Erectlip]
```
- エンコーJKとサポおぢさん ～ラヴパコ放課後ぶかつどう～
  /HS-C@27490:enko.exe
- 爆乳温泉 ～淫乱女将悦楽の湯篇～
  /HB-C@324E5:bakuon.exe
- 爆乳人妻メード～癒され乳母孕ませの館～
  /HS-14*8@27E92:hitozuma_maid.exe
```

### [Sweet HEART]
```
- アイドルクリニック ～恋の薬でHな処方～
  特殊码：/HQ18@18B7A:GDI32.dll (Note: Chinese text: "Special code:")
  文本设定勾选：忽略无限重复语句 (Note: Chinese text: "Text settings checkbox: Ignore infinitely repeated sentences")
  如果还是没有提取出来，游戏存个档，然后在读档，就出了 (Note: Chinese text: "If it's still not extracted, save the game, then load the save, and it should appear")
```

### [コンフィチュールソフト] (Confiture Soft)
```
- 甘夏アドゥレセンス
  ver 1.1
  /HWN14*0@53519C
  如果修正补丁走安装安装程序装不完，还要手动把data文件夹里的乱码启动程序文件改名后替换掉原启动程序才行 (Note: Chinese text: "If the correction patch cannot be fully installed through the installer, you also need to manually rename the garbled startup program file in the data folder and replace the original startup program.")
  打v1.1补丁，改名，覆盖原exe程序 (Note: Chinese text: "Apply v1.1 patch, rename, overwrite original exe program")
```

---
## More H-Codes (List 29)

### [アニゼッタ] (Anizetta)
```
- 12+ 1.2：/HAN-10@4095C1 (Note: Duplicate of Set 13 & 17, different version number)
```

### [さんぼん堂] (Sanbon-do)
```
- 幻想少女大戦紅: /HSN-20:-4@4055C5 (Note: Duplicate from Set 28)
```

### [たぬきそふと] (Tanuki Soft)
```
- 微少女: /HSN4@004983E0 /PNbishoujo.exe or /X2 /PNbishoujo.exe
```

### [クリーミートリップス] (Creamy Trips)
```
- アーツオブブラック: /HWN-8*0@10D8B:libscr.dll: /HWN-C*0@10D8B:libscr.dll: (Note: Duplicate from List 7, different formatting)
```

### [ゆ～かりそふと] (Yuukari Soft)
```
- Black-Teacher-Core～ブラック ティーチャー コア～: /HB8*0:D4@0:GDI32.dll:GetTextExtentPoint32A (Note: Duplicate of `[yuukari]` from Set 35)
```

### [プラリネ] (Praline)
```
- デュエリスト×エンゲージ：/HA-1C@415C49 (Note: Duplicate from Set 17)
```

### [高臥舎] (Kogasha)
```
- 癒し系ソープ嬢ヒロさん: /HA4@5593B0 (Note: Duplicate from List 13)
```

### [鬼畜野郎] (Kichiku Yarou)
```
- 必殺シゴキ人～院内巨乳天使斬り :/HBN-1c*0@415D99 (Note: Duplicate from Set 25)
- 必殺シゴキ人～神聖巨乳巫女斬り :/HBN-1c*0@415CF9 (Note: Duplicate from Set 25)
```

### [ミンク] (Mink)
```
- 破談屋 :/HB-20*0@420756 /W0012FEA8 /PNhadan.exe (Note: Different code from Set 25)
```

### [オーバードーズ] (Overdose)
```
- 母乳が染み出る愛娘 愛美：/HBN-1C*0@415e57 (Note: Duplicate from Set 23)
- 母乳が染み出る愛娘 愛美 1.1：/HBN-1C*0@415e47 (Note: Duplicate from Set 24)
```

### [ぱてぃしえ] (Patissier)
```
- まじかる☆ている～ちっちゃな魔法使い～：/hsn10@414E6A (Note: Duplicate from Set 14)
```

### [げーせん18] (Gesen18)
```
- 出撃!!乙女たちの戦場～闇を切り裂く、にび色の徹甲弾～：v1.02, cracked exe：/HBN-4*0@4FD1B5 (Note: Duplicate from Set 14)
```

### [脳内彼女] (Nounai Kanojo)
```
- 女装山脈 ：/HS-20:-4@425115 /KS4 (Note: Duplicate from Set 14)
```

### [SEVEN WONDER]
```
- 太陽のプロミア Flowering Days：/HBC@46AA70 (Note: Duplicate from Set 9)
```

### [Lillian]
```
- ティンクル☆くるせいだーす -SBX-：/HBC@48F3F0  it require ver 1.01 patch & set font in option 'MSゴシック' (Note: This is 'Passion Star Stream' from Set 9)
```

### [Softhouse Chara] (ソフトハウスキャラ)
```
- BUNNYBLACK 2 version 1.01：/hq40@b4ae:pgsvtd.dll (Note: Duplicate from Set 9)
```

### [Ail] (アイル)
```
- レイコ －囚われし女捜査員－：/HA4@417340 (Note: Duplicate from Set 9)
```

### [Lump of Sugar]
```
- 学☆王 -THE ROYAL SEVEN STARS-：/HA8:-14@4242B0 (Note: Duplicate from Set 10)
```

### [bootUP!]
```- ふたあねHs ～若葉とあやめのLOVEエロ物語～：/HBC@4A7580 (Note: Duplicate from Set 10)
```

### [TinkerBell]
```
- 喰ヒ人（くらいびと）：/HAN-10@46D62A /pnkurahito.exe (Note: Duplicate from Set 10)
```

### [etude]
```
- 七つのふしぎの終わるとき：/HB18*0@4D2EC4 (Note: Duplicate from Set 10)
```

### [平安亭] (Heiantei)
```- 平凡な奥さんは好きですか～真面目な主婦をエッチ漬けにしちゃおう!～：/HBC*0@469080 /KF /pnheibon.exe (Note: Duplicate from Set 11)
```

### [Leaf]
```
- White Album2 -closing chapter-：/HS0@4383F4 (Note: 'White Album 2' from Set 10)
```

### [Nitroplus]
```
- 君と彼女と彼女の恋: /ha-8@48d456
```

### [たぬきそふと] (Tanuki Soft)
```
- めばえ：/HSN4@4B95B0
```

### [レッドレーベル] (Red Label)
```
- JK痴漢電車 ～通学中の処女、さわりませんか？～：/HBC*0@4044f0 /kf (Note: Duplicate from Set 11)
```

### [TinkerBell]
```
- 凌成敗！～学園美少女制裁秘録：/HAN-10@46C24A /pnryousei.exe (Note: Duplicate from Set 11)
```

### [Arianrhod]
```
- 夢みる月のルナルティア：agth code：/HBN-C*0:@42D54D (Note: Duplicate from Set 11)
  ITH CODE：/HBN-C*0:-14@42D54D
  /HBN-C*0:4C@42D54D
```

### [Unknown Developer] (From entry: バルドスカイ ゼロ)
```
- バルドスカイ ゼロ[BALDR SKY ZERO][BALDRSKY ZERO]
  前提:本人亲测Win7x32位,只要将从游戏设置内将【文字表示】游戏显示速度调到文【速い】,VNR就能提取文本翻译 (Note: Chinese: "Prerequisite: I personally tested on Win7 32-bit. As long as you set the [Text Display] game display speed to [Fast] in the game settings, VNR can extract the text for translation.")
  ITH:/HQN4@7620DF0
  /HQN4@7620DF9  地址:http://bbs.2dkf.com/read.php?tid=411756  @ok123 找特殊码 23楼 (Note: Chinese: "Address: ... @ok123 find special code 23rd floor")
```

### [Unknown Developer] (From entry: nekopara series)
```
- nekopara_vol1【/HQ:20@9C64:textrender.dll】
- nekopara_vol2【/HQ:20@A704:textrender.dll】/HQ@A704:textrender.dll
- nekopara_vol0
  /HQ:20@A604:textrender.dll
  /HQ@A604:textrender.dll
- nekopara_vol1 /HQ:20@9C64:textrender.dll
  /HQ@9C64:textrender.dll
- nekopara_vol2 /HQ:20@A704:textrender.dll
  /HQ@A704:textrender.dll
- KARAKARA / カラカラ @calme 2016/06/27 /HQ:20@BD54:textrender.dll
  /HQ@BD54:textrender.dll
- Corona Blossom Vol.1 コロナ・ブロッサム コロナ・ブロッサム Vol.1 /HQ:20@BDA4:textrender.dll
  /HQ@BDA4:textrender.dll
- 千恋＊万花 @ゆずソフト /HQ:20@BDA4:textrender.dll
  /HQ@BDA4:textrender.dl (Likely typo for .dll)
```

### [Unknown Developer] (From entry: タユタマ2-you’re the only one-)
```- タユタマ2-you’re the only one-
  ☀[タユタマ2 -you're the only one-][游魂2 youre my only one]:/HS8:20@3A660:Tayutama2.exe
  /HS8:20@3A660:Tayutama2_trial_EX.exe
  /HS8:20@3A660:KanojoStep.exe
```

### [オーガスト] (August)
```
- 千の刃濤、桃花染の皇姫 体験版 /HS8:20@35640:BGI.exe
- 千の刃濤、桃花染の皇姫 プレミアムパック[Sen no Hatou, Tsukisome no Kouki][千の刃涛、桃花染の皇姫][皇姬][千之刃涛桃花染之皇姬]:
  /HS8:20@3A730:BGI.exe
- 千の刃濤、桃花染の皇姫 -花あかり-
  /HW8:4@33700:BGI.exe
```

### [more/pure more/天ノ葉/monako]
```
- [more]ヒマワリと恋の記憶 /HS8@28A59C:himakoi.exe
- [pure more]少女アクティビティ /HS8@2814F4:shoujo.exe
- [more]この恋、青春により。 /HS8@29C404:koiyori.exe
- [pure more]少女マイノリティ -慰めの愛- /HS8@29637C:shoujominority.exe
- [天ノ葉]1分の2恋ゴコロ /HS8@2933CC:1bunno2.exe
- [monako]ご主人様、メイド服を脱がさないで。 /HS8@29887C:goshimei.exe
  trial v1.02 /HS8@29608C:goshimei.exe
```

### [Innocent Grey]
```- FLOWERS 春篇[FLOWERS -Le volume sur printemps- ] /HS8@540DF:Script.dll
  http://sakuradite.com/upload/image/1268.png
```

### [Lump of Sugar]
```
-DISC1「タユタマ -kiss on my deity-」
  /HS8:20@398F0:Tayutama.exe
  DISC2 「タユタマ -It’s happy days-」
  /HS8:20@3A040:TayutamaHD.exe
```

### [Unknown Developer]
```
- 茉莉子さん家の性事情～伯母さんは僕のモノ～ 限定版[Mariko-sanchi no Seijijou ~Oba-san wa Boku no Mono~ ]
  /HS4@2ACE0:SystemC.EXE
- 少交女[Shoukoujo] /HSN-8:3C@125EFD:shoukoujohd.exe
- キミトユメミシ[Kimi to Yumemishi]
  http://sakuradite.com/topic/1492
  http://sakuradite.com/upload/image/1208.jpg
  http://sakuradite.com/upload/image/1209.jpg
```

### [Campus]
```- Triangle Love -アプリコットフィズ-[Triangle Love -Apricot Fizz-]
  H-code -4f180000 (Note: This is likely a base offset or incomplete code)
  虽然已经自动输入了特殊码，但是发现读取到一定文本后就不会读取到新的文本了，必须要重启游戏才能再读取。 解决这个问题的话可以用这个公司的老办法，修改字体设置。打开游戏目录的malie.ini。然后
  将
  ;FONT01=MS UI Gothic
  FONT01=MS UI Gothic
  ;FONT01=MS UI Gothic
  ;FONT01=MS UI Gothic
  修改成这样。
  这个老办法的遗憾就是和以前一样游戏里显示不到文字，不过VNR能正常读取文本
  (Chinese Note: "Although the special code has been automatically entered, it was found that after reading a certain amount of text, no new text will be read, and the game must be restarted to read again. To solve this problem, you can use the old method of this company, modify the font settings. Open malie.ini in the game directory. Then change the FONT01 settings as shown. The regret of this old method is that, as before, the text cannot be displayed in the game, but VNR can read the text normally.")
- ナツウソ-Ahead of the reminiscence-[ナツウソ -Ahead of the reminiscence-]
  /hwn-4@65905E
  /hwn-4:-C@65905E
  2选1。下面一个带有过滤，也就是注音日文和原文分开，当然字体大小颜色变一下的文字也会独立出来，如果不在乎注意，就选第一个。 (Chinese Note: "Choose 1 of 2. The one below has filtering, meaning furigana and original text are separated, and text with different font sizes/colors will also be independent. If you don't care about the furigana, choose the first one.")
  Delete System folder in game folder.【在游戏文件夹,删除“System”文件夹。】可VNR提取文本 (Chinese Note: "Delete the 'System' folder in the game folder. VNR can extract text.")
```

### [5pb.／ホビボックス]
```
- STEINS；GATE 0[STEINS GATE 0][Steins Gate 0][Steins Gate0][SteinsGate0]【命运石之门0】
  H-code by @SaintLouisX
  /HQN-4@304003D:Game.exe
  必须下载Hookpatch补丁后再使用特殊码。 (Chinese Note: "Must download Hookpatch patch before using the special code.")
  下载地址: (Download links followed)
  http://99ib.cc/file-988772.html
  http://filemarkets.com/fs/ew2ade5ccyf2a73/
  原 (Original source link followed)
  http://www.hongfire.com/forum/forum/hentai-lair/hentai-game-discussion/tools-and-tutorials/15208-agth-text-extraction-tool-for-games-translation?p=5719420#post5719420
```

### [SAGA PLANETS]
```
- フローラル・フローラブ
  VNR+ITH
  /HW-4@136B2C
```

### [ANIM team MM]
```
- 壁の向こうの妻の嬌声2[壁の向こうの妻の嬌声（こえ）2][No向Kouno 妻 Koe） 2]
  /HS4@26E80:kabetuma2.exe
```

### [Digital Cute]
```
- ちんくる★ツインクル フェスティバル！ -Tincle★Twinkle Festival！[Tincle ★ Twinkle Festival!]
  ちんくる★ツインクル フェスティバル！v1.21
  /HS-20:-4@21FE97:Taskforce2.exe
  Own made has some extra threads but working thread for name and text.
  必须更新到1.21版本才能使用 (Chinese Note: "Must update to version 1.21 to use.")
  1.21补丁下载: (Download link for 1.21 patch followed)
  http://www.digitalcute.com/main/support/softwareupdates/ttf_update/%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89.html
  @aoyu18原帖:[http://www.hongfire.com/forum/forum/hentai-lair/hentai-game-discussion/tools-and-tutorials/15208-agth-text-extraction-tool-for-games-translation/page516 http://www.hongfire.com/forum/forum/hentai-lair/hentai-game-discussion/tools-and-tutorials/15208-agth-text-extraction-tool-for-games-translation/page516]
```

### [Wonder Fool]
```
- 夏の魔女のパレード /HSN4@142580:WitchParade.exe
```

### [Unknown Developer]
```
- 天文時計のアリア 抱き枕カバー /HQ0@764A3D
- 空のつくりかた /HSN4@144620:SoraTsuku.exe
- 空のつくりかた -under the same sky, over the rainbow- TRIAL　VERSION　ver3.0
  Trial 3.0 have different pattern. umm...
  /HSN4@144620:空のつくりかた体験版_ver3.0.exe
```

### [アージュ] (Age)
```
- シュヴァルツェスマーケン 殉教者たち
  /HW-C@146AA0:シュヴァケン殉教者たち.exe
```

### [すたじお緑茶] (Studio Ryokucha)
```
- 夏彩恋唄
  体验版:/HW4@25BA70:natsukoi_main.exe (Chinese Note: "Trial version:")
  正式版:/HW4@16A2D0:natsukoi_main.exe (Chinese Note: "Full version:")
  /HW4@25BA70:natsukoi_trial.exe
  VNR(ITH engine) finding method+ change encoding
  /HW4@25BA70:natsukoi_trial.exe
  Dialog/ruby
  /HW4@16A2D0:natsukoi_trial.exe
```

### [Black Lilith]
```
- 僕のエルフお姉さん
  特殊码:/HSN4@142580:BokunoElf.EXE (Chinese Note: "Special code:")
```

### [CandySoft]
```
- 白衣の天使はお世話好き！ ～ラブラブエッチな入院生活～
  特殊码:/HSN@467CCE (Chinese Note: "Special code:")
- 正義の変身ヒロインを支える俺と悪の女幹部
  /HB-1C*0@54BEDA:akunoonnakanbu.exe
```

### [Us：track]
```
- 恋×シンアイ彼女
  改字体为ゴシック (Chinese Note: "Change font to Gothic")
```

### [Princess Sugar]
```
- 姫恋*シュクレーヌ!(姫戀＊シュクレーヌ)：
  /HB8*0@F780:姫恋＊シュクレーヌ！.exe
```

### [Unknown Developer] (From entry: お母さんがいっぱい!!)
```
- お母さんがいっぱい!!
  /HBN10*0@401526 (1.07) (Note: Duplicate from Set 16, List 28)
```

### [light]
```
- シルヴァリオ トリニティ 初回限定版
  /HWN-4:-C@25D5CE:malie.exe
```

### [evoLL]
```
- お嬢様はイイナリみたいです！？
  名称 (Chinese Note: "Name")
  /HS-4@32C0B:ags.exe
  对话 (Chinese Note: "Dialogue")
  /HS-4@32C51:ags.exe
```

### [onomatope]
```
- ビッチ姉妹が清純なはずがないっ！！[Bicchi姉 妹 純 Zuga -!]
  /HS8@1EDDE:gdi32.dll
  /HQ8@95A20:gdi32.dll
  /HS8@[YOUR ADDRESS]:GDI32.dll
  /HS8@1D349:GDI32.dll
  /HS8@FC80:GDI32.dll 打1.01的补丁 打1.01的补丁 (Chinese Note: "Apply 1.01 patch Apply 1.01 patch")
  原帖:[http://sakuradite.com/topic/1621 http://sakuradite.com/topic/1621]
  http://bbs.2dkf.com/read.php?tid=593782
  简单翻译一下就是因为系统的原因，gdi32.dll的函数值不一样，所以相关的特殊码都不能通用，需要自己找到对应的函数值，然后再换算出来。（不难，按照教程下一个x64dbg就可以了，十六位加减电脑计算器就可以） (Chinese Note: "Simply put, due to system reasons, the function value of gdi32.dll is different, so the relevant special codes cannot be universal. You need to find the corresponding function value yourself and then convert it. (Not difficult, just download x64dbg according to the tutorial, and a hex calculator can do the addition/subtraction)")
  我这里的特殊码是/HS8@2EC0B:gdi32.dll，可以运行 (Chinese Note: "My special code here is /HS8@2EC0B:gdi32.dll, it works")
  1.下一个x64dbg (Chinese Note: "1. Download x64dbg")
  2.打开其中的x32dbg，附加（attach）这个游戏 (Chinese Note: "2. Open x32dbg within it, attach this game")
  3.工具栏下方有一行分页，点击符号（symbol） (Chinese Note: "3. Below the toolbar, there is a tab row, click on symbol")
  4.在左边找到gdi32.dll，选中，同时记录下地址 (Chinese Note: "4. Find gdi32.dll on the left, select it, and record the address")
  5.在右边找到GetTextExtentPoint32A，记录下另一个地址。 (Chinese Note: "5. Find GetTextExtentPoint32A on the right, record another address.")
  6.用右边减去左边的，得到一个值x（十六位进制减法，可以百度找在线工具或者用电脑自带的计算器） (Chinese Note: "6. Subtract the left from the right to get a value x (hexadecimal subtraction, you can find online tools or use the computer's built-in calculator)")
  特殊吗就是/HS8@x:GDI32.dll (Chinese Note: "The special code is /HS8@x:GDI32.dll")
```

### [LiLiM DARKNESS]
```
- ☀ Dearest Blue [DearestBlue]
  /HB8*0@FB40:DearestBlue.exe
  把体验版目录下的DearestBlue_web体験版01.exe复制到正式版Dearest
  Blue目录下,然后用VNR打开DearestBlue_web体験版01.exe，用特殊码/HB8*0@E7E0:DearestBlue_web
  体験版01.exe就能解决。
  (Chinese Note: "Copy DearestBlue_web体験版01.exe from the trial version directory to the full Dearest Blue directory, then open DearestBlue_web体験版01.exe with VNR, and use the special code /HB8*0@E7E0:DearestBlue_web 体験版01.exe to solve it.")
  http://tieba.baidu.com/p/4585522571
```

### [Campus]
```- 不運と幸運と恋占いのタロット
  /HWN-4:-C@25D56E:malie.exe
```

### [Unknown Developer] (From entry: ☀[170608]お家にかえるまでがましまろです介)
```- ☀ お家にかえるまでがましまろです介 (Likely 'Ouchi ni Kaeru made ga Mashimaro Desu')
  お家に帰るまでがましまろです体験版 v0.90 (Trial version)
  /HWN-4@1C38E9:mashimaro.exe (UTF-16)
```

### [めくじら] (Mekujira)
```
- 彼女売春島：/HA-C@FC2E0#1
```

### [PULLTOP]
```
- 神聖にして侵すべからず：/HS20@415F00 (Note: Duplicate from Set 11)
```

### [公爵] (Koushaku)
```
- ジサツのための101の方法 (v1.01)：/HAN-8@403E32
```

### [すたじお緑茶] (Studio Ryokucha)
```
- 恋色空模様 after happiness and extra hearts ：/HA8@1141F0 (Note: Duplicate from Set 9)
```

### [G.J?]
```
- マドンナ ～完熟ボディCollection～：/HA8:4@2E7BB:gdi32.dll (Note: Duplicate from Set 9)
```

### [Ail] (アイル)
```
- 脅迫3～遙かに響く光と影の淫哀歌（うた）：/HA4@416DA0 (Note: Duplicate from Set 8)
```

### [Delta]
```
- 獣魔戦姫エクセリア ～異種交配実験のはてに～ + Update 1.2：/HBN0*0@414D0E (/pnMPE.exe) (Note: Duplicate from Set 11)
```

### [Twinkle]
```
- D-EVE in you：/HBN14*0@40CC68 (Note: Duplicate from Set 12)
```

### [Circus]
```
- 水夏弐律: /HS4@4204C5
```

### [Lime]
```
- ラブ☆キス: /HB18*0@4D285C (Note: Duplicate from Set 12)```

### [M de PINK]
```
- しすたー・すきーむHD：/HB-C*0@4072F3 (Note: Duplicate from Set 13 & List 19)
```

### [Silky's] (シルキーズ)
```
- 姫騎士オリヴィア～へ、変態、この変態男！少しは恥を知りなさい！～：/HBN+2C@49F4A2
```

### [bootUP!]
```- とらバ！：/HBC@457100
```

### [Nitroplus]
```
- 装甲悪鬼村正 邪念編: /HA-8@470160 (Note: Duplicate from Set 27 & List 10)
```

### [Honky-Tonk Pumpkin]
```
- キラリ☆南国小麦色～潮吹きパラダイスへようこそ！～：/HB8@41E4A0 (Note: Duplicate from Set 24, 27 & List 12)
```

### [Waffle]
```
- 巨乳魔女：/HBN-4*0@57c4c8 (Note: Duplicate from Set 27 & List 28)
```

### [Muscadet]
```
- 楽園のルキア：/HBC*0@4044F0 /KF (Note: Duplicate from Set 27 & List 20)
```

### [Bloom Handle]
```
- 恋と水着と太陽と～スミレ島ライフセーバーず～：/X3 /KS1 (Note: Duplicate from List 3)
```

### [catwalkNERO]
```
- 性器雇用 製薬会社の新人狂育「一日一錠、わたし身も心も捧げます!」：/HAN-C:-14@448278 /pnRealLive.exe (Note: Duplicate from Set 26 & List 5)
```

### [La'cryma]
```
- fortissimo//Akkord：Bsusvier:1.0.0.1：/c /kf1:200 /HSN-1C@41AAB6 (Note: Duplicate from Set 26 & List 14)
```

### [Rose Tiara] (ローズティアラ)
```
- お姉ちゃんメイドのご奉仕タイム～秘密なんだからね～：/HA-C@41a10c /pnOneechanMaid~.exe (Note: Duplicate from Set 26 & List 23)
- らぶいも ～お兄ちゃんエッチしよ～：/HA-C@41a10c /pnRT_LOVEIMO.EXE (Note: Duplicate from Set 26 & List 23)
```

### [Abelsoftware]
```
- 萌恋維新！～アタシら、じぇいけー、新閃組！: /KF /HB-4@4042B2 (Note: Duplicate from Set 25 & List 2)
```

### [EX12]
```
- 他人妻～誘淫～：/HW-4@41A3B0 (Note: Duplicate from Set 26 & List 9)
```

### [Bluegale LIGHT] (ブルゲLIGHT)
```
- JKと淫行教師4~なまいきモデル少女編~: /HA-C@493351 /pnjk3.exe (Note: Duplicate from Set 26 & List 3)
```

### [Candy Soft]
```
- あねよめコンチェルト : /HS4@2A9A0:Aneyomec.exe
```
---

## More H-Codes_2 (This appears as a distinct H2 in the HTML)

### [Grand Cru]
```
- JKおむchu
  /HS-C@3B942:JKOmuChu.exe
```

### [Heiantei] (平安亭)
```
- Tsuma no Haha ~Gouman Onna Shachou to Doukyo no Hibi / 妻の母～傲慢女社長と同居の日々～ /HQ4@415820:tumahaha.exe
```

### [Lump of Sugar]
```
- タユタマ2 -After Stories
  /HS-20@3B562:Tayutama2AS.exe
```

### [hibiki works]
```
- 新妻ＬＯＶＥＬＹ×ＣＡＴＩＯＮ / Niizuma Lovely x Cation
  ALL x CATION - no H-code needed
  /HW4@4B220:bride.exe - v1.06
  /HW4@4B250:bride.exe - v1.05
  /HW-4@6E78B:bride.exe - v1.04
  /HW4@48D70:bride.exe - v1.02
  /HW4@48D00:bride.exe - v1.01
```

### はにデビ! Honey&Devil (H5 Heading in HTML)
```
/HW-20@FA614:はにデビ.exe
/HW-20@FA170:はにデビ.exe
```

### 姫様LOVEライフ！-もーっと！イチャイチャ★ぱらだいす！ (H5 Heading in HTML)
```
/HB8*0@F900:姫様ＬＯＶＥライフ！イチャぱら.exe
```

### Unknown Developer (Formatted as paragraph and H5 in HTML)
```
- ちっちゃな花嫁 ～まだまだつぼみだもんっ～ /HS8@4F30:GDI32.dll /HS8@[YOUR ADDRESS]:GDI32.dll
  Note: Hook have not same adress on all os. You need to "file > attach" the
  game exe in x32dbg then select tab "symbols" select module "gdi32.dll"
  search in the right search box for "GetTextExtentPoint32A" and use last 4
  (7300"4F30") from the full adress. Use TA to delete phrase repeat.
```

### タンテイセブン (H5 Heading in HTML)
```
/HS-C:-1C@F42C0:pixel.windows.exe
/HS-4:-8@F6572:pixel.windows.exe
```
> Note: 崩溃问题请关闭共享辞书。 (Chinese text: "For crash issues, please close the shared dictionary.")

### [Unknown Developer]
```
- /HAN4@3CC90:蒼の彼方のフォーリズムEXTRA1.exe_配合ISO版本使用，DL版不行 (Chinese text: "Use with ISO version, DL version does not work")
```

### [Unknown Developer] (From H5 heading in HTML: 春音アリス＊グラム_使用新修正补丁)
```
- 春音アリス＊グラム (Note: 使用新修正补丁 - Use new correction patch)
```

### [Anime Lilith]
```
- 監獄アカデミア : /HSN4@147440:PRISON_ACADEMIA.exe
```

### [たまソフト] (Tama Soft)
```
- LOST CHILD
  /HAN-10@444F8F (v1.0.0)
  /HAN-10@41EFFF (v1.2.0) (Note: Duplicate from List 26)
```

### [公爵] (Koushaku)
```
- ジサツのための１０１の方法
  /HAN-8@403E32 (v1.01) (Note: Duplicate from 'More H-Codes' section above)
```

### [Unknown Developer]
```
- 冒険者の町を作ろう!
  /HAN-18@485849 /KF (Note: Slightly different code from Tamamo Studio entry in Set 6)
  Note: Can't say for sure what strings it will catch, I tested only in intro
  ADV part. Set text speed to instant - 3rd option from above, set it to
  rightmost of four available values.
```

### [Lala]
```
- 6月の天使
  /HB-4*0@419527 /kf
```

### [ティアラモード] (Tiara Mode)
```
- バトラーズ～召しませお嬢様～
  /HA8:-14@15570:BGI.exe
  Note: I tested it only on WinXP, please tell me if it doesn't work on
  Win7/Vista. Code is for cracked exe downloaded from that thread,
  probably won't work with any other version.
```

### [シルキーズ] (Silky's)
```
- 姫騎士オリヴィア～へ、変態、この変態男！少しは恥を知りなさい！～
  /HBN+2C@49F4A2 (Note: Duplicate from 'More H-Codes' section above)
```

### [bootUP!]
```
- とらバ！
  /HBC@457100 (Note: Duplicate from 'More H-Codes' section above)
```

### [あかべぇそふとつぅTRY] (Akabeisoft2 TRY)
```
- シキガミ
  /ks1 /HW-20*0@1950:sdl_ttf.dll
  Note: Not a perfect one Caveat - repeating first characters of each string.
  Originally they are repeated 4 times while all other characters only two
  times. It's possible to remove them with tahelper plugin (replace one
  first character with space). So far everything's readable... I hope
  someone with a lot of free time would debug further.
```

---
## H Code List: (Distinct H1 in HTML)

```
- 美少女万華鏡 -罪と罰の少女- : /HQ-4@696694 , for ver 1.01: /HQ-4@69645C
- みなとカーニバルＦＤ: /HAN0@56733:みなとカーニバルFD.exe
- 凍京NECRO: /HS4@B5380:tokyonecro.exe (Note: Duplicate from List 20)
- 月に寄りそう乙女の作法2.1 E×S×PAR!!: /HW-20@FA170:月に寄りそう乙女の作法21.exe
- シュヴァルツェスマーケン 紅血の紋章: /HA8@31240:rvmm.dll
- シュヴァルツェスマーケン 殉教者たち: /HW-C@146AA0:シュヴァケン殉教者たち.exe (Note: Duplicate from List 29)
- [Wonder Fool] 純情化憐フリークス！: /HS4@151200:Freaks.exe
- [自宅すたじお] リアルエロゲシチュエーション！Hｘ3: /HSN4@1511F0:Reaeroh3.exe (Note: Jitaku Studio from Set 1)
- 月に寄りそう乙女の作法2.2 A×L+SA!!: /HW24@4FECBC 月に寄りそう乙女の作法22.exe
- 素晴らしき日々～不連続存在～ フルボイスHD版 : /HS-20@3B452:BGI.exe (Note: KeroQ entry from Set 36, but "Full Voice HD Ban")
- 蒼の彼方のフォーリズム　/HS8:20@3B280:蒼の彼方のフォーリズムPerfect Edition.exe
```

> [!NOTE]
> h-codes from old agth wiki database

### [Interheart]
```
- 人妻スイミング倶楽部  /HS-4:8@1DA513:HSWIM.exe (Note: Duplicate from Set 1)
```
### [ChuableSoft]
```
- あなたをオトコにしてあげる！  /HSN-8@50637:あなたをオトコにしてあげる！.exe (Note: Duplicate from Set 1)
```
### [ミンク] (Mink)
```
- しすたー・すきーむ3 //HB-8*0:-40@4049FB
```
### [Abel Software]
```
- ミステリート～アザーサイド・オブ・チャーチ～ /HBN-4@4042B2 /KF
- エクソダスギルティー・オルタナティブ /HAN-4@405240
```

### [Ｇ．Ｊ？] (G.J?)
```
- 百機夜行 /HSN-8@46F7CF
  V1.02し (Note: Duplicate from Set 3, different version note)
```

### [Blue Gale]
```
- ＪＫとオーク兵団 /HS-C@10E997:jkorc.exe (Note: Duplicate from Set 1)
```
### [Leaf]
```
- WHITE ALBUM 2～introductory chapter + closing chapter～ SET版
  /HS0@438604(ver 1.01) (Note: Duplicate from Set 1)
```
### [A-Kaguya Honky-Tonk Pumpkin]
```
- エロティ課　誘惑研修はじまるよ～
  /HB8@1C630!4A0FEAB4 (Note: Duplicate from Set 1)
```
---
## Even more H-Codes (Distinct H2 in HTML)

### [Cacao]
```
- ボインにかけろ!
  /HSN-4@270FE:boin.exp
```

### [Sweet HEART]
```
- Harem Game 2 ~Futsuu ja Nai Shujinkou ga Harem o Kizuku Fantasy
  /HSN-8@24F00:harem2.exe
- 仲良し姉妹(かぞく)ならキスも中出しもとーぜんだよねっ！
  /HQ4@65B60:shimakiss.exe
- 透けちゃって！！ ～九死に一生を得て濃密セカンドライフ～
  (Previously: /HSN0@604A1:suketyatte.exe)
  /HSN-4@2D37C:suketyatte.exe
```

### [ケージ Cage] (Cage)
```
- Pure My 妹ミルクぷるん♪
  /HAN-4@750DD:purun.exe
```

### [HOOKSOFT]
```
- IxSHE Tell/HWN-4:-10@15411C:IxSHETell.exe
- もっとIxSHE Tell 彩楓・芳乃ミニアフターストーリー
  /HWN-4:-10@15137C:IxSHETell.exe - original exe
  /HWN-4:-10@150BEC:IxSHETell.exe - update 2019-07-05 (ixshetell_fd.zip)
- 放課後シンデレラ /HW8:4@A020:放課後シンデレラ.exe
- Yubisaki Connection /HW8:4@A030:ゆびさきコネクション.exe
  -or- rename the .exe to BGI.exe and use
  /HW8:4@A030:BGI.exe
```

### [Anesen]
```
- あまからツインズ～双姉といっしょ～
  /HAN0:-10@1E530:AMAKARA.exe
```

### [XUSE]
```- 最果てのイマ COMPLETE
  /HSN-10:-C@A30FF:Farthest2015.exe (Note: Related to entry in Set 30)
```

### [WAFFLE]
```
- 俺を欲しがる二人の母
  /HBN44@FCBD1:mother.exe
```

### [Jellyfish（ジェリーフィッシュ）]
```
- SISTERS～夏の最後の日～ Ultra Edition
  /HAN-4:50@1BB63:ism.dll
```

### [Waffle] (Duplicate developer entry in this section)
```
- 善悪
  /HBN20:-10@100761:zenaku.exe (for 1.0)
  /HBN20:-10@FF9FF:zenaku.exe (for updated/patched game)
```

### [hibiki works]
```
- なちゅらるばけーしょん
  /HWN-4@84CEB:vacation.exe
```

### [Digital Cute]
```
- キュートリゾート ～しようよ♥エッチなアクティビティ～
  /HS8@5D998:pix.exe
```

### [Interheart]
```
- イイナリ姉色 ～お姉ちゃんさえいればいい！～
  /HSN0@62AAD:aneiro.exe
```

### [Black Lilith]
```
- 対魔忍アサギZERO
  /HSN4@10C24B:ASAGI_ZERO.EXE
```

### [Unknown Developer]
```
- 堕とされた美姉妹 ～どうかその娘だけは助けて下さい～
  /HBN2C*0:2C@839FB:bishimai.exe
```

### [マーブルCandySoft] (Marble CandySoft)
```
- 甘園ぼ ～二人だけのヒミツの遊び～
  /HSN0:7C@555ED:amaenbo.exe
```

### [HARUKAZE] (Same developer as Set 1)
```
- ノラと皇女と野良猫ハート2
  /HAN-C@62CC5:ノラと皇女と野良猫ハート２.exe
```

### [しばそふと] (Shiba Soft)
```
- ラブコーディネーション！
  /HBN-1C*0@27D60:LoVeCoOrDiNaTiOn.exe
```

### [Fluorite]
```
- ソーサレス＊アライヴ！～the World's End Fallen Star～
  /HVN8@14C796:ソーサレス＊アライヴ！.exe
```

### [Milimili]
```
- エロいもハリケーン！　～アイドルの妹がエロくてエロくてオレの理性に嵐の予感！？～
  /HB-C@4397E6
```

### [Unknown Developer]
```
- 変態エルフ姉妹と真面目オーク
  /HB30*0@89504:hemo.exe
- まほ☆たまシリーズ　おっぱい編
  /HB-4@C078:ags.exe (Note: 'まほたま' entry in Set 53)
```

### [みなとカーニバル] (Minato Carnival)
```
- 和香様の座する世界
  /HS4@2EBD0:和香様の座する世界.exe
```

### [ωstar]
```
- 美少女万華鏡 -理と迷宮の少女-
  /HW-1C*0:-20@100C20:美少女万華鏡.exe
```

### [Sukaradog]
```
- 家出ギャルを拾ったので育ててみた
  /HW-C*0:3C@3349C53:iedeg.exe (Textractor)
  /HW-8*2:-8*4@3349C50:iedeg.exe (Textractor)(Alternative from comments)
```

### [Navel]
```
- Princess x Princess
  HS65001#-10@1647F0:PrincessPrincess.exe (Textractor)
```

### [Minato Carnival] (みなとカーニバル)
```
- クロガネ回姫譚 Kurogane Kaikitan
  /HAC@66640:クロガネ回姫譚.exe
```

### [Hooksoft] (HOOKSOFT)
```
- 思い出抱えてアイにコイ!!
  /HS-10@A3500:思い出抱えてアイにコイ!!.exe
```

### [Guilty`Dash]
```
- 横恋慕 -人妻のヒメゴト- (Yokorenbo -Hitozuma no Himegoto-)
  /HQ-8@64E0AdvHD_crack.exe ( or /HQ-8@64E0AdvHD.exe )
```

### [onomatope*Raspberry]
```
- ビッチ学園が清純なはずがないっ！！？
  /HS18*50:18*14@0:GDI32.dll:GetTextMetricsA (Note: Duplicate from Set 1, same developer, different game)
```

### [WitchFlame]
```
- 妹とヤリたいことのすべて 「ごくん……ねぇ、なんでもするから、これ、もっとちょうだい、お兄ちゃん」/HBD4*0@3EA31:妹とヤリたいことのすべて.exe
```

> [!NOTE]
> The following is a comment section from the original wiki discussing a specific game engine.

### [幻遊郷] (Genyuukyou)
```
- 異世界に召喚された俺は寝取られスキル持ちだった！？
  /HW-10:1C*0@153D:mono.dll
  /HW-8:1C*0@15EB:mono.dll ←推荐 (Chinese text: "Recommended")
  将VNR目录下Visual Novel Reader\Library\Frameworks\Sakura\py\libs\gameengine，把gameengine这个目录改名，改成gameengine1之类的都行，再使用特殊码
  (Chinese Text: "Rename the gameengine directory in VNR\Library\Frameworks\Sakura\py\libs\gameengine to something like gameengine1, then use the special code.")
  提问:改名会对其他游戏或者其他特殊码有别的影响吗？
  (Chinese Text: "Question: Will renaming affect other games or other special codes?")
  回答:有影响，那个目录下有个engine.py是手动编写附加的特殊码，但是会有冲突，mono，nitroplus，system4这几个引擎有影响，文件夹名改回来重启vnr就行
  (Chinese Text: "Answer: Yes, it will have an impact. There is an engine.py in that directory which is a manually written additional special code, but there will be conflicts. Mono, Nitroplus, System4 engines are affected. Rename the folder back and restart VNR to fix it.")
```

### [Otomate] (Implied from game title, original HTML doesn't specify developer here)
```
- 蛇香のライラ～Allure of MUSK～第一夜 ヨーロピアン・ナイト /HQN-10@9D1F2:JyakounoLylaVol1.exe
```

### [PULLTOP]
```
- 見上げてごらん、夜空の星を Interstellar Focus /HQC4@4603b0
- LoveKami -Pureness Harem- /HW-1C@CCAF:AdvHD.exe
- あの日の旅人、ふれあう未来 /HW-1C@CCAF:AdvHD.exe (Willplus3 H-code works for this one)
- さくらいろ、舞うころに /HQN-1C@9434:AdvHD.exe
  /HQN-1C@92F0:AdvHD.exe (test required for those two)
```

### [TinkerBell]
```
- 母娘×シャッフル！～夏休み、Ｗ母娘のいちゃいちゃ包囲網～: /HW-4@1393C:oyakoshu.exe
```

### [Campus]
```
- アキウソ -The only neat thing to do- : /HWN-4:-C@258A4E:malie.exe
```

### [Qureate]
```
- By Chasekilleen Fantasy Tavern Sextet -Vol.1 New World Days- : /HS65001#-1C@614C60:fts1.exe
- By Chasekilleen TroubleDays : /HS65001#-1C@6146B0:TroubleDays.exe
```

### [Nitroplus]
```
- By Chasekilleen HQ4@8EAEE0 機神咆哮デモンベイン (Demonbane)
```

### [きゃべつそふと] (Cabblage Soft)
```
- あまいろショコラータ : /HQ8@9ED90:amachoco.exe
```

### [Azarashi Soft]
```
- Amaemi-longing for you /アマエミ-longing for you- : /HS65001#-3C@18B840:amaemi.exe
```

### [ましゅまろそふと] (Marshmallow Soft)
```
- シスターレッスン: /HQ4@74780:sisterlesson.exe
```