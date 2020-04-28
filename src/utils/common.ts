export function shorten(text: string, limit: number = 300) {
  const pars = text.split(/\.\s/g);
  let shorts = '';

  for (let i = 0; i < pars.length; i++) {
    const p = pars[i];
    const nextLen = shorts.length + pars[i].length;
    const isOver = nextLen >= limit;

    if (isOver) break;
    else shorts += `${p}. `;
  }

  return shorts;
}

export const trimFirstSpace = (keyword: string) => keyword.replace(/^\s/, '');
