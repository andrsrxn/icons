import type { Icon } from './types'

export const IconBookProhibit: Icon = ({
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
      data-slot='icon-ui-book-prohibit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.03 5.75c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h9.94c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v8.74c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H7.03c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41z'
        fill='currentColor'
      />
      <path
        d='M3.03 7.75c0-2.83 0-4.25.88-5.13.87-.87 2.29-.87 5.12-.87h5.94c2.83 0 4.25 0 5.12.87.88.88.88 2.3.88 5.13v4.74c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88H3.03z'
        stroke='currentColor'
      />
      <path
        d='M3.03 18.49c0 1.66 0 2.49.46 3.04l.26.26c.55.46 1.38.46 3.04.46h8.85c1.66 0 2.49 0 3.04-.46l.26-.26c.46-.55.46-1.38.46-3.04'
        stroke='currentColor'
      />
      <circle cx='12' cy='10.12' r='4.05' transform='rotate(90 12 10.12)' stroke='currentColor' />
      <path d='m9.19 7.3 5.62 5.63' stroke='currentColor' />
    </svg>
  )
}
