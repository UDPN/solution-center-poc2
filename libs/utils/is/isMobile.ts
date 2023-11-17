/**
 * @description: t('note_0004')
 * @type {Function}
 * @returns {Boolean}
 */
export const isMobile = (): boolean => {
  return !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
};
