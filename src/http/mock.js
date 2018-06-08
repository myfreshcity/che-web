var Random = Mock.Random
var index = Mock.mock('http://localhost:1322/api/index', {
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

var items = Mock.mock('http://localhost:1322/api/items', {
  'title|10':['奥迪A3','奥迪A6','奔驰GLA AMG','本田WR-V','元素','宝马1系']
});
 
export {index,items}
