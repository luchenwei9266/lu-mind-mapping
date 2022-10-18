import './topMenu.less'

const createDiv = (id, innerHTML) => {
  const div = document.createElement('div')
  div.id = id
  div.innerHTML = innerHTML
  return div
}

export default function(mind) {
  const styleDiv = createDiv('top-menu-style',`
    <div class="top-menu-container">
      <div class="top-menu-wrap">
        <button class="top-menu-item" data-item="addChild">插入子节点</button>
        <button class="top-menu-item" data-item="addFather">插入父节点</button>
        <button class="top-menu-item" data-item="addBro">插入同级节点</button>
        <button class="top-menu-item" data-item="del">删除节点</button>
        <button class="top-menu-item" data-item="focus">专注</button>
        <button class="top-menu-item" data-item="exitFocus">取消专注</button>
        <button class="top-menu-item" data-item="up">上移</button>
        <button class="top-menu-item" data-item="down">下移</button>
        <button class="top-menu-item" data-item="link">连接</button>
      </div>
    </div>
  `)

  mind.container.append(styleDiv);

}