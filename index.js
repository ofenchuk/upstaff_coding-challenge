const styledDiv = document.createElement('div');

styledDiv.textContent = 'Random text that is centered both horizontally and vertically';

styledDiv.className = 'product-item';

styledDiv.style.cssText = box-shadow: 1px 1px 5px 5px #f1f1f1; border-radius: 10px; text-align: center; padding: .5rem; align-items: center;  justify-content: center; ;

const products = document.querySelectorAll('.product-item'); const insertAfterElement = products[3];

if (insertAfterElement) { insertAfterElement.parentNode.insertBefore(styledDiv, insertAfterElement.nextSibling); }

function updateDivWidth() { const columnCount = window.innerWidth >= 1200 ? 4 : window.innerWidth >= 768 ? 3 : 1; const divWidth = (columnCount === 3 ? '60.66%' : columnCount === 4 ? '50%' : '100%'); styledDiv.style.width = divWidth; }

updateDivWidth(); window.addEventListener('resize', updateDivWidth);
