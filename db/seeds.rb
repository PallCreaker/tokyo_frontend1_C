# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  {fb_name: 'Matsuda Junpei'},
  {fb_name: 'Watanabe Takahiro'},
  {fb_name: 'Fujita Kazumasa'},
  {fb_name: 'Sumiyoshi Akira'},
  {fb_name: 'Ohwaki Toshiyuki'},
  {fb_name: 'Kamiya Yoshinori'},
  {fb_name: 'Tsuge Utako'},
  {fb_name: 'Takabayashi Haruhiko'},
  {fb_name: 'Nakagawa Akihiro'},
  {fb_name: 'Miyamura Hirofumi'},
  {fb_name: 'Tamai Hisano'},
  {fb_name: 'Inuduka Tetsunori'},
  {fb_name: 'Inuduka Chiduko'},
  {fb_name: 'Hoshi Yoshiko'},
  {fb_name: 'Sugimoto Genki'},
  {fb_name: '安倍晋三'},
  {fb_name: '野田佳彦'},
  {fb_name: '菅直人'},
  {fb_name: '鳩山由紀夫'},
  {fb_name: '麻生太郎'},
  {fb_name: '福田康夫'},
  {fb_name: '小泉純一郎'},
  {fb_name: '森喜朗'},
  {fb_name: 'バラク・オバマ'},
  {fb_name: 'ジョージ・W・ブッシュ'},
  {fb_name: 'ビル・クリントン'}
  ])

interests = Interest.create([
  {user_id: 1, category_id: 20},
  {user_id: 2, category_id: 14},
  {user_id: 3, category_id: 21},
  {user_id: 4, category_id: 19},
  {user_id: 5, category_id: 10},
  {user_id: 6, category_id: 2},
  {user_id: 7, category_id: 24},
  {user_id: 8, category_id: 25},
  {user_id: 9, category_id: 13},
  {user_id: 10, category_id: 17},
  {user_id: 11, category_id: 18},
  {user_id: 12, category_id: 12},
  {user_id: 13, category_id: 24},
  {user_id: 14, category_id: 10},
  {user_id: 15, category_id: 19},
  {user_id: 16, category_id: 11},
  {user_id: 17, category_id: 11},
  {user_id: 18, category_id: 11},
  {user_id: 19, category_id: 11},
  {user_id: 20, category_id: 11},
  {user_id: 21, category_id: 11},
  {user_id: 22, category_id: 11},
  {user_id: 23, category_id: 11},
  {user_id: 24, category_id: 11},
  {user_id: 25, category_id: 11},
  {user_id: 26, category_id: 11},
  ])

specials = Special.create([
  {user_id: 1, category_id: 19},
  {user_id: 2, category_id: 19},
  {user_id: 3, category_id: 19},
  {user_id: 4, category_id: 20},
  {user_id: 5, category_id: 21},
  {user_id: 6, category_id: 28},
  {user_id: 7, category_id: 2},
  {user_id: 8, category_id: 24},
  {user_id: 9, category_id: 19},
  {user_id: 10, category_id: 24},
  {user_id: 11, category_id: 23},
  {user_id: 12, category_id: 21},
  {user_id: 13, category_id: 13},
  {user_id: 14, category_id: 16},
  {user_id: 15, category_id: 29},
  {user_id: 16, category_id: 21},
  {user_id: 17, category_id: 21},
  {user_id: 18, category_id: 21},
  {user_id: 19, category_id: 14},
  {user_id: 20, category_id: 21},
  {user_id: 21, category_id: 14},
  {user_id: 22, category_id: 21},
  {user_id: 23, category_id: 21},
  {user_id: 24, category_id: 21},
  {user_id: 25, category_id: 14},
  {user_id: 26, category_id: 21}
  ])

questions = Question.create([
  {user_id: 24, category_id: 11, content: '農業に就業する', status: 0},
  {user_id: 16, category_id: 11, content: '東大に就職', status: 0},
  {user_id: 18, category_id: 11, content: '東工大に就職', status: 0},
  {user_id: 4, category_id: 19, content: 'iPhoneアプリ作成', status: 0},
  {user_id: 5, category_id: 10, content: '一人暮らし', status: 0},
  {user_id: 6, category_id: 2, content: '電気電子系大学に入る為の勉強', status: 0},
    {user_id: 15, category_id: 19, content: 'Androidアプリ開発', status: 1},
  ])

comments = Comment.create([
  {user_id: 9, question_id: 4, content: 'まず「はじめてのAndroidアプリ開発」を読んで一通りのチュートリアルをしました．次に「電卓アプリ」を作りました．'}
  ])

requests = Request.create([
  {comment_id: 1, question_id: 4, from_user_id: 9, to_user_id: 15}
  ])

howtostarts = Howtostart.create([
    {
      author_id: 5,
      category_id: 21,
      first_content: '食べます1',
      next_content: 'また食べます1'
    },{
      author_id: 12,
      category_id: 21,
      first_content: '食べます2',
      next_content: 'また食べます2'
    },{
      author_id: 16,
      category_id: 21,
      first_content: '食べます3',
      next_content: 'また食べます3'
    },{
      author_id: 20,
      category_id: 21,
      first_content: '食べます4',
      next_content: 'また食べます4'
    }
  ])

categories = Category.create([
  {name: '語学'}, # 大カテゴリ始め
  {name: '情報・電気電子'},
  {name: '理学・工学'},
  {name: '法律・経営・経理'},
  {name: 'デザイン'},
  {name: '資格'},
  {name: '音楽'},
  {name: '趣味'},
  {name: '留学'},
  {name: '一人暮らし'},
  {name: '就活'},
  {name: 'アルバイト'},
  {name: 'その他'}, # 大カテゴリ終わり 13

  {name: '日本語', parent_id: 1}, # 始
  {name: '英語', parent_id: 1}, # 終 15

  {name: 'パソコン', parent_id: 2}, # 始
  {name: 'スマートフォン', parent_id: 2},
  {name: 'インターネット', parent_id: 2},
  {name: 'プログラミング', parent_id: 2},
  {name: '電子工作', parent_id: 2}, # 終 20

  {name: '物理学', parent_id: 3}, # 始
  {name: '化学', parent_id: 3},
  {name: '地学', parent_id: 3},
  {name: '制御工学', parent_id: 3},
  {name: '宇宙工学', parent_id: 3}, # 終 25

  {name: '法律', parent_id: 4}, # 始
  {name: '経営', parent_id: 4}, 
  {name: '経理', parent_id: 4}, # 終 28

  {name: '絵画', parent_id: 5}, # 始
  {name: 'アプリデザイン', parent_id: 5}, # 終 30

  {name: '公認会計士', parent_id: 6}, # 始
  {name: '司法書士', parent_id: 6},
  {name: '税理士', parent_id: 6}, 
  {name: '簿記', parent_id: 6}, 
  {name: '建設業経理士', parent_id: 6}, # 35
  {name: '農業簿記', parent_id: 6}, 
  {name: '米国公認会計士', parent_id: 6},
  {name: 'BATIC・英文会計', parent_id: 6}, 
  {name: '社会保険労務士', parent_id: 6}, 
  {name: '行政書士', parent_id: 6}, # 40
  {name: '宅建', parent_id: 6}, 
  {name: 'マンション管理士', parent_id: 6}, 
  {name: '管理業務主任者', parent_id: 6}, 
  {name: 'ビジネス実務法務検定', parent_id: 6}, 
  {name: '中小企業診断士', parent_id: 6}, # 45
  {name: 'FP', parent_id: 6}, 
  {name: '旅行業務取扱管理者', parent_id: 6}, 
  {name: '公会計', parent_id: 6}, 
  {name: '色彩検定', parent_id: 6}, 
  {name: '販売士', parent_id: 6}, #50
  {name: '情報処理技術者', parent_id: 6}, 
  {name: 'MOS', parent_id: 6}, 
  {name: '医療事務', parent_id: 6}, 
  {name: '介護職員初任者研究', parent_id: 6}, 
  {name: '介護福祉士', parent_id: 6}, #55
  {name: '社会福祉士', parent_id: 6}, 
  {name: '地方公務員', parent_id: 6}, 
  {name: '国家公務員', parent_id: 6}, 
  {name: '警察官', parent_id: 6}, 
  {name: '消防官', parent_id: 6}, #60
  {name: '就職対策', parent_id: 6}, 
  {name: '秘書検定', parent_id: 6}, 
  {name: '日本語教師', parent_id: 6}, 
  {name: '保育科', parent_id: 6}, 
  {name: 'TOEIC', parent_id: 6}, #65
  {name: 'TOEFL', parent_id: 6}, # 終

  {name: '音楽鑑賞', parent_id: 7}, # 始
  {name: '楽器演奏', parent_id: 7}, # 終

  {name: '旅行', parent_id: 8}, # 始 趣味
  {name: '自転車', parent_id: 8}, # 終 70

  {name: 'アジア', parent_id: 9}, # 始 留学
  {name: 'ヨーロッパ', parent_id: 9},
  {name: 'オセアニア', parent_id: 9},
  {name: '北アメリカ', parent_id: 9},
  {name: '南アメリカ', parent_id: 9}, #75
  {name: 'アフリカ', parent_id: 9}, # 終

  {name: '掃除', parent_id: 10}, # 始 一人暮らし
  {name: '料理', parent_id: 10},
  {name: '公共料金', parent_id: 10},
  {name: '引っ越し', parent_id: 10}, #80
  {name: '洗濯', parent_id: 10}, # 終

  {name: '就職活動', parent_id: 11}, # 始 就活
  {name: 'インターン', parent_id: 11}, # 終

  {name: '接客', parent_id: 12}, # 始 アルバイト
  {name: 'ソフトウェア開発', parent_id: 12}, # 終 85

  {name: 'Java', parent_id: 19}, # 始
  {name: 'Scala', parent_id: 19},
  {name: 'Ruby', parent_id: 19},
  {name: 'C', parent_id: 19},
  {name: 'C++', parent_id: 19}, # 90
  {name: 'C#', parent_id: 19},
  {name: 'F#', parent_id: 19},
  {name: 'シェルスクリプト', parent_id: 19},
  {name: 'javascript', parent_id: 19},
  {name: 'CSS', parent_id: 19}, # 95
  {name: 'HTML', parent_id: 19} #終
  ])