export function createElement(elementName, elementAttributes) {
  const element = document.createElement(elementName);
  Object.keys(elementAttributes).forEach(elementAttributeKey => {
    element[elementAttributeKey] = elementAttributes[elementAttributeKey];
  });
  return element;
}
