import * as React from 'react';

type TButtonProps = {
  buttonText: string;
};

export function Button({ buttonText }: TButtonProps) {
  return <button>{buttonText}</button>;
}
