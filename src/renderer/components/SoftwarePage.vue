<template>

  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal"
              theme="dark"
              active-name="1">
          <img class="layout-logo"
               src="@/assets/logo.png" />
          <div class="layout-title">
            <h3>安夏软件管家</h3>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Input suffix="ios-search"
                   style="width:300px"
                   placeholder="搜索软件名" />
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-phone"></Icon>
            技术支持:139xxxx0001
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger
               :style="{background: '#fff'}">
          <Menu width="auto"
                active-name="1">
            <MenuGroup title="精品推荐">
              <MenuItem name="1">
              <Icon type="md-document" />
              装机必备
              </MenuItem>
              <MenuItem name="2">
              <Icon type="md-chatbubbles" />
              热门应用
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="宝库分类">
              <MenuItem name="3">
              <Icon type="md-heart" />
              全部软件
              </MenuItem>
              <MenuItem name="4">
              <Icon type="md-leaf" />
              浏览器
              </MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 12px 12px'}">
          <Content :style="{margin:'12px',padding: '12px', minHeight: '280px', background: '#fff'}">
            <Software></Software>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>

</template>

<script>
import Software from './items/Software';
export default {
  name: 'software-page',
  components: {
    Software,
  },
  created() {
    const doc = {
      hello: 'world',
      n: 5,
      today: new Date(),
      nedbIsAwesome: true,
      notthere: null,
      notToBeSaved: undefined, // Will not be saved
      fruits: ['apple', 'orange', 'pear'],
      infos: { name: 'nedb' },
    };

    this.$db.insert(doc);
    // Find all documents in the collection
    this.$db.find({}, (err, docs) => {
      console.log(docs);
    });
  },
  methods: {},
};
</script>


<style scoped lang="scss">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  height: 45px;
  float: left;
  position: relative;
  top: 8px;
  left: -20px;
}
.layout-title {
  float: left;
  margin-left: -10px;
  h3 {
    color: #f7f7f7;
    text-shadow: 1px 1px 5px #5d5d5d;
    font-size: 20px;
  }
}
.layout-nav {
  float: right;
}
.ivu-layout {
  height: 100%;
  .ivu-layout-content {
    overflow: auto;
  }
}
</style>
