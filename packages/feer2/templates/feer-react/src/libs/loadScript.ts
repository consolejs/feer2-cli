export default function loadScript(src: string, onload: () => void): void {
  const script = document.createElement('script');
  script.onload = () => {
    script.onload = null;
    onload();
  };
  script.src = src;
  document.head.appendChild(script);
}

/* Promise 版
export function loadScript(src: string): Promise<0 | 1> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.onload = () => {
      script.onload = null;
      resolve(0);
    };
    script.onerror = () => {
      script.onerror = null;
      resolve(1);
    };
    script.src = src;
    document.head.appendChild(script);
  });
}
 */
