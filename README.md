<a href="https://editorjs.io/"><p align="center"><img src="https://capella.pics/79ce946a-d636-41cd-aa96-d3bc5ecfde03.jpg"></p></a>

[![](https://flat.badgen.net/npm/v/@editorjs/editorjs?icon=npm)](https://www.npmjs.com/package/@editorjs/editorjs)
[![](https://flat.badgen.net/bundlephobia/min/@editorjs/editorjs?color=cyan)](https://www.npmjs.com/package/@editorjs/editorjs)
[![](https://flat.badgen.net/bundlephobia/minzip/@editorjs/editorjs?color=green)](https://www.npmjs.com/package/@editorjs/editorjs)
[![Backers on Open Collective](https://opencollective.com/editorjs/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/editorjs/sponsors/badge.svg)](#sponsors)
[![](https://flat.badgen.net/npm/license/@editorjs/editorjs)](https://www.npmjs.com/package/@editorjs/editorjs)
[![Join the chat at https://gitter.im/codex-team/editor.js](https://badges.gitter.im/codex-team/editor.js.svg)](https://gitter.im/codex-team/editor.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge 12+ | Firefox 18+ | Chrome 49+ | Safari 10+ | Safari 10+ | Opera 36+

## Если тебе нравится проект 💗💗💗

Если вам нравится Editor.js, вы можете поддержать улучшения проекта и разработку новых функций, сделав пожертвование нашему коллективу.

 👉  [https://opencollective.com/editorjs](https://opencollective.com/editorjs)

### Спонсоры

Поддержите этот проект, став спонсором. Ваш логотип появится здесь со ссылкой на ваш сайт. [[Стать спонсором](https://opencollective.com/editorjs#sponsor)]

<a href="https://opencollective.com/editorjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/editorjs/sponsor/0/avatar.svg"></a>

 ### Поддержавшие

 Спасибо всем нашим спонсорам! 🙏 [[Станьте спонсором](https://opencollective.com/editorjs#backer)]

 <a href="https://opencollective.com/editorjs#backers" target="_blank"><img src="https://opencollective.com/editorjs/backers.svg?width=890"></a>

### Вкладчики

Этот проект существует благодаря всем людям, которые вносят свой вклад. <img src="https://opencollective.com/editorjs/contributors.svg?width=890&button=false" />

Мы очень рады новым участникам. Если вы хотите делать код вместе с нами, пожалуйста, взгляните на [Первые хорошие задания](https://github.com/codex-team/editor.js/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+task%22). Вы можете написать нам на `team@codex.so` или через специальный [Telegram-чат](https://t.me/editorjsdev), или любым другим способом.

## Документация

Посетите [https://editorjs.io/](https://editorjs.io) для просмотра всех статей документации.

- [Базовые концепции](https://editorjs.io/base-concepts)
- [Начало работы](https://editorjs.io/getting-started)
- [Конфигурация](https://editorjs.io/configuration)
- [Как создать Block Tool Plugin](https://editorjs.io/creating-a-block-tool)
- [Как создать плагин встроенного инструмента](https://editorjs.io/creating-an-inline-tool)
- [API для инструментов](https://editorjs.io/tools-api)

You can join a [Gitter-channel](https://gitter.im/codex-team/editor.js) or [Telegram-chat](//t.me/codex_editor) and ask a question.
Вы можете присоединиться к [Gitter-каналу](https://gitter.im/codex-team/editor.js) или [Telegram-чату](//t.me/codex_editor) и задать вопрос.

## Список изменений

См. весь [Список изменений](/docs/CHANGELOG.md)

## Как использовать Editor.js

### Основы

Editor.js - это редактор с блочным стилем. Блоки - это структурные единицы, из которых состоит Entry.
Например, "Абзац", `Заголовок`, `Изображение`, `Видео`, `Список` - это блоки. Каждый блок представлен плагином.
У нас есть [множество](http://github.com/editor-js/) готовых к использованию Плагинов и [простой API](https://editorjs.io/tools-api) для создания новых.

Как использовать редактор после [установки](https://editorjs.io/getting-started).

- Создавайте новые блоки, нажимая Enter или щёлкая по кнопке с плюсом
- Нажмите `TAB` или щёлкните на кнопке с плюсом для просмотра панели инструментов
- Нажмите `TAB` еще раз, чтобы открыть панель инструментов, и выберите нужный вам блок. Затем нажмите Enter.


 ![](https://github.com/editor-js/list/raw/master/assets/example.gif)

- Выберите фрагмент текста и примените стиль или вставьте ссылку с панели инструментов "Вставка".

![](https://capella.pics/7ccbcfcd-1c49-4674-bea7-71021468a1bd.jpg)

- Используйте кнопку "три точки" справа, чтобы открыть Настройки блока. Отсюда можно перемещать и удалять блок
или применить настройки инструмента, если они предусмотрены. Например, можно задать уровень заголовка или стиль списка.

![](https://capella.pics/01a55381-46cd-47c7-b92e-34765434f2ca.jpg)

### Ярлыки

Несколько ярлыков предустановлены как доступные.

Shortcut | Action | Restrictions
-- | -- | --
`TAB` | Показать/открыть панель инструментов. | На пустом блоке
`SHIFT+TAB` | Листайте назад Ящик с инструментами. | Пока открыта панель инструментов
`ENTER` | Создать блок | Когда открыта панель инструментов и выбран какой-либо инструмент
`CMD+B` | Смелый стиль | На выбор
`CMD+I` | Курсивный стиль | На выбор
`CMD+K` | Вставить ссылку | На выбор

Каждый инструмент также может иметь свои собственные ярлыки. Они задаются в конфигурации инструмента, например:

```js
var editor = new EditorJS({
  //...
  tools: {
    header: {
      class: Header,
      shortcut: 'CMD+SHIFT+H'
    },
    list: {
      class: List,
      shortcut: 'CMD+SHIFT+L'
    }
  }
  //...
 });

```


## Руководство по установке

Чтобы запустить Editor.js на своем сайте, нужно выполнить несколько шагов.

1. [Загрузить ядро редактора](#load-editors-core)
2. [Загрузить инструменты](#load-tools)
3. [Инициализировать экземпляр редактора](#create-editor-instance)

### Шаг 1. Загрузить ядро редактора

Get Editor.js itself. It is a [minified script](dist/editor.js) with Editor's core and some default must-have tools.

Choose the most usable method of getting Editor for you.

- Node package
- Source from CDN
- Local file from project

##### Option A. NPM install

Install the package via NPM or Yarn

```shell
npm i @editorjs/editorjs
```

Include module in your application

```javascript
import EditorJS from '@editorjs/editorjs';
```

##### Option B. Use a CDN

You can load EditorJS directly from from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@editorjs/editorjs).

`https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest`

For example, place this in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
```

##### Option C. Save source within your project

Copy the [editor.js](dist/editor.js) file to your project and load it.

```html
<script src="editor.js"></script>
```

### Step 2. Load the Tools that you want to make available

Each Block is represented by a [Tool](docs/tools.md). Tools are simple external scripts with their own logic. For example, there is a [Header](https://github.com/editor-js/header) Tool into which you type your heading text. If you want to be able to use this, install the Header Tool the same way as the Editor (Node.js, CDN, local file).

**Example:** use Header from CDN

```html
<script src="https://cdn.jsdelivr.net/npm/codex.editor.header@2.0.4/dist/bundle.js"></script>
```

Check [Editor.js's community](https://github.com/editor-js/) to see more ready-to-use Tools.

### Step 3. Create Editor instance

Create an instance of Editor.js and pass [Configuration Object](types/configs/editor-config.d.ts) with `holderId` and tools list.

```html
<div id="editorjs"></div>
```

You can create a simple Editor with only default Paragraph Tool by passing a string with element's Id (wrapper for Editor) as a configuration param. Or use the default `editorjs` id for wrapper.

```javascript
var editor = new EditorJS(); /** Zero-configuration */

// equals

var editor = new EditorJS('editorjs');
````

Or pass a whole settings object.

```javascript
var editor = new EditorJS({
    /**
     * Create a holder for the Editor and pass its ID
     */
    holder : 'editorjs',

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
        header: {
          class: Header,
          inlineToolbar : true
        },
        // ...
    },

    /**
     * Previously saved data that should be rendered
     */
    data: {}
});
```

### Saving Data

Call `editor.save()` and handle returned Promise with saved data.

```javascript
editor.save()
  .then((savedData) => {
    console.log(savedData);
  });
```

### Example

Take a look at the [example.html](example/example.html) to view more detailed examples.

## Credits and references

- We use [HTMLJanitor](https://github.com/guardian/html-janitor) module in our Sanitizer module.

## About team

We are CodeX and we build products for developers and makers.

Follow us on Twitter: [twitter.com/codex_team](https://twitter.com/codex_team)

Feel free to contact: <a href="mailto:team@codex.so?subject=Editor.js feedback">team@codex.so</a>

[codex.so](https://codex.so)
