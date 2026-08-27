import type { Icon } from './types'

export const IconFolderPin: Icon = ({
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
      data-slot='ui-icon-folder-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M18.57 12.81c-.8.2-1.32.93-1.25 1.74l.02.22q.03.35-.07.7l-1.16 3.98H8.7c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12V7.27a3 3 0 0 1 2.71-2.7c.14-.02.31-.02.65-.02h.75c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.05.04c.83.7 1.24 1.06 1.75 1.25.5.18 1.04.18 2.14.18h.7c2.8 0 4.2 0 5.07.86l.03.04c.86.87.86 2.27.86 5.07l-1.87-.58q-.43-.13-.86-.03'
        fill='currentColor'
      />
      <path
        d='M21.3 10.78v-.64a3 3 0 0 0-2.71-2.7c-.14-.02-.31-.02-.65-.02h-3.92c-.83 0-1.25 0-1.64-.1a3 3 0 0 1-.59-.24 6 6 0 0 1-1.27-1.04c-.61-.56-.92-.85-1.28-1.03a3 3 0 0 0-.59-.24c-.39-.1-.8-.1-1.64-.1H5.02A2.33 2.33 0 0 0 2.7 6.99v6.46c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h4.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.46 19.82c-1.42 0-2.13 0-2.43-.46-.29-.47.01-1.1.62-2.39l.67-1.42c.15-.3.1-.67-.12-.93a.86.86 0 0 1 .65-1.43h1.91a.9.9 0 0 1 .72 1.44.9.9 0 0 0-.1.9l.64 1.5c.55 1.26.82 1.9.52 2.34-.3.45-.98.45-2.35.45zm.34 1.76v-1.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
