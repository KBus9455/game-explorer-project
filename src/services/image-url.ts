import placeholder from "../assets/photoplaceholder.png";

const cropImgUrl = (url: string) => {
  if (!url) return placeholder;
  const index = url.indexOf("media/") + "media/".length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};
export default cropImgUrl;
