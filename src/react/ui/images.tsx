import type { Icon } from './types'

export const IconImages: Icon = ({
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
      data-slot='ui-icon-images'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.52 13.46c0-2.6 0-3.9.76-4.76l.25-.26C4.38 7.7 5.7 7.7 8.3 7.7h4.58c1.55 0 2.32 0 2.93.28a3 3 0 0 1 1.45 1.46c.28.6.28 1.37.28 2.92 0 1.47 0 2.2-.24 2.49a1 1 0 0 1-1.03.3c-.36-.1-.76-.7-1.58-1.93l-.13-.2c-.43-.66-.65-.99-.93-1.1a1 1 0 0 0-.7-.03c-.29.1-.53.4-1.01 1.03l-1.68 2.17c-.53.7-.8 1.05-1.18 1.12l-.13.01c-.38.02-.72-.25-1.4-.8l-.16-.13c-.4-.33-.6-.49-.84-.54a1 1 0 0 0-.44 0c-.22.05-.43.22-.83.54-.94.77-1.4 1.15-1.8 1.12a1 1 0 0 1-.65-.31c-.28-.29-.28-.9-.28-2.1z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.3 6.74a2.74 2.74 0 0 1 2.74-2.57h6.44c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.8c0 .5 0 .74-.11.96s-.31.36-.72.65l-.22.16c-1.2.87-1.79 1.3-2.3 1.08-.53-.21-.63-.94-.85-2.4l-.54-3.6c-.12-.75-.17-1.12-.42-1.36s-.63-.27-1.38-.34l-4.4-.4H7.23a.9.9 0 0 1-.91-.98'
        fill='currentColor'
      />
      <rect
        x='2.52'
        y='7.69'
        width='15.01'
        height='12.05'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.47 7.63c0-.43 0-.64.02-.82a3 3 0 0 1 2.62-2.62c.18-.02.4-.02.82-.02h5.55c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.3c0 .7 0 1.04-.06 1.33a3 3 0 0 1-2.36 2.36c-.29.06-.64.06-1.33.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m17.21 17.55-2.3-4.08c-.74-1.3-1.1-1.96-1.68-1.98-.57 0-.96.63-1.76 1.91l-1.03 1.66c-.5.81-.76 1.22-1.13 1.32a1 1 0 0 1-.32.04c-.38-.02-.72-.36-1.4-1.03-.54-.54-.8-.81-1.13-.86h-.27c-.33.04-.6.3-1.16.84l-2.26 2.18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.1 10.82a.63.63 0 1 1-1.26 0 .63.63 0 0 1 1.26 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
