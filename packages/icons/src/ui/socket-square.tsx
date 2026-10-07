import type { Icon } from './types'

export const IconSocketSquare: Icon = ({
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
      data-slot='icon-ui-socket-square'
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
        d='M15.58 2.42c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v7.16c0 2.83 0 4.25-.88 5.12-.87.88-2.29.88-5.12.88H8.42c-2.83 0-4.25 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.42c0-2.83 0-4.25.88-5.12.87-.88 2.29-.88 5.12-.88zM12 18.38a6.38 6.38 0 1 1 0-12.76 6.38 6.38 0 0 1 0 12.76'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='6.38' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M9.89 13.52v-3.04' stroke='currentColor' />
      <path d='M14.11 13.52v-3.04' stroke='currentColor' />
    </svg>
  )
}
