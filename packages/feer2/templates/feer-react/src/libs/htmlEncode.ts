export default function htmlEncode(iStr: string): string {
  let sStr = iStr;
  sStr = sStr.replace(/&/g, '&amp;');
  sStr = sStr.replace(/>/g, '&gt;');
  sStr = sStr.replace(/</g, '&lt;');
  sStr = sStr.replace(/"/g, '&quot;');
  sStr = sStr.replace(/'/g, '&#39;');
  return sStr;
}
