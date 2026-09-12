import type { Icon } from './types'

export const IconFaceSmile: Icon = ({
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
      data-slot='icon-ui-face-smile'
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
        r='10.26'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.59 9.53a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16 9.53a.8.8 0 1 1-1.59 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.71 15.38A5.2 5.2 0 0 1 12 16.67a5.6 5.6 0 0 1-3.71-1.3' stroke='currentColor' />
    </svg>
  )
}
