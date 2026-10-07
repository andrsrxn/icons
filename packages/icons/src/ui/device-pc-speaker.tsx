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
        d='M1.66 10.14c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58H8c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v2.25c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H5.66c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41z'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='17.17'
        cy='14.12'
        r='2.34'
        transform='rotate(90 17.17 14.12)'
        fill='currentColor'
      />
      <path
        d='M12 6.14H5.66c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v2.25c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h6.1'
        stroke='currentColor'
      />
      <path d='M5.77 19.46h4.31' stroke='currentColor' />
      <path d='M7.93 19.46v-2.98' stroke='currentColor' />
      <rect x='12' y='4.54' width='10.34' height='14.92' rx='2' stroke='currentColor' />
      <circle cx='17.17' cy='14.12' r='2.17' stroke='currentColor' />
      <path
        d='M17.63 8.1a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
