import type { Icon } from './types'

export const IconFaceDispleased: Icon = ({
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
      data-slot='icon-ui-face-displeased'
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
      <path d='M15.71 16.02H8.3' stroke='currentColor' />
      <path d='M6.65 8.71h2.63' stroke='currentColor' />
      <path d='M13.84 8.71h2.69' stroke='currentColor' />
      <path
        d='M10.32 9.53a.82.82 0 1 1-1.65 0 .82.82 0 0 1 1.65 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.35 9.53a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
