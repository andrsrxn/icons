import type { Icon } from './types'

export const IconDevicePcSpeaker: Icon = ({
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
      data-slot='icon-ui-device-pc-speaker'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 10.5c0-1.88 0-2.82.58-3.4.59-.6 1.53-.6 3.42-.6h3.28c1.89 0 2.83 0 3.41.6.59.58.59 1.52.59 3.4v1.25c0 1.88 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H5.7c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41z'
        fill='currentColor'
      />
      <path
        d='M12.98 6.5H5.7c-1.89 0-2.83 0-3.42.6-.58.58-.58 1.52-.58 3.4v1.25c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h7.02'
        stroke='currentColor'
      />
      <path d='M6.16 18.52h4.86' stroke='currentColor' />
      <path d='M8.6 18.52v-2.69' stroke='currentColor' />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.3 9.28c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58h-1.32c-1.89 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v5.44c0 1.89 0 2.83.59 3.42.58.58 1.52.58 3.41.58h1.32c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42zm-2.33 4.64a2.4 2.4 0 0 1-2.33 2.44 2.4 2.4 0 0 1-2.33-2.44 2.4 2.4 0 0 1 2.33-2.45 2.4 2.4 0 0 1 2.33 2.45'
        fill='currentColor'
      />
      <rect x='12.98' y='5.28' width='9.32' height='13.45' rx='2' stroke='currentColor' />
      <circle cx='17.64' cy='13.92' r='1.96' stroke='currentColor' />
      <path
        d='M18.06 8.48a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
