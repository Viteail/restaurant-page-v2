(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{M:()=>r});const t=()=>{const e=document.createElement("button");return e.classList.add("home-btn","active"),e.textContent="Home",e},n=()=>{const e=document.createElement("button");return e.classList.add("menu-btn"),e.textContent="Menu",e},a=()=>{const e=document.createElement("button");return e.classList.add("contact-btn"),e.textContent="Contact",e},d=()=>{const e=document.createElement("div");return e.classList.add("page-content"),r=e,e},c=e=>{const t=document.createElement("img");return t.classList.add("food-img"),t.src=`images/pizza${e}.jpg`,t};let r;const o=document.querySelector("#content");(e=>{const d=document.createElement("div");d.classList.add("header"),e.appendChild(d),d.appendChild((()=>{const e=document.createElement("div");return e.classList.add("title-container"),e.textContent="Pizzeria Bella",e})()),d.appendChild((()=>{const e=document.createElement("div");return e.classList.add("nav-wrapper"),e.appendChild(t()),e.appendChild(n()),e.appendChild(a()),e})())})(o),(e=>{const t=document.createElement("div");t.classList.add("page"),e.appendChild(t),t.appendChild((()=>{const e=document.createElement("div");return e.classList.add("page-wrapper"),e.appendChild(d()),e})())})(o),(e=>{const t=document.createElement("div");t.classList.add("menu-wrapper"),e.appendChild(t),(()=>{let e=[];for(let t=0;t<6;t++){const t=document.createElement("div");t.classList.add("card"),e.push(t)}return e})().forEach(((e,n)=>{t.appendChild(e),e.appendChild((e=>{const t=document.createElement("div");return t.classList.add("img-container"),t.appendChild(c(e)),t})(n)),e.appendChild((e=>{const t=document.createElement("div");return t.classList.add("food-name"),t.textContent=`${{0:"Pizza Margherita",1:"Pizza Alla Pala",2:"Pizza al Taglio",3:"Pizza Fritta",4:"Pizza Ortolana",5:"Pizza Quattro Formaggi"}[e]}`,t})(n))}))})(r)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLE9BRzVDLE9BRkFpQyxFQUFhaEMsVUFBVUMsSUFBSSxpQkFDM0IrQixFQUFhZixZQUFZUCxFQUFVQyxJQUM1QnFCLENBQVksRUFuQkFDLENBQW1CdEIsSUFDcENpQixFQUFLWCxZQTZCbUIsQ0FBQ04sSUFTM0IsTUFBTXVCLEVBQU9wQyxTQUFTQyxjQUFjLE9BSXBDLE9BSEFtQyxFQUFLbEMsVUFBVUMsSUFBSSxhQUVuQmlDLEVBQUtoQyxZQUFjLEdBWEYsQ0FDZixFQUFHLG1CQUNILEVBQUcsa0JBQ0gsRUFBRyxrQkFDSCxFQUFHLGVBQ0gsRUFBRyxpQkFDSCxFQUFHLDBCQUs0QlMsS0FDMUJ1QixDQUFJLEVBMUNRQyxDQUFvQnhCLEdBQUcsR0FDeEMsRUNHSnlCLENBQWUzQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS12Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyLy4vc3JjL3BhZ2VzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdjIvLi9zcmMvcGFnZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdjIvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdjIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgY29uc3QgY3JlYXRlSGVhZGVyID0gKGNvbnRlbnQpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgpKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcHBlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XHJcbiAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnUGl6emVyaWEgQmVsbGEnO1xyXG4gIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdldyYXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hdldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmF2LXdyYXBwZXInKTtcclxuICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVCdXR0b24oKSk7XHJcbiAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVNZW51QnV0dG9uKCkpO1xyXG4gIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEJ1dHRvbigpKTtcclxuICByZXR1cm4gbmF2V3JhcHBlcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWVCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZS1idG4nLCAnYWN0aXZlJyk7IC8vZm9yIG5vd1xyXG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgcmV0dXJuIGhvbWVCdG47XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZW51QnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJyk7XHJcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICByZXR1cm4gbWVudUJ0bjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idG4nKTtcclxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gIHJldHVybiBjb250YWN0QnRuO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwYWdlIH0gZnJvbSAnLi4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhZ2UgPSAoY29udGVudCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZVdyYXBwZXIoKSk7XHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQYWdlV3JhcHBlciA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utd3JhcHBlcicpO1xyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VDb250ZW50KCkpO1xyXG4gIHJldHVybiBwYWdlV3JhcHBlcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVBhZ2VDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XHJcbiAgcGFnZSA9IHBhZ2VDb250ZW50O1xyXG4gIHJldHVybiBwYWdlQ29udGVudDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKHBhZ2VDb250ZW50KSA9PiB7XHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtZW51LXdyYXBwZXInKTtcclxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZW51V3JhcHBlcik7XHJcbiAgY3JlYXRlQ2FyZHMoKS5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XHJcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nQ29udGFpbmVyKGkpKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZUNvbnRhaW5lcihpKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkcyA9ICgpID0+IHtcclxuICBsZXQgY2FyZHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjYXJkcy5wdXNoKGNhcmQpO1xyXG4gIH1cclxuICByZXR1cm4gY2FyZHM7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbWdDb250YWluZXIgPSAoaSkgPT4ge1xyXG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XHJcbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpKSk7XHJcbiAgcmV0dXJuIGltZ0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUltZyA9IChpKSA9PiB7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1nJyk7XHJcbiAgLy8gaW1nIHNyY1xyXG4gIGltZy5zcmMgPSBgaW1hZ2VzL3BpenphJHtpfS5qcGdgO1xyXG4gIHJldHVybiBpbWc7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVOYW1lQ29udGFpbmVyID0gKGkpID0+IHtcclxuICBsZXQgcGl6emFOYW1lcyA9IHtcclxuICAgIDA6ICdQaXp6YSBNYXJnaGVyaXRhJyxcclxuICAgIDE6ICdQaXp6YSBBbGxhIFBhbGEnLFxyXG4gICAgMjogJ1BpenphIGFsIFRhZ2xpbycsXHJcbiAgICAzOiAnUGl6emEgRnJpdHRhJyxcclxuICAgIDQ6ICdQaXp6YSBPcnRvbGFuYScsXHJcbiAgICA1OiAnUGl6emEgUXVhdHRybyBGb3JtYWdnaScsXHJcbiAgfTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kLW5hbWUnKTtcclxuICAvLyBuYW1lIHRleHRcclxuICBuYW1lLnRleHRDb250ZW50ID0gYCR7cGl6emFOYW1lc1tpXX1gO1xyXG4gIHJldHVybiBuYW1lO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL3BhZ2VzL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tICcuL3BhZ2VzL3BhZ2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZSc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9wYWdlcy9tZW51JztcclxuXHJcbmV4cG9ydCBsZXQgcGFnZTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5jcmVhdGVIZWFkZXIoY29udGVudCk7XHJcbmNyZWF0ZVBhZ2UoY29udGVudCk7XHJcbi8vIGNyZWF0ZUhvbWVQYWdlKHBhZ2UpO1xyXG5jcmVhdGVNZW51UGFnZShwYWdlKTtcclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY3JlYXRlSG9tZUJ1dHRvbiIsImhvbWVCdG4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZU1lbnVCdXR0b24iLCJtZW51QnRuIiwiY3JlYXRlQ29udGFjdEJ1dHRvbiIsImNvbnRhY3RCdG4iLCJjcmVhdGVQYWdlQ29udGVudCIsInBhZ2VDb250ZW50IiwicGFnZSIsImNyZWF0ZUltZyIsImkiLCJpbWciLCJzcmMiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsImFwcGVuZENoaWxkIiwidGl0bGVDb250YWluZXIiLCJjcmVhdGVUaXRsZSIsIm5hdldyYXBwZXIiLCJjcmVhdGVOYXZXcmFwcGVyIiwiY3JlYXRlSGVhZGVyIiwicGFnZVdyYXBwZXIiLCJjcmVhdGVQYWdlV3JhcHBlciIsImNyZWF0ZVBhZ2UiLCJtZW51V3JhcHBlciIsImNhcmRzIiwiY2FyZCIsInB1c2giLCJjcmVhdGVDYXJkcyIsImZvckVhY2giLCJpbWdDb250YWluZXIiLCJjcmVhdGVJbWdDb250YWluZXIiLCJuYW1lIiwiY3JlYXRlTmFtZUNvbnRhaW5lciIsImNyZWF0ZU1lbnVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==