import type { Icon } from './types'

export const IconFileSearch: Icon = ({
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
      data-slot='ui-icon-file-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.53 21.3c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.91.18s1.52 0 1.91.18a2 2 0 0 1 1 .99c.18.4.18.9.18 1.91v3.17l-1.24-.38a3 3 0 0 0-.6-.16 2 2 0 0 0-.94.09c-.14.05-.28.12-.56.27-.43.22-.64.33-.8.48a2 2 0 0 0-.68 1.17c-.04.22-.03.46 0 .94v.27c.03.52.05.78.12 1.02a2 2 0 0 0 .3.59c.14.2.34.37.74.7l1.51 1.25z'
        fill='currentColor'
      />
      <path
        d='M19.47 11.72v-1.11c0-1.25 0-1.87-.24-2.43s-.68-1-1.58-1.87l-.91-.89-.97-.97c-.87-.87-1.3-1.3-1.86-1.53-.55-.22-1.16-.22-2.38-.22h-1c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.6c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87H12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19m.63 10.99L21.58 22m-1.34-4.32a3 3 0 0 1-3.02 3.02 3.02 3.02 0 1 1 3.02-3.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
