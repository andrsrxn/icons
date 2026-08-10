import type { Icon } from './types'

export const IconSplit: Icon = ({
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
      data-slot='split'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m3.49 18.34.16.17c1.34 1.33 2 2 2.83 2m3-2.17-.17.17c-1.33 1.33-2 2-2.83 2m0 0v-4.1c0-.87 0-1.3.17-1.69s.49-.68 1.13-1.26L12 9.59m2.49 8.75.17.17c1.33 1.33 2.06 2 2.89 2 .82 0 1.43-.67 2.77-2l.16-.17m-2.93 2.17v-4.1c0-.87 0-1.3-.18-1.69s-.49-.68-1.13-1.26L12 9.59m0 0v-6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
