import type { Icon } from './types'

export const IconTreePalm: Icon = ({
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
      data-slot='icon-ui-tree-palm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.79 3.75c-2.12-.17-4.3.23-5.13 3.37-.14.5-.2.76-.05.96s.44.18 1 .16l8.05-.32c.73-.02 1.09-.04 1.22-.3.13-.27-.06-.55-.46-1.1a6 6 0 0 0-4.63-2.77'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.37 9.34c1.6-1.8 3.7-2.17 5.41-.34.3.32.45.48.42.7-.02.24-.22.38-.62.65l-5.6 3.87c-.59.4-.88.6-1.14.47s-.27-.46-.3-1.12c-.07-1.57.44-2.66 1.83-4.23'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9 12.03c.07-.48.1-.72.23-.9a1 1 0 0 1 .27-.27c.18-.12.42-.16.9-.24.67-.1 1.01-.16 1.28-.05a1 1 0 0 1 .39.3c.18.23.21.57.28 1.25l.36 3.48.03.4c0 .1 0 .2-.03.4l-.54 5.43H6.02l2.12-5.14c.08-.22.13-.32.16-.44l.09-.45z'
        fill='currentColor'
      />
      <path d='M6.02 21.48s1.63-1.95 2.71-5.3c1.08-3.33 1.1-5.4 1.1-5.4' stroke='currentColor' />
      <path d='M12.4 21.5s.72-1.93.72-5.06c0-3.45-.92-5.84-.92-5.84' stroke='currentColor' />
      <path
        d='M4.5 8.84c1.58-1.35 3.18-1.67 5.6-.15.64.4.96.6.94.9s-.4.47-1.14.78c-1.01.43-2.3 1.01-3.24 1.56-.96.55-2.11 1.38-3.04 2.08-.77.58-1.15.87-1.44.7-.28-.18-.22-.62-.08-1.52a6.5 6.5 0 0 1 2.4-4.35'
        stroke='currentColor'
      />
      <path
        d='M17.54 10.02c-1.25-1.41-2.85-2.2-5.44-1.23-.7.26-1.04.39-1.07.7s.3.53.97.97c.92.6 2.1 1.42 2.91 2.14.85.75 1.83 1.83 2.58 2.72.59.68.88 1.02 1.2.92.3-.1.34-.52.4-1.35a6.4 6.4 0 0 0-1.55-4.87'
        stroke='currentColor'
      />
      <path
        d='M7.54 2.96c2.52.42 4.3 2.37 3.68 5.09-.12.53-.18.8-.43.89-.25.1-.5-.1-1-.47-.92-.69-2.3-1.66-3.46-2.21a21 21 0 0 0-3.19-1.1c-1.01-.29-1.52-.43-1.55-.78s.41-.55 1.29-.94c1.32-.6 2.74-.8 4.66-.48'
        stroke='currentColor'
      />
      <path
        d='M16.9 4c-2.2-.2-4.91.8-5.37 3.5-.09.54-.13.8.08 1 .2.18.5.08 1.12-.1a22 22 0 0 1 4.21-.89c1.16-.1 2.67-.02 3.86.09.92.08 1.38.12 1.53-.19.16-.3-.13-.61-.7-1.23A7 7 0 0 0 16.92 4'
        stroke='currentColor'
      />
    </svg>
  )
}
