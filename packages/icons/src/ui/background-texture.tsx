import type { Icon } from './types'

export const IconBackgroundTexture: Icon = ({
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
      data-slot='icon-ui-background-texture'
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
      <path d='M10.92 7.25h2.16' stroke='currentColor' />
      <path d='M10.92 16.75h2.16' stroke='currentColor' />
      <path d='M5.94 12H8.1' stroke='currentColor' />
      <path d='M15.9 12h2.16' stroke='currentColor' />
      <path
        d='M7.59 7.25a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.59 16.75a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.55 7.25a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.55 16.75a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.57 12a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
