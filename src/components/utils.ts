/**
 * Класс Util
 */

import Dom from './dom';

/**
 * Возможные уровни журнала
 */
export enum LogLevels {
  VERBOSE = 'VERBOSE',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

/**
 * Разрешить использовать глобальную ВЕРСИЮ, которая будет перезаписана Webpack
 */
declare const VERSION: string;

/**
 * @typedef {object} ChainData
 * @property {object} data - данные, которые будут переданы успешному или резервному варианту
 * @property {Function} function - функции, которые должны вызываться асинхронно
 *
 * @interface ChainData
 */
export interface ChainData {
  data?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function: (...args: any[]) => any;
}

/**
 * Editor.js utils
 */

/**
 * Возвращает основные коды ключей в качестве констант
 *
 * @returns {{}}
 */
export const keyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
};

/**
 * Возврат кодов кнопок мыши
 */
export const mouseButtons = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4,
};

/**
 * Пользовательский регистратор
 *
 * @param {boolean} labeled — если это правда, Editor.js метка показана
 * @param {string} msg  - сообщение
 * @param {string} type - тип ведения журнала 'log'|'warn'|'error'|'info'
 * @param {*} [args]      - аргумент для входа с сообщением
 * @param {string} style  - дополнительный стиль к сообщению
 */
function _log(
  labeled: boolean,
  msg: string,
  type = 'log',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any,
  style = 'color: inherit'
): void {
  if (!('console' in window) || !window.console[type]) {
    return;
  }

  const isSimpleType = ['info', 'log', 'warn', 'error'].includes(type);
  const argsToPass = [];

  switch (_log.logLevel) {
    case LogLevels.ERROR:
      if (type !== 'error') {
        return;
      }
      break;

    case LogLevels.WARN:
      if (!['error', 'warn'].includes(type)) {
        return;
      }
      break;

    case LogLevels.INFO:
      if (!isSimpleType || labeled) {
        return;
      }
      break;
  }

  if (args) {
    argsToPass.push(args);
  }

  const editorLabelText = `Editor.js ${VERSION}`;
  const editorLabelStyle = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;

  if (labeled) {
    if (isSimpleType) {
      argsToPass.unshift(editorLabelStyle, style);
      msg = `%c${editorLabelText}%c ${msg}`;
    } else {
      msg = `( ${editorLabelText} )${msg}`;
    }
  }

  try {
    if (!isSimpleType) {
      console[type](msg);
    } else if (args) {
      console[type](`${msg} %o`, ...argsToPass);
    } else {
      console[type](msg, ...argsToPass);
    }
  } catch (ignored) {}
}

/**
 * Текущий уровень журнала
 */
_log.logLevel = LogLevels.VERBOSE;

/**
 * Установить текущий уровень журнала
 *
 * @param {LogLevels} logLevel - уровень журнала для установки
 */
export function setLogLevel(logLevel: LogLevels): void {
  _log.logLevel = logLevel;
}

/**
 * _log метод прокси без Editor.js этикетки
 */
export const log = _log.bind(window, false);

/**
 * _log метод прокси с Editor.js этикеткой
 */
export const logLabeled = _log.bind(window, true);

/**
 * Возвращаемое строковое представление типа объекта
 *
 * @param {*} object - объект для получения типа
 *
 * @returns {string}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typeOf(object: any): string {
  return Object.prototype.toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * Проверьте, является ли передаваемая переменная функцией
 *
 * @param {*} fn - функция для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFunction(fn: any): fn is Function {
  return typeOf(fn) === 'function';
}

/**
 * Проверяет, является ли переданный аргумент объектом
 *
 * @param {*} v - объект для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject(v: any): v is object {
  return typeOf(v) === 'object';
}

/**
 * Проверяет, является ли переданный аргумент строкой
 *
 * @param {*} v - переменная для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isString(v: any): v is string {
  return typeOf(v) === 'string';
}

/**
 * Проверяет, является ли переданный аргумент логическим
 *
 * @param {*} v - переменная для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBoolean(v: any): v is boolean {
  return typeOf(v) === 'boolean';
}

/**
 * Проверяет, является ли переданный аргумент числом
 *
 * @param {*} v - переменная для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(v: any): v is number {
  return typeOf(v) === 'number';
}

/**
 * Проверяет, не определен ли переданный аргумент
 *
 * @param {*} v - переменная для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUndefined(v: any): v is undefined {
  return typeOf(v) === 'undefined';
}

/**
 * Проверьте, является ли переданная функция классом
 *
 * @param {Function} fn - функция для проверки
 *
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isClass(fn: any): boolean {
  return isFunction(fn) && /^\s*class\s+/.test(fn.toString());
}

/**
 * Проверяет, пуст ли объект
 *
 * @param {object} object - объект для проверки
 *
 * @returns {boolean}
 */
export function isEmpty(object: object): boolean {
  if (!object) {
    return true;
  }

  return Object.keys(object).length === 0 && object.constructor === Object;
}

/**
 * Проверьте, является ли переданный объект обещанием
 *
 * @param  {*}  object - object to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromise(object: any): object is Promise<any> {
  return Promise.resolve(object) === object;
}

/**
 * Возвращает true, если переданный код ключа является печатаемым (a-Z, 0-9 и т. д.) символом.
 *
 * @param {number} keyCode - код ключа
 *
 * @returns {boolean}
 */
export function isPrintableKey(keyCode: number): boolean {
  return (keyCode > 47 && keyCode < 58) || // цифровые клавиши
    keyCode === 32 || keyCode === 13 || // Пробел и клавиша возврата(ы)
    keyCode === 229 || // обработка ввода ключей для определенных языков — китайского, японского и т.д.
    (keyCode > 64 && keyCode < 91) || // буквенные ключи
    (keyCode > 95 && keyCode < 112) || // Клавиши цифровой клавиатуры
    (keyCode > 185 && keyCode < 193) || // ;=,-./` (в порядке)
    (keyCode > 218 && keyCode < 223); // [\]' (в порядке)
}

/**
 * Запускает последовательность обещаний асинхронно
 *
 * @param {ChainData[]} chains - список или ChainData's
 * @param {Function} success - успешный обратный вызов
 * @param {Function} fallback - обратный вызов, который срабатывает в случае ошибок
 *
 * @returns {Promise}
 */
export async function sequence(
  chains: ChainData[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  success: (data: object) => void = (): void => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fallback: (data: object) => void = (): void => {}
): Promise<void> {
  /**
   * Оформитель
   *
   * @param {ChainData} chainData - Цепные данные
   *
   * @param {Function} successCallback - успешный обратный вызов
   * @param {Function} fallbackCallback - сбой обратного вызова
   *
   * @returns {Promise}
   */
  async function waitNextBlock(
    chainData: ChainData,
    successCallback: (data: object) => void,
    fallbackCallback: (data: object) => void
  ): Promise<void> {
    try {
      await chainData.function(chainData.data);
      await successCallback(!isUndefined(chainData.data) ? chainData.data : {});
    } catch (e) {
      fallbackCallback(!isUndefined(chainData.data) ? chainData.data : {});
    }
  }

  /**
   * выдерните каждый элемент из очереди
   * Во-первых, отправьте разрешённое обещание в качестве предыдущего значения
   * Каждый метод "подготовки" плагинов возвращает обещание, 
   * вот почему текущий элемент не сможет продолжить работу, 
   * пока не сможет получить разрешённое обещание
   */
  return chains.reduce(async (previousValue, currentValue) => {
    await previousValue;

    return waitNextBlock(currentValue, success, fallback);
  }, Promise.resolve());
}

/**
 * Сделать массив из коллекции, подобной массиву
 *
 * @param {ArrayLike} коллекция - коллекция для преобразования в массив
 *
 * @returns {Array}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function array(collection: ArrayLike<any>): any[] {
  return Array.prototype.slice.call(collection);
}

/**
 * Задержки выполнения метода
 *
 * @param {Function} method - способ выполнения
 * @param {number} timeout - тайм-аут в мс
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function delay(method: (...args: any[]) => any, timeout: number) {
  return function (): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this,
        // eslint-disable-next-line prefer-rest-params
        args = arguments;

    window.setTimeout(() => method.apply(context, args), timeout);
  };
}

/**
 * Получить расширение файла
 *
 * @param {File} file - file
 *
 * @returns {string}
 */
export function getFileExtension(file: File): string {
  return file.name.split('.').pop();
}

/**
 * Проверьте, является ли строка типом MIME
 *
 * @param {string} type - строка для проверки
 *
 * @returns {boolean}
 */
export function isValidMimeType(type: string): boolean {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(type);
}

/**
 * Способ демонтажа
 * Вызов метода по прошествии времени
 *
 * Обратите внимание, что этот метод возвращает функцию и объявленную переменную, которые необходимо вызвать
 *
 * @param {Function} func - функция, которую мы регулируем
 * @param {number} wait - время в миллисекундах
 * @param {boolean} immediate - звоните прямо сейчас
 * @returns {Function}
 */
export function debounce(func: () => void, wait?: number, immediate?: boolean): () => void {
  let timeout;

  return (): void => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this,
        // eslint-disable-next-line prefer-rest-params
        args = arguments;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

/**
 * Копирует переданный текст в буфер обмена
 *
 * @param text - текст для копирования
 */
export function copyTextToClipboard(text): void {
  const el = Dom.make('div', 'codex-editor-clipboard', {
    innerHTML: text,
  });

  document.body.appendChild(el);

  const selection = window.getSelection();
  const range = document.createRange();

  range.selectNode(el);

  window.getSelection().removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
  document.body.removeChild(el);
}

/**
 * Возвращает объект с именем ОС в качестве ключа и логическим значением в качестве значения. Показывает текущую ОС пользователя
 */
export function getUserOS(): {[key: string]: boolean} {
  const OS = {
    win: false,
    mac: false,
    x11: false,
    linux: false,
  };

  const userOS = Object.keys(OS).find((os: string) => navigator.appVersion.toLowerCase().indexOf(os) !== -1);

  if (userOS) {
    OS[userOS] = true;

    return OS;
  }

  return OS;
}

/**
 * Заглавная буква первой буквы строки
 *
 * @param {string} text - текст с заглавной буквы
 *
 * @returns {string}
 */
export function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

/**
 * Рекурсивное слияние с объектами
 *
 * @param {object} target - цель слияния
 * @param {object[]} sources - объединить источники
 * @returns {object}
 */
export function deepMerge<T extends object>(target, ...sources): T {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

/**
 * Возвращает true, если текущее устройство поддерживает события касания
 *
 * Обратите внимание! Это простое решение, оно может дать ложноположительные результаты.
 * Для более тщательного обнаружения сенсорных устройств используйте прослушиватель событий 'touchstart'
 *
 * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 *
 * @returns {boolean}
 */
export const isTouchSupported: boolean = 'ontouchstart' in document.documentElement;

/**
 * Сделайте команду быстрого доступа более удобочитаемой для человека
 *
 * @param {string} shortcut — string like 'CMD+B'
 */
export function beautifyShortcut(shortcut: string): string {
  const OS = getUserOS();

  shortcut = shortcut
    .replace(/shift/gi, '⇧')
    .replace(/backspace/gi, '⌫')
    .replace(/enter/gi, '⏎')
    .replace(/up/gi, '↑')
    .replace(/left/gi, '→')
    .replace(/down/gi, '↓')
    .replace(/right/gi, '←')
    .replace(/escape/gi, '⎋')
    .replace(/insert/gi, 'Ins')
    .replace(/delete/gi, '␡')
    .replace(/\+/gi, ' + ');

  if (OS.mac) {
    shortcut = shortcut.replace(/ctrl|cmd/gi, '⌘').replace(/alt/gi, '⌥');
  } else {
    shortcut = shortcut.replace(/cmd/gi, 'Ctrl').replace(/windows/gi, 'WIN');
  }

  return shortcut;
}

/**
 * Возвращает действительный URL-адрес. Если он выходит наружу и действителен, он возвращается сам
 * Если URL-адрес имеет "одну косую черту", то он связывается с источником расположения окна
 * или когда url имеет "два недостатка", он добавляет только протокол
 *
 * @param {string} url - url to prettify
 */
export function getValidUrl(url: string): string {
  try {
    const urlObject = new URL(url);

    return urlObject.href;
  } catch (e) {
    // не делайте ничего, кроме обработки ниже
  }

  if (url.substring(0, 2) === '//') {
    return window.location.protocol + url;
  } else {
    return window.location.origin + url;
  }
}

/**
 * Открывает новую вкладку с переданным URL-адресом
 *
 * @param {string} url - URL-адрес для перенаправления
 */
export function openTab(url: string): void {
  window.open(url, '_blank');
}

/**
 * Возвращает случайно сгенерированный идентификатор
 *
 * @param {string} prefix - префикс идентификатора
 *
 * @returns {string}
 */
export function generateId(prefix = ''): string {
  // tslint:disable-next-line:no-bitwise
  return `${prefix}${(Math.floor(Math.random() * 1e8)).toString(16)}`;
}

/**
 * Общий метод печати предупреждения об использовании устаревшего свойства или метода.
 *
 * @param condition - условие для устаревания.
 * @param oldProperty - устаревшее свойство.
 * @param newProperty - свойство, которое следует использовать вместо этого.
 */
export function deprecationAssert(condition: boolean, oldProperty: string, newProperty: string): void {
  const message = `«${oldProperty}» является устаревшим и будет удален в следующем крупном выпуске. Пожалуйста, используйте вместо этого «${newProperty}».`;

  if (condition) {
    logLabeled(message, 'warn');
  }
}
