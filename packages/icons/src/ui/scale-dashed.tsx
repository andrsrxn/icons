import type { Icon } from './types'

export const IconScaleDashed: Icon = ({
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
      data-slot='icon-ui-scale-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='8.16'
        height='8.16'
        rx='2'
        transform='matrix(0 -1 -1 0 10.96 21.14)'
        fill='currentColor'
      />
      <rect
        width='8.16'
        height='8.16'
        rx='2'
        transform='matrix(0 -1 -1 0 10.96 21.14)'
        stroke='currentColor'
      />
      <path d='m10.6 13.56 4.37-4.36' stroke='currentColor' />
      <path
        d='M11.5 8.42h1.25c1.42 0 2.12 0 2.56.43.44.44.44 1.15.44 2.56v1.25'
        stroke='currentColor'
      />
      <path d='M21.3 5.98V5.9h0l-.01-.45a3 3 0 0 0-2.8-2.8h-.45' stroke='currentColor' />
      <path d='M21.3 17.93V18h0l-.01.45a3 3 0 0 1-2.8 2.8h-.45' stroke='currentColor' />
      <path d='M2.71 5.98V5.9h0v-.45a3 3 0 0 1 2.8-2.8h.45' stroke='currentColor' />
      <path d='M13.82 2.72h-3.57' stroke='currentColor' />
      <path d='M14.52 21.2h-1.05' stroke='currentColor' />
      <path d='M2.81 9.48v1.23' stroke='currentColor' />
      <path d='M21.29 10.17v3.57' stroke='currentColor' />
    </svg>
  )
}
