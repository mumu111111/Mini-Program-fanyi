// const app= getApp()
// page({
//   data:{
//     curLang: {},//当 前语言一开始并不是在app中获取的，可以选择自己本页的语言 
//     langList: app.globalData.langList
//   },
//   onShow: function(){
//     this.setData({ curLang: app.globalData.curLang })
//   },

//   onTapItem: function(e){
//     let langObj = e.currentTarget.dataset//得到curLang
//     wx.setStorageSync('language', langObj)
//     this.setData({ 'curLang': langObj })
//     app.globalData.curLang = langObj
//     wx.switchTab({ url: '/pages/index/index' }) 
//   }
// })


// const app = getApp()
// Page({
//   data: {
//     curLang: {},
//     langList: app.globalData.langList
//   },
//   onShow: function () {
//     this.setData({ curLang: app.globalData.curLang })
//   },
//   onTapItem: function (e) {
//     let langObj = e.currentTarget.dataset
//     wx.setStorageSync('language', langObj)
//     this.setData({ 'curLang': langObj })
//     app.globalData.curLang = langObj
//     wx.switchTab({ url: '/pages/index/index' })
//   }
// })

const app = getApp()
Page({
  data: {
    curLang: {},//当前页被选中的语言
    langList: app.globalData.langList  //获得固定的语言列表
  },
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })//更新数据库（app相当于数据库）存放的最新数据  也是每个页面操作数据以后都是要进行存入元数据库 然后在获取最新一次的新数据
  },
  onTapItem: function (e) {
    let langObj = e.currentTarget.dataset //获取选中语言具体信息
    console.log("e.currentTarget" + e.currentTarget)
    
    console.log("langObj" + langObj)

    wx.setStorageSync('language', langObj) //存入缓存 以便下次打开 或记录当前状态
    this.setData({ 'curLang': langObj })   //存入本页data
    console.log(this.data.curLang)
    app.globalData.curLang = langObj       //更新app
    console.log(app.globalData.curLang)
    wx.switchTab({ url: '/pages/index/index' }) //做完点击事件 返回首页
  }
})
