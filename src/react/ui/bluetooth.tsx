import type { Icon } from './types'

export const IconBluetooth: Icon = ({
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
      data-slot='bluetooth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m16.86 17.54-3.23 2.6a1 1 0 0 1-1.63-.78V4.55a1 1 0 0 1 1.61-.8l3.23 2.5a1 1 0 0 1 .04 1.55L12 11.98 16.87 16a1 1 0 0 1-.01 1.55'
        fill='currentColor'
      />
      <path
        d='m5.77 7.21 6.28 4.8m0 0 4.12 3.15c.95.72 1.42 1.09 1.42 1.58s-.47.86-1.41 1.59l-.9.7c-1.41 1.1-2.11 1.64-2.67 1.36s-.56-1.16-.56-2.94zm-6.28 4.78 6.28-4.8m0 0 4.12-3.15c.95-.72 1.42-1.09 1.42-1.58s-.47-.86-1.41-1.59l-.9-.7c-1.41-1.1-2.11-1.64-2.67-1.36s-.56 1.16-.56 2.94z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
