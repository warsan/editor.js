import defaultDictionary from './locales/en/messages.json';
import { I18nDictionary, Dictionary } from '../../../types/configs';
import { LeavesDictKeys } from '../../types-internal/i18n-internal-namespace';

/**
 * Тип для всех доступных строк внутреннего словаря
 */
type DictKeys = LeavesDictKeys<typeof defaultDictionary>;

/**
 * Этот класс будет отвечать за перевод через словарь языка
 */
export default class I18n {
  /**
   * Свойство, в котором хранится словарь сообщений
   */
  private static currentDictionary: I18nDictionary = defaultDictionary;

  /**
   * Типобезопасный перевод для внутренних текстов пользовательского интерфейса:
   * Выполните перевод строки по пространству имён и ключу
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Нажмите, чтобы настроить')
   *
   * @param internalNamespace - путь к переведённой строке в словаре
   * @param dictKey - ключ словаря. Лучше использовать исходный текст локали по умолчанию
   */
  public static ui(internalNamespace: string, dictKey: DictKeys): string {
    return I18n._t(internalNamespace, dictKey);
  }

  /**
   * Перевод для внешних строк, которые не представлены в словаре по умолчанию.
   * Например, для имён инструментов, заданных пользователем
   *
   * @param namespace - путь к переведённой строке в словаре
   * @param dictKey - ключ словаря. Лучше использовать исходный текст локали по умолчанию
   */
  public static t(namespace: string, dictKey: string): string {
    return I18n._t(namespace, dictKey);
  }

  /**
   * Настроить модуль для использования внешнего словаря
   *
   * @param dictionary - список новых сообщений для переопределения по умолчанию
   */
  public static setDictionary(dictionary: I18nDictionary): void {
    I18n.currentDictionary = dictionary;
  }

  /**
   * Выполнение перевода как для внутренних, так и для внешних пространств имён
   * Если перевод не найден, возвращает переданный ключ в виде переведённого сообщения
   *
   * @param namespace - путь к переведённой строке в словаре
   * @param dictKey - ключ словаря. Лучше использовать исходный текст локали по умолчанию
   */
  private static _t(namespace: string, dictKey: string): string {
    const section = I18n.getNamespace(namespace);

    /**
     * Для сообщения консоли, чтобы проверить Раздел определён или нет
     * if (section === undefined) {
     *  _.logLabeled('I18n: раздел %o не найден в текущем словаре', 'log', пространства имён);
     * }
     */

    if (!section || !section[dictKey]) {
      return dictKey;
    }

    return section[dictKey] as string;
  }

  /**
   * Найти раздел сообщений по пути к пространству имён
   *
   * @param namespace - путь к разделу
   */
  private static getNamespace(namespace: string): Dictionary {
    const parts = namespace.split('.');

    return parts.reduce((section, part) => {
      if (!section || !Object.keys(section).length) {
        return {};
      }

      return section[part];
    }, I18n.currentDictionary);
  }
}
