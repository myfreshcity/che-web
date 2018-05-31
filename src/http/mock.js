var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  // "user|5-10": [{
  //   'name': '@cname', //中文名称
  //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
  //   'birthday': '@date("yyyy-MM-dd")', //日期
  //   'city': '@city(true)'//中国城市
  // }],
  "swiper|4":[
    {
      'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
      'id':'@id'
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', '')
  },
  'section2|10':{
    'list|10':[{
        'title':'@first',
        'price|99-1000':100,
        'intro': Random.paragraph(),
        'imgPath':Random.image('200x200', '#dec4e0', '#333', 'png', ''),
        'id':'@id'
      }],
      'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', '')
  },


  'section3':{
      'list|4':[{
        'title':'@last',
        'start':Random.time('HH:mm'),
        // 在end数组里随机取一个
        'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
        'id':'@id',
        'price|99-1000':100,
        'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
      }],

      'banner':Random.image('400x100', '#30f673', '#FFF', 'png', ''),

  },


  'section4':{
    'list|4':[{
      'title':'@first',
      'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
      'price|99-1000':100,
      'intro': Random.paragraph(),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }

});

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [{
    'title|1': ['奥迪A3 2018款 30周年年型 Sportback 35 TFSI 进取型','奥迪A4L 2018款 30周年年型 30 TFSI 进取型 ','阿斯顿·马丁DB11 2019款 4.0T V8 Coupe ','Stelvio 2017款 2.0T 280HP 豪华版','奔驰C级 2018款 C 200 运动版 ','奔驰GLE 2018款 GLE 300 d 4MATIC','思域 2016款 220TURBO CVT尊耀版 ','哥瑞 2016款 1.5L CVT经典版 ','思铂睿 2017款 2.0L 经典版 ','艾力绅 2016款 2.4L 经典版 '
    ],
    'intro':  '经典豪车，不容错过',
    'id':'@id',
    'price|50000-200000':100,
    'chose|3':[{
      'col|+1':['黑','银','白'],
      'size|+1':['2016款','2017款','2018款']
    }]
  }],

  'swiper|2':[{
    'imgSrc':Random.image('400x400', '#ffcc33','#FFF', 'png', ''),
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc':Random.image('600x600', '#5a9e6e','#FFF', 'png', '')
  }]
});
 
var category = Mock.mock('http://api.com/category', {
    'aside|14':[{
      'title|1':['奥迪','阿斯顿·马丁','奔腾','宝沃','保斐利','长城','东风','法拉利'],
      'list|60':[{
        'title|1':['奥迪A3','奥迪A6','奔驰GLA AMG','本田WR-V','元素','宝马1系'],
        'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

      }]
    }]
});
 
export {index,detail,category}
