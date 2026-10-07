import type { Icon } from './types'

export const IconFaceAngel: Icon = ({
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
      data-slot='icon-ui-face-angel'
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
        d='M2.92 13.18a9.08 9.08 0 1 0 12.99-8.2l-7.99.08a9.1 9.1 0 0 0-5 8.12'
        fill='currentColor'
      />
      <path d='M4.95 7.46a9.08 9.08 0 1 0 14.1 0' stroke='currentColor' />
      <ellipse
        cx='12'
        cy='3.45'
        rx='1.75'
        ry='7.31'
        transform='rotate(90 12 3.45)'
        stroke='currentColor'
      />
      <path
        d='M9.87 11a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.55 11a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.29 16.17A4.6 4.6 0 0 1 12 17.3c-1.46 0-2.53-.5-3.29-1.14'
        stroke='currentColor'
      />
    </svg>
  )
}
