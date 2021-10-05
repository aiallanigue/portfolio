<template>
  <VueFaqAccordion :items='myItems'/>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  components: {
    VueFaqAccordion
  },
  items: {
    type: Array,
    required: true
  },
  data() {
    return {
      myItems: [
        {
          title: 'Section 1',
          value: '<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>'
        },
        {
          title: 'Section 2',
          value: '<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>'
        },
        {
          title: 'Section 3',
          value: '<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>'
        },
        {
          title: 'Section 4',
          value: '<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>'
        }
      ]
    }
  }
}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
