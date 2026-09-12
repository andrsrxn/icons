import type { Icon } from './types'

export const IconAlien: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-alien'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.35 10.3c0 4.85-4.18 11.73-9.35 11.73S2.65 15.15 2.65 10.3 6.83 1.52 12 1.52s9.35 3.93 9.35 8.78M10.25 12c-.28-.74-.8-1.74-1.64-2.18s-1.82-.22-2.46.02c-.33.12-.5.19-.58.42-.09.23-.02.42.12.78.28.74.8 1.74 1.64 2.18s1.82.22 2.46-.02c.33-.13.5-.19.58-.42.09-.24.02-.42-.12-.79m5.22-2.18c-.84.44-1.36 1.44-1.64 2.17-.14.37-.2.55-.12.79s.25.3.58.42c.65.24 1.62.46 2.46.02.85-.44 1.36-1.44 1.64-2.18.14-.36.21-.55.12-.78s-.25-.3-.57-.42c-.65-.24-1.63-.46-2.47-.02'
        fill='currentColor'
      />
      <path
        d='M21.35 11.07c0 6.68-7.36 11.17-9.3 11.17s-9.32-4.4-9.32-11.17a9.3 9.3 0 0 1 9.31-9.26 9.3 9.3 0 0 1 9.31 9.26'
        stroke='currentColor'
      />
      <path d='M13.93 17.46s-.74.58-1.89.58c-1.14 0-1.89-.58-1.89-.58' stroke='currentColor' />
      <path
        d='M8.61 9.82c.9.47 1.43 1.58 1.7 2.32.1.3.16.46.09.65s-.2.25-.48.36c-.64.26-1.7.54-2.6.07-.89-.47-1.42-1.58-1.68-2.32-.11-.31-.17-.47-.1-.66.07-.18.2-.24.48-.35.64-.26 1.7-.54 2.6-.07'
        stroke='currentColor'
      />
      <path
        d='M15.47 9.82c-.9.47-1.43 1.58-1.69 2.32-.11.3-.17.46-.1.65s.21.25.48.36c.65.26 1.7.54 2.6.07s1.42-1.58 1.68-2.32c.11-.31.17-.47.1-.66-.07-.18-.2-.24-.48-.35-.64-.26-1.7-.54-2.6-.07'
        stroke='currentColor'
      />
    </svg>
  )
}
