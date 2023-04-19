<template>
  <div class="hot-card">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
          <img
                  slot="extra"
                  width="60"
                  height="48"
                  alt="logo"
                  src="https://cdn.dribbble.com/userupload/6352383/file/original-cbe687fcbd105883926dac5b07333b64.jpg?compress=1&resize=400x300&vertical=top"
          />
        <a-list-item-meta
            description="Ant Design, a design "
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style scoped>
.hot-card{
  /*background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);*/
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    margin-bottom: 24px;
    padding: 16px;
    /*background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);*/
  background-image: linear-gradient(60deg, #a8edea 0%, #fed6e3 100%);


}

</style>
