import type { Icon } from './types'

export const IconHandReceivingBox: Icon = ({
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
      data-slot='icon-ui-hand-receiving-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.19' y='13.68' width='4.01' height='7.91' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M17.97 10.4h-4.69a2 2 0 0 1-2-2V3.86c0-1.1.9-2 2-2h4.69a2 2 0 0 1 2 2V8.4a2 2 0 0 1-2 2'
        fill='currentColor'
      />
      <path
        d='M6.2 20.26s1.16.91 2.8 1.29c3.3.75 5 .54 7.92-.46 2.13-.73 3.81-2.69 4.66-3.86.4-.54.4-1.27.05-1.85a1.98 1.98 0 0 0-2.96-.44 27 27 0 0 1-3.72 2.7c-.77.44-2.39.35-3.92.35m3.92-.35c.64-1.57.45-2.82-.24-3.07a11 11 0 0 0-4.03-.62c-3.73 0-4.48.87-4.48.87'
        stroke='currentColor'
      />
      <rect x='2.19' y='13.68' width='4.01' height='7.91' rx='1' stroke='currentColor' />
      <rect x='11.28' y='1.75' width='8.65' height='8.65' rx='2' stroke='currentColor' />
      <path d='M15.6 1.75v3.74' stroke='currentColor' />
    </svg>
  )
}
