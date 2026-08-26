import type { Icon } from './types'

export const IconPencilPaper: Icon = ({
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
      data-slot='ui-icon-pencil-paper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.02 14.98v-3.73c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h6.22l-8.11 8.26v3.21h2.93l8.69-8.12v6.38c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.02c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.06'
        height='4.55'
        rx='1'
        transform='scale(1 -1)rotate(45 19.53 18.67)'
        fill='currentColor'
      />
      <path
        d='M18.75 13.02v2.23c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-4c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-4c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h2.34'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.02 17.17c.4 0 .61 0 .8-.08.18-.07.32-.22.61-.5L20.5 6.5c.67-.66 1-1 1-1.41 0-.42-.33-.75-1-1.42l-.23-.22c-.66-.67-1-1-1.41-1s-.75.33-1.41 1L7.38 13.53c-.3.29-.44.43-.51.61-.08.19-.08.4-.08.8v.23c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3zm9.94-9.45L16.55 5.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
