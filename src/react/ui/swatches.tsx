import type { Icon } from './types'

export const IconSwatches: Icon = ({
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
      data-slot='ui-icon-swatches'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.1 9.6c0-.41 0-.62.09-.8.07-.2.22-.34.51-.63l2.4-2.35c.66-.66 1-.99 1.4-.99.42 0 .75.34 1.41 1l2.27 2.27c.67.67 1 1 1 1.41 0 .42-.33.75-1 1.42l-4.66 4.65c-1.45 1.45-2.18 2.18-2.8 1.92-.61-.25-.61-1.28-.61-3.33z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.97 14.91c.3-.32.44-.49.63-.58s.4-.09.84-.1l3.7-.05c.95-.01 1.43-.02 1.72.28.3.29.3.77.3 1.72v3.17c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3h-6.45c-1.92 0-2.87 0-3.14-.6-.26-.59.37-1.3 1.64-2.73z'
        fill='currentColor'
      />
      <path
        d='M6.57 21.2a3.74 3.74 0 0 1-3.74-3.74V2.8q0-.02.02-.02h7.45l.02.02v14.66a3.74 3.74 0 0 1-3.75 3.75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m10.54 8.02 2.52-2.52c.66-.66 1-1 1.41-1 .42 0 .75.34 1.42 1l2.46 2.47c.67.66 1 1 1 1.41 0 .42-.33.75-1 1.42l-8.5 8.49'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.7 13.72h3.56c.94 0 1.41 0 1.7.3.3.28.3.76.3 1.7v3.49c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H6.75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.13 17.19a.56.56 0 1 1-1.13 0 .56.56 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
