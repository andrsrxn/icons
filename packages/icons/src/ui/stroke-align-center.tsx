import type { Icon } from './types'

export const IconStrokeAlignCenter: Icon = ({
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
      data-slot='icon-ui-stroke-align-center'
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
        d='M15.4 2.64c2.77 0 4.16 0 5.03.86.88.85.9 2.23.97 5l.31 12.86H11.7c-.9 0-1.34 0-1.63-.28-.29-.27-.31-.71-.37-1.6L9.43 15c-.05-.83-.07-1.25-.33-1.51-.27-.27-.68-.3-1.5-.37l-3.47-.27c-.87-.07-1.3-.1-1.57-.39s-.27-.72-.27-1.6V4.64c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm.02 8.13c-1.19 0-2.92-1.2-2.92-2.4s1.73-2.38 2.92-2.38c1.2 0 2.53 1.2 2.03 3.08-.22.82-1.42 1.7-2.03 1.7'
        fill='currentColor'
      />
      <path d='M2.29 7.93h10.28' stroke='currentColor' />
      <path d='M15.27 21.36V10.9' stroke='currentColor' />
      <path
        d='M17.54 8.42a2.5 2.5 0 0 1-2.48 2.48 2.48 2.48 0 1 1 2.48-2.48'
        stroke='currentColor'
      />
      <path
        d='M21.53 21.36V8.64c0-2.82 0-4.24-.88-5.12-.87-.88-2.29-.88-5.12-.88H2.3'
        stroke='currentColor'
      />
      <path
        d='M9.89 21.36v-4.77c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59h-3.6'
        stroke='currentColor'
      />
    </svg>
  )
}
