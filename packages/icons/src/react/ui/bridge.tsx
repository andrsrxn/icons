import type { Icon } from './types'

export const IconBridge: Icon = ({
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
      data-slot='icon-ui-bridge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g opacity='.2'>
        <path d='M8.77 15.38h-5.7V5.82L8.6 8.76z' fill='currentColor' />
        <path d='M8.77 15.38h-5.7V5.82L8.6 8.76z' fill='currentColor' />
      </g>
      <g opacity='.2'>
        <path d='M15.1 15.38h5.7V5.82l-5.52 2.94z' fill='currentColor' />
        <path d='M15.1 15.38h5.7V5.82l-5.52 2.94z' fill='currentColor' />
      </g>
      <path d='M3.2 19.21V4.31' stroke='currentColor' />
      <path d='M20.8 19.21V4.31' stroke='currentColor' />
      <path d='M8.7 15.23V8.9' stroke='currentColor' />
      <path d='M15.3 15.23V8.9' stroke='currentColor' />
      <path d='M22.44 15.37H1.56' stroke='currentColor' />
      <path
        d='M20.8 5.47A11.6 11.6 0 0 1 12 8.91c-3.69 0-6.08-.94-8.8-3.44'
        stroke='currentColor'
      />
      <path d='M3.2 5.74q-.82.77-1.64 1.27' stroke='currentColor' />
      <path d='M20.8 5.74q.82.77 1.64 1.27' stroke='currentColor' />
    </svg>
  )
}
