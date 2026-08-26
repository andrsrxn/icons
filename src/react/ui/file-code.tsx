import type { Icon } from './types'

export const IconFileCode: Icon = ({
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
      data-slot='ui-icon-file-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.53 21.3c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.91.18s1.52 0 1.91.18a2 2 0 0 1 1 .99c.18.4.18.9.18 1.91v5.41c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58z'
        fill='currentColor'
      />
      <path
        d='M19.47 12.36v-1.75c0-1.25 0-1.87-.24-2.43s-.68-1-1.58-1.87l-.91-.89-.97-.97c-.87-.87-1.3-1.3-1.86-1.53-.55-.22-1.16-.22-2.38-.22h-1c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.6c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h.53m8.17-5.73.36.35c1.38 1.35 2.07 2.02 2.07 2.86s-.69 1.51-2.06 2.86l-.37.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16 15.57-.36.35c-1.38 1.35-2.07 2.02-2.07 2.86s.69 1.51 2.06 2.86L16 22M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
