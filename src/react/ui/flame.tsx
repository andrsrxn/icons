import type { Icon } from './types'

export const IconFlame: Icon = ({
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
      data-slot='flame'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.78 9.75a9.8 9.8 0 0 1-2.2-5.83c0-.33-.3-.54-.58-.35a7.5 7.5 0 0 0-2.24 2.88c-.87 1.9-.87 4.14-.8 5.16 0 .3-.23.57-.53.51-1.2-.26-1.7-1.33-2.05-1.97-.12-.24-.4-.26-.55-.03A7.2 7.2 0 0 0 6 14.64c.46 4.26 3.42 6.02 5.96 6.02 2.03 0 5.24-.66 5.93-4.66.32-1.92-.14-3.92-2.12-6.25'
        fill='currentColor'
      />
      <path
        d='M15.78 9.75a9.8 9.8 0 0 1-2.2-5.83c0-.33-.3-.54-.58-.35a7.5 7.5 0 0 0-2.24 2.88c-.87 1.9-.87 4.14-.8 5.16 0 .3-.23.57-.53.51-1.2-.26-1.7-1.33-2.05-1.97-.12-.24-.4-.26-.55-.03A7.2 7.2 0 0 0 6 14.64c.46 4.26 3.42 6.02 5.96 6.02 2.03 0 5.24-.66 5.93-4.66.32-1.92-.14-3.92-2.12-6.25'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
