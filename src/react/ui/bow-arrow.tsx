import type { Icon } from './types'

export const IconBowArrow: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='bow-arrow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.67 14.47h3.54l.27 3.61-2.75 2.27-.52-3.02-2.88-.44z'
        fill='currentColor'
      />
      <path
        d='M16.1 3.58h.31c1.9 0 2.84 0 3.42.58.59.59.59 1.53.59 3.42v.33'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9.32 14.68 19.38 4.62M9.32 14.68h-3.4c-.21 0-.31 0-.4.04-.1.03-.17.1-.31.25l-.9.89c-.72.72-1.08 1.09-.95 1.4.12.3.64.3 1.67.3h.23c.47 0 .7 0 .85.15s.15.38.15.86v.3c0 .94 0 1.4.29 1.54.3.14.65-.17 1.36-.78L9 18.7c.18-.15.27-.23.31-.33.05-.1.05-.21.05-.45z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.9 18.09c-.23.99-.35 1.49-.68 1.54s-.62-.42-1.18-1.36a31 31 0 0 0-4.53-5.88A30 30 0 0 0 5.8 7.98c-.97-.58-1.46-.86-1.4-1.2.05-.33.56-.45 1.59-.69 3.53-.82 7.1-.53 9.78 2.14s2.94 6.39 2.13 9.86Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
