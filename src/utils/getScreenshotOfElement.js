import { toPng } from 'html-to-image';

const getScreenshotOfElement = (element) => {
  toPng(element, { canvasWidth: 1920, canvasHeight: 1080 })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getScreenshotOfElement;
