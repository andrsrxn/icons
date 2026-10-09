import type { Icon } from './types'

export const IconExplicitFilled: Icon = ({
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
      data-slot='icon-ui-explicit-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.58 2.42c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v7.16c0 2.83 0 4.25-.88 5.12-.87.88-2.29.88-5.12.88H8.42c-2.83 0-4.25 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.42c0-2.83 0-4.25.88-5.12.87-.88 2.29-.88 5.12-.88zm-.88 3.42a.75.75 0 0 1 0 1.5h-4.65v3.91h3.28a.75.75 0 0 1 0 1.5h-3.28v3.91h4.65a.75.75 0 0 1 0 1.5H9.3a.75.75 0 0 1-.75-.75V6.6a.75.75 0 0 1 .75-.75z'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
    </svg>
  )
}
