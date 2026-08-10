import type { Icon } from './types'

export const IconTablets: Icon = ({
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
      data-slot='tablets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.26'
        height='3.37'
        rx='1'
        transform='matrix(.96098 -.27661 .27239 .96219 3.98 14.95)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.31'
        height='3.01'
        rx='1'
        transform='matrix(-.96098 -.27661 -.27239 .96219 20.08 10.1)'
        fill='currentColor'
      />
      <rect
        width='6.26'
        height='6.54'
        rx='3.13'
        transform='matrix(.96098 -.27661 .27239 .96219 3.15 12.02)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        width='6.31'
        height='6.4'
        rx='3.15'
        transform='matrix(-.96098 -.27661 -.27239 .96219 20.85 7.36)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M4.77 15.82a.75.75 0 0 1-.92-.52c-.1-.4.13-.82.53-.93l.2.73zm4.63-2.8a.75.75 0 1 1 .39 1.45l-.2-.73zM4.57 15.1l-.19-.73 5.02-1.35.2.72.19.73-5.02 1.35zm14.71-4.13c.4.1.81-.13.92-.53a.75.75 0 0 0-.53-.92l-.2.73zm-4.67-2.82a.75.75 0 0 0-.92.53c-.1.4.14.82.54.92l.19-.72zm4.87 2.1.19-.73-5.06-1.37-.2.73-.18.72 5.05 1.37z'
        fill='currentColor'
      />
    </svg>
  )
}
