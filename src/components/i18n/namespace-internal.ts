import defaultDictionary from './locales/en/messages.json';
import { DictNamespaces } from '../../types-internal/i18n-internal-namespace';
import { isObject, isString } from '../utils';

/**
 * Оценка словаря сообщений и возвращаемого объекта для цепочки пространств имён
 *
 * @param dict - Словарь сообщений
 * @param [keyPath] - путь к подразделу (используется в рекурсивном вызове)
 */
function getNamespaces(dict: object, keyPath?: string): DictNamespaces<typeof defaultDictionary> {
  const result = {};

  Object.entries(dict).forEach(([key, section]) => {
    if (isObject(section)) {
      const newPath = keyPath ? `${keyPath}.${key}` : key;

      /**
       * Проверьте текущие значения разделов, если все они являются строками, поэтому есть последний раздел
       */
      const isLastSection = Object.values(section).every((sectionValue) => {
        return isString(sectionValue);
      });

      /**
       * В последнем разделе мы заменяем путь к пространству имён вместо объекта на translates
       *
       * ui.toolbar.toolbox – "ui.toolbar.toolbox"
       * instead of
       * ui.toolbar.toolbox – {"Add": ""}
       */
      if (isLastSection) {
        result[key] = newPath;
      } else {
        result[key] = getNamespaces(section, newPath);
      }

      return;
    }

    result[key] = section;
  });

  return result as DictNamespaces<typeof defaultDictionary>;
}

/**
 * Введите безопасный доступ к разделам словаря внутренних сообщений
 *
 * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Нажмите, чтобы настроить');
 */
export const I18nInternalNS = getNamespaces(defaultDictionary);
