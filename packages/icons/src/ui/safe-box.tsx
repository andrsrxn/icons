import type { Icon } from './types'

export const IconSafeBox: Icon = ({
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
      data-slot='icon-ui-safe-box'
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
        d='M15.58 21.58c2.83 0 4.25 0 5.12-.88.88-.87.88-2.29.88-5.12V8.42c0-2.83 0-4.25-.88-5.12-.87-.88-2.29-.88-5.12-.88H8.42c-2.83 0-4.25 0-5.12.88-.88.87-.88 2.29-.88 5.12v7.16c0 2.83 0 4.25.88 5.12.87.88 2.29.88 5.12.88zm-1.18-6.57a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path d='M5.98 8.91v6.21' stroke='currentColor' />
      <circle
        cx='14.4'
        cy='11.96'
        r='3.05'
        transform='rotate(90 14.4 11.96)'
        stroke='currentColor'
      />
      <path d='m16.76 9.97 1.73-1.73' stroke='currentColor' />
      <path d='m16.76 14.03 1.73 1.73' stroke='currentColor' />
      <path d='m11.99 9.97-1.72-1.72' stroke='currentColor' />
      <path d='m11.99 14.03-1.72 1.72' stroke='currentColor' />
    </svg>
  )
}
