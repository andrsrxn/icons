import type { Icon } from './types'

export const IconFaceAngry: Icon = ({
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
      data-slot='icon-ui-face-angry'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.25'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.6 11.33a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16 11.33a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.71 16.55A5.2 5.2 0 0 0 12 15.26a5.6 5.6 0 0 0-3.71 1.29' stroke='currentColor' />
      <path d='m14.01 7.94 2.39-.64' stroke='currentColor' />
      <path d='M9.98 7.94 7.6 7.3' stroke='currentColor' />
    </svg>
  )
}
