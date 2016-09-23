function fetchHotTopics (onSuccess) {
  wx.request({
    url: 'https://www.v2ex.com/api/topics/hot.json',
    success: onSuccess
  })
}

const pageData = {
  data: {
    topics: []
  },
  onLoad: function (options) {
    const ctx = this
    fetchHotTopics(function (res) {
      ctx.setData({
        topics: res.data
      })
    })
  }
}

Page(pageData)