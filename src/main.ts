import { Observable } from 'rxjs';

import { createEditor } from './lib/create';

import './lib/assets/index.scss';

const editor = createEditor('#editor', {
  theme: 'dark',
  uploader(type: string): string | Promise<string> | Observable<string> {
    console.log(type);
    return '/test';
  },
  content: `只要同志们同心魂牵梦萦魂牵梦萦魂牵梦7897897879萦魂牵梦萦魂牵梦8989890809890萦魂牵梦萦城柑大本营魂牵梦萦进口`
});

// editor.updateContentHTML('<p>p1<span>p-span</span></p><span>span3</span><span>span4</span><p>p2</p><span>span1</span><span>span2</span>')
//
const box = document.getElementById('box');
editor.onChange.subscribe(result => {
  box.innerText = result.contents;
});

// setTimeout(() => {
//   editor.setContents(`<html><body><div>测试</div></body></html>`)
// }, 3000);
