import type { Icon } from './types'

export const IconBrowsers: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-browsers'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.71' y='7.6' width='14.51' height='3.52' rx='1' fill='currentColor' />
      <rect opacity='.2' x='6.69' y='4.7' width='14.51' height='3.52' rx='1' fill='currentColor' />
      <rect
        x='2.71'
        y='7.6'
        width='14.51'
        height='11.65'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.43 16.35c1.67 0 2.5 0 3.06-.47l.25-.25c.47-.56.47-1.39.47-3.06V8.7c0-1.89 0-2.83-.6-3.41-.58-.6-1.52-.6-3.4-.6H9.35c-.61 0-.92 0-1.17.08a2 2 0 0 0-1.42 1.42c-.07.25-.07.56-.07 1.17m10.53 3.76H2.71m18.49-2.9H17'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
