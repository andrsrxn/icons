import type { Icon } from './types'

export const IconBackgroundShades: Icon = ({
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
      data-slot='icon-ui-background-shades'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 2.92c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.16c0 1.88 0 2.82-.59 3.41-.58.59-1.52.59-3.4.59H6.74c-1.88 0-2.82 0-3.4-.59-.6-.59-.6-1.53-.6-3.41V8.92c0-2.82 0-4.24.89-5.12.88-.88 2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path
        d='M6.05 12.43a5.4 5.4 0 0 1 3.51-1.2c1.75 0 3.85 1.54 5.56 1.54s2.5-.83 2.83-1.29'
        stroke='currentColor'
      />
      <path
        d='M6.05 17.08a5.4 5.4 0 0 1 3.51-1.2c1.75 0 3.85 1.54 5.56 1.54s2.5-.83 2.83-1.29'
        stroke='currentColor'
      />
      <path
        d='M6.05 7.78a5.4 5.4 0 0 1 3.51-1.2c1.75 0 3.85 1.54 5.56 1.54s2.5-.83 2.83-1.29'
        stroke='currentColor'
      />
    </svg>
  )
}
