import * as React from 'react';
import 'twin.macro';

export function Button({ path, text, ...rest }) {
  return (
    <a
      href={path}
      tw="inline-block text-px14 lg:text-px16 bg-primary text-white font-bold font-kallisto rounded py-4 px-8"
      css={[{ backgroundColor: '#FC4803' }]}
      {...rest}
    >
      {text}
    </a>
  );
}

export default Button;
