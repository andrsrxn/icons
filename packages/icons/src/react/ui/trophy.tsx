import type { Icon } from './types'

export const IconTrophy: Icon = ({
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
      data-slot='ui-icon-trophy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.77 11.99c0 1.96 2.74 3.46 4.26 4.14.62.28 1.32.28 1.94 0 1.52-.68 4.26-2.18 4.26-4.14v-7.3a2 2 0 0 0-2-2H8.77a2 2 0 0 0-2 2z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M8.66 19.02c0-.77 1.97-1.97 2.89-2.48a.9.9 0 0 1 .9 0c.92.51 2.9 1.71 2.9 2.48v1.38a1 1 0 0 1-1 1h-4.7a1 1 0 0 1-1-1z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.77 11.99c0 1.6 1.81 2.89 3.3 3.68.79.42 1.18.63 1.93.63s1.14-.21 1.92-.63c1.5-.8 3.31-2.09 3.31-3.68v-5.3c0-1.9 0-2.83-.58-3.42-.59-.59-1.53-.59-3.42-.59h-2.46c-1.89 0-2.83 0-3.42.59s-.58 1.53-.58 3.41zm1.89 7.03c0-.66 1.45-1.63 2.44-2.22.42-.25.63-.37.9-.37s.48.12.9.37c1 .59 2.44 1.56 2.44 2.22v.38c0 .94 0 1.41-.29 1.7-.3.3-.76.3-1.7.3h-2.7c-.94 0-1.4 0-1.7-.3-.3-.29-.3-.76-.3-1.7zm8.82-6.55.9-.43a6 6 0 0 0 1.24-.67 3 3 0 0 0 1.08-1.7c.07-.33.07-.69.07-1.4 0-.73 0-1.1-.1-1.39a2 2 0 0 0-1.3-1.3c-.29-.1-.65-.1-1.38-.1h-.5M6.52 12.4l-.92-.43c-.62-.3-.94-.44-1.19-.63A3 3 0 0 1 3.3 9.58c-.07-.31-.07-.66-.07-1.34 0-.7 0-1.05.08-1.33a2 2 0 0 1 1.34-1.34c.28-.08.63-.08 1.33-.08h.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
