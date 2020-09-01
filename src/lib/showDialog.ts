import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const showDialog = (options) => {
  const { title, content, confirm, cancel, closeOverlay, word1, word2 } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          //监听Visible的值变化 'onUpdate:toast'
          "onUpdate:visible": (value) => {
            if (value === false) {
              app.unmount(div);
              div.remove();
            }
          },
          confirm, cancel, closeOverlay, word1, word2
        },
        {
          //放插槽属性
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};