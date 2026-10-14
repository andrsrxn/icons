import type { Icon } from './types'

export const IconWeightScale: Icon = ({
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
      data-slot='icon-ui-weight-scale'
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
        d='M15.58 2.42c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v7.16c0 2.83 0 4.25-.88 5.12-.87.88-2.29.88-5.12.88H8.42c-2.83 0-4.25 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.42c0-2.83 0-4.25.88-5.12.87-.88 2.29-.88 5.12-.88zm2.58 4.3L16 12.25l-3.96-.7-4.04.7-2.24-5.53 6.28-1.24z'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path
        d='M14.53 11.9c.63.16.95.25 1.1.18.17-.07.3-.3.55-.78l1.4-2.57c.38-.72.57-1.07.42-1.5s-.48-.55-1.13-.81A13 13 0 0 0 12 5.54c-2.15 0-3.78.45-4.86.88-.66.26-.99.4-1.14.81-.15.43.05.78.44 1.5l1.4 2.57c.25.47.38.7.54.78.16.06.48-.02 1.12-.2a10 10 0 0 1 2.5-.28c1.13 0 1.96.14 2.53.3'
        stroke='currentColor'
      />
      <path d='M15.46 17.84H8.54' stroke='currentColor' />
      <path d='m11.37 11.59-.42-3.1' stroke='currentColor' />
    </svg>
  )
}
