import type { Icon } from './types'

export const IconLandscapeToPortrait: Icon = ({
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
      data-slot='landscape-to-portrait'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.75'
        y='11.22'
        width='16.51'
        height='9.04'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='3.75'
        y='12'
        width='16.51'
        height='8.26'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12 11.59V7.65c0-1.89 0-2.83-.59-3.41-.58-.6-1.52-.6-3.41-.6h-.25c-1.89 0-2.83 0-3.42.6-.58.58-.58 1.52-.58 3.4v6.68M15 6.1h1.58c1.61 0 2.42 0 2.92.54s.5 1.42.5 3.18M16.43 4c-.91.95-1.44 1.5-1.44 2.1 0 .59.53 1.14 1.44 2.09'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
