import type { Icon } from './types'

export const IconDevicePcPlay: Icon = ({
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
      data-slot='icon-ui-device-pc-play'
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
        d='M22.26 9.07c0-2.83 0-4.25-.88-5.13s-2.29-.87-5.12-.87H7.74c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v1.74c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h8.52c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13zM11.42 6.83a1.64 1.64 0 0 0-2.5 1.39v3.67a1.47 1.47 0 0 0 2.15 1.3l3.47-1.8a1.47 1.47 0 0 0 .1-2.56z'
        fill='currentColor'
      />
      <rect x='1.74' y='3.07' width='20.52' height='13.75' rx='3' stroke='currentColor' />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path
        d='M8.96 9.94c0-1.78 0-2.67.46-3.11q.28-.27.66-.37c.61-.17 1.37.3 2.9 1.22 1.41.87 2.12 1.3 2.27 1.9q.09.36 0 .72c-.15.6-.86 1.03-2.27 1.9-1.53.92-2.29 1.39-2.9 1.22a1.5 1.5 0 0 1-.66-.37c-.46-.44-.46-1.33-.46-3.11'
        stroke='currentColor'
      />
    </svg>
  )
}
