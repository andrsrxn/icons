import type { Icon } from './types'

export const IconResend: Icon = ({
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
      data-slot='resend'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.2 17.33v-2.55a.5.5 0 0 0-.5-.5c-4.52.1-6.93 1.53-9.35 3.24-.38.27-.95-.09-.8-.53 2.48-5.77 6.59-7.83 10.16-8 .28-.01.5-.23.5-.51v-2.8c0-.82 1.13-1.24 1.66-.65l4.63 5.92a1 1 0 0 1 0 1.32l-4.63 5.72c-.53.59-1.66.17-1.66-.66'
        fill='currentColor'
      />
      <path
        d='M14.2 17.33v-2.55a.5.5 0 0 0-.5-.5c-4.52.1-6.93 1.53-9.35 3.24-.38.27-.95-.09-.8-.53 2.48-5.77 6.59-7.83 10.16-8 .28-.01.5-.23.5-.51v-2.8c0-.82 1.13-1.24 1.66-.65l4.63 5.92a1 1 0 0 1 0 1.32l-4.63 5.72c-.53.59-1.66.17-1.66-.66Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
