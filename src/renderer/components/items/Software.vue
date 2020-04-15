<!--
 * @file: 软件列表
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年04月15 15:58:50
 -->
<template>
  <List item-layout="vertical">

    <ListItem v-for="(item,index) in list"
              :key="index">
      <ListItemMeta :title="item.title"
                    description="QQ浏览器下载手机版是功能强大的手机浏览器之一，更快的浏览体验、更轻便的手机浏览器,更安全的浏览保护。."> <template slot="avatar">
          <img class="avatar"
               :src="item.img">
        </template></ListItemMeta>
      <template slot="action">
        <li>
          <span>软件大小: 37MB</span>
        </li>
        <li>发布日期: 2020-04-02</li>
        <li style="float:right">
          <Button icon="ios-download-outline"
                  class="download-btn"
                  type="primary">下载</Button>

        </li>

      </template>

    </ListItem>

  </List>
</template>
<script>
export default {
  name: 'Software',
  data() {
    return {
      list: [
        {
          title: 'OPPO浏览器 10.5.0.4',
          id: '2023149',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/1904/28/c2/spcgroup/144752442_1556418259068_115x115.png',
        },
        {
          title: '夸克浏览器 3.8.2.126',
          id: '388220',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2002/05/c16/spcgroup/191154802_1580889177326_115x115.png',
        },
        {
          title: '360手机浏览器 9.0.0.140',
          id: '89907',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2004/03/c20/spcgroup/200885789_1585901204349_115x115.png',
        },
        {
          title: 'UC浏览器 12.9.6.1076',
          id: '60203',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2004/13/c23/spcgroup/202804214_1586767699686_115x115.png',
        },
        {
          title: 'QQ浏览器 10.2.1.6630',
          id: '89946',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2004/02/c22/spcgroup/200665070_1585815093947_115x115.png',
        },
        {
          id: '356114',
          title: 'UC浏览器TV版 1.7.1.505',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/1709/07/c183/spcgroup/58366527_1504766283609_115x115.png',
        },
        {
          id: '79639',
          title: '谷歌浏览器Google Chrome 80.0.3987.132',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2003/09/c16/spcgroup/196225985_1583740725015_115x115.png',
        },

        {
          title: '猎豹浏览器极速版 5.19.2',
          id: '356065',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2002/05/c17/spcgroup/191156938_1580889941635_115x115.png',
        },
        {
          id: '1031935',
          title: 'IE浏览器 6.0.11',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/1704/05/c244/spcgroup/41725313_1491340337693_115x115.png',
        },
        {
          title: '搜狗浏览器 5.27.8',
          id: '352612',
          img:
            'https://imgrt.pconline.com.cn/images/upload/upc/tx/pcdlc/2003/19/c21/spcgroup/198053855_1584605980410_115x115.png',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.avatar {
  display: inline-block;
  text-align: center;
  background: #ccc;
  margin-top: 20px !important;
  color: #fff;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: bottom;
  width: 48px !important;
  height: 48px !important;
  line-height: 48px !important;
  border-radius: 50%;
}
.download-btn {
  position: relative;
  bottom: 50px;
}
</style>