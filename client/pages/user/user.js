// pages/user/user.js
const app = getApp()
var app_var = require('../../app.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    locationAuthType: app.data.locationAuthTyp

    // userInfo: {
    //   nickName: "优达学城",
    //   avatarUrl: "", // 头像 URL 地址
    // }, // 虚拟数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onTapLogin: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      locationAuthType: app.data.locationAuthType
    })
    app_var.userInfo = e.detail.userInfo
    app.login({
      success: ({ userInfo }) => {
        this.setData({
          userInfo,
          locationAuthType: app.data.locationAuthType
        })
      },
      error: () => {
        this.setData({
          locationAuthType: app.data.locationAuthType
        })
      }
    })
  },
  
  // onTapLogin: function (e) {
  //   console.log(e.detail.errMsg)
  //   console.log(e.detail.userInfo)
  //   console.log(e.detail.rawData)
  //   this.setData({
  //     userInfo: e.detail.userInfo
  //   })
  //   this.login({
  //     success: ({ userInfo }) => {
  //       this.setData({
  //         userInfo: userInfo
  //       })
  //     }
  //   })
  // },

  // login({ success, error }) {
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo'] === false) {
  //         this.setData({
  //           locationAuthType: UNAUTHORIZED
  //         })
  //         // 已拒绝授权
  //         wx.showModal({
  //           title: '提示',
  //           content: '请授权我们获取您的用户信息',
  //           showCancel: false
  //         })
  //       } else {
  //         this.setData({
  //           locationAuthType: AUTHORIZED
  //         })
  //         this.doQcloudLogin({ success, error })
  //       }
  //     }
  //   })
  // },

  // doQcloudLogin({ success, error }) {
  //   // 调用 qcloud 登陆接口
  //   qcloud.login({
  //     success: result => {
  //       if (result) {
  //         let userInfo = result
  //         success && success({
  //           userInfo
  //         })
  //       } else {
  //         // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
  //         this.getUserInfo({ success, error })
  //       }
  //     },
  //     fail: () => {
  //       error && error()
  //     }
  //   })
  // },

  // getUserInfo({ success, error }) {
  //   qcloud.request({
  //     url: config.service.requestUrl,
  //     login: true,
  //     success: result => {
  //       let data = result.data

  //       if (!data.code) {
  //         let userInfo = data.data

  //         success && success({
  //           userInfo
  //         })
  //       } else {
  //         error && error()
  //       }
  //     },
  //     fail: () => {
  //       error && error()
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userInfo: app_var.userInfo,
      locationAuthType: app.data.locationAuthType
    })
    app.checkSession({
      success: ({ userInfo }) => {
        this.setData({
          userInfo
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})