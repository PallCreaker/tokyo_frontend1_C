# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
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
  {user_id: 26, category_id: 11}
  ])

specials = Special.create([
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
  {user_id: 18, category_id: 11, content: '東工大に就職', status: 0}
  ])