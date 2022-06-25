import JsPdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
const A4Width = 592.28;
const A4Height = 841.89;
import domtoimage from 'dom-to-image-more';

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
// export function toPrintPdf(resumeName?: string) {
//   let name = resumeName || '未命名文件';
//   const dom: HTMLElement | any = document.querySelector('#pdf');
//   if (dom) {
//     html2canvas(dom, {
//       allowTaint: true,
//     }).then((canvas) => {
//       let contentWidth = canvas.width;
//       let contentHeight = canvas.height;
//        一页pdf显示html页面生成的canvas高度，等比缩放
//       let pageHeight = (contentWidth / A4Width) * A4Height;
//       let leftHeight = contentHeight;
//        页面偏移
//       let position = 0;
//       let imgWidth = A4Width;
//       let imgHeight = (A4Width / contentWidth) * contentHeight;
//       let pageData = canvas.toDataURL('image/jpeg', 1.0);
//        这里的第一个参数表示方向，这里一定要选择 portrait
//        具体可看文档 https:artskydj.github.io/jsPDF/docs/jsPDF.html
//       let PDF = new JsPdf('portrait', 'pt', 'a4');
//       if (leftHeight < pageHeight) {
//         PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//       } else {
//         while (leftHeight > 0) {
//           PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
//           leftHeight -= pageHeight;
//           position -= A4Height;
//           if (leftHeight > 0) {
//             PDF.addPage();
//           }
//         }
//       }
//       PDF.save(name + '.pdf');
//     });
//   }
// }

export const htmlToPdf = (id: string, title: string) => {
  const element = document.getElementById(`${id}`);
  const opts = {
    scale: 12, // 缩放比例，提高生成图片清晰度
    useCORS: true, // 允许加载跨域的图片
    allowTaint: false, // 允许图片跨域，和 useCORS 二者不可共同使用
    tainttest: true, // 检测每张图片已经加载完成
    logging: true, // 日志开关，发布的时候记得改成 false
  };
  element!.style.overflow = 'visible';
  html2canvas(element!, opts)
    .then((canvas) => {
      console.log(canvas);
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度;
      const pageHeight = (contentWidth / 592.28) * 841.89;
      // 未生成pdf的html页面高度
      let leftHeight = contentHeight;
      // 页面偏移
      let position = 0;
      // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      const imgWidth = 595.28;
      const imgHeight = (592.28 / contentWidth) * contentHeight;
      const pageData = canvas.toDataURL('image/jpeg', 1.0);
      console.log(pageData);
      // a4纸纵向，一般默认使用；new JsPDF('landscape'); 横向页面
      const PDF = new jsPDF('', 'pt', 'a4');

      console.log(pageHeight, leftHeight);
      // 当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        // addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        // 超过一页时，分页打印（每页高度841.89）
        console.log(leftHeight);
        console.log(1234);
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          console.log(position);
          if (leftHeight > 0) {
            PDF.addPage();
          }
        }
      }
      PDF.save(title + '.pdf');
      element!.style.overflow = 'auto';
    })
    .catch((error) => {
      console.log('打印失败', error);
    });
};

// export const downloadPDF = async () => {
//   var element = window.document.querySelector('#pdf');
//   console.log(element);
//   if (!element) return;

//   const resp = await domtoimage.toCanvas(element);
//   let contentWidth = element.clientWidth;
//   let contentHeight = element.clientHeight;

//   let pageHeight = (contentWidth / 592.28) * 841.89;
//   let leftHeight = contentHeight;
//   let position = 0;
//   let imgWidth = 595.28;
//   let imgHeight = (592.28 / contentWidth) * contentHeight;
//   let pdf = new jsPDF('p', 'pt', 'a4');

//   if (leftHeight < pageHeight) {
//     pdf.addImage(resp, 'JPEG', 0, 0, imgWidth, imgHeight);
//   } else {
//     while (leftHeight > 0) {
//       pdf.addImage(resp, 'JPEG', 0, position, imgWidth, imgHeight);
//       leftHeight -= pageHeight;
//       position -= 841.89;
//       if (leftHeight > 0) {
//         pdf.addPage();
//       }
//     }
//   }
//   pdf.save('content.pdf');
// };

// export function createPDF(name: string) {
//   let demo = document.getElementById('pdf')!;
//   demo.style.overflow = 'visible';
//   html2canvas(demo, {
//     allowTaint: true, //允许跨域
//     height: document.getElementById('pdf')!.scrollHeight, //
//     width: document.getElementById('pdf')!.scrollWidth, //为了使横向滚动条的内容全部展示，这里必须指定
//     // @ts-ignore
//     background: '#FFFFFF', //如果指定的div没有设置背景色会默认成黑色
//     onrendered: function (canvas: any) {
//       var contentWidth = canvas.width;
//       var contentHeight = canvas.height;

//       //一页pdf显示html页面生成的canvas高度;
//       var pageHeight = (contentWidth / 595.28) * 841.89;
//       //未生成pdf的html页面高度
//       var leftHeight = contentHeight;
//       //pdf页面偏移
//       var position = 0;
//       //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
//       var imgWidth = 555.28;
//       var imgHeight = (555.28 / contentWidth) * contentHeight;

//       var pageData = canvas.toDataURL('image/jpeg', 1.0);

//       var pdf = new jsPDF('', 'pt', 'a4');
//       //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
//       //当内容未超过pdf一页显示的范围，无需分页
//       if (leftHeight < pageHeight) {
//         pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight);
//       } else {
//         while (leftHeight > 0) {
//           pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight);
//           leftHeight -= pageHeight;
//           position -= 841.89;
//           //避免添加空白页
//           if (leftHeight > 0) {
//             pdf.addPage();
//           }
//         }
//       }

//       pdf.save(name + '.pdf');
//     },
//   });
//   demo.style.overflow = 'auto';
// }
