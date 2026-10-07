import type { Icon } from './types'

export const IconRotate: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-rotate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.11 16.93V8.88c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58H17.2c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v8.05c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H7.1c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42'
        fill='currentColor'
      />
      <path
        d='M21.2 13.72v1.49c0 2.83 0 4.24-.88 5.12s-2.3.88-5.13.88H8.8c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-4.77c0-2.4 0-3.6.65-4.43a3 3 0 0 1 .48-.48c.82-.65 2.03-.65 4.44-.65'
        stroke='currentColor'
      />
      <path
        d='M13.1 4.88h3.35c1.63 0 2.44 0 3.06.3a3 3 0 0 1 1.38 1.38c.3.62.3 1.43.3 3.06'
        stroke='currentColor'
      />
      <path
        d='M15.59 1.61 13.63 3.4c-.76.69-1.14 1.03-1.14 1.47 0 .45.38.8 1.13 1.48l1.97 1.8'
        stroke='currentColor'
      />
    </svg>
  )
}
