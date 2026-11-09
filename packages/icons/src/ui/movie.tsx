import type { Icon } from './types'

export const IconMovie: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-movie'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.67 16c0-2.2 0-3.3.55-4.09a3 3 0 0 1 .72-.72c.78-.55 1.88-.55 4.08-.55h7.96c2.2 0 3.3 0 4.08.55a3 3 0 0 1 .72.72c.55.78.55 1.88.55 4.08s0 3.3-.55 4.08a3 3 0 0 1-.72.72c-.78.55-1.88.55-4.08.55H8.02c-2.2 0-3.3 0-4.08-.55a3 3 0 0 1-.72-.72c-.55-.78-.55-1.88-.55-4.08'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.28 8.75c-.24-.92-.36-1.38-.16-1.74.21-.36.67-.48 1.6-.72l1.42-.37c1.49-.38 2.23-.58 2.64-.17.4.41.2 1.16-.2 2.64-.15.52-.22.77-.4.96-.17.18-.42.26-.93.42l-1.4.45c-.94.3-1.4.46-1.78.25-.38-.2-.5-.68-.76-1.63z'
        fill='currentColor'
      />
      <path
        d='M8.02 21.34h7.96c2.2 0 3.3 0 4.08-.55a3 3 0 0 0 .72-.72c.55-.78.55-1.88.55-4.08v0c0-2.2 0-3.3-.55-4.08a3 3 0 0 0-.72-.72c-.78-.55-1.88-.55-4.08-.55H8.02c-2.2 0-3.3 0-4.08.55a3 3 0 0 0-.72.72c-.55.78-.55 1.88-.55 4.08v0c0 2.2 0 3.3.55 4.08a3 3 0 0 0 .72.72c.78.55 1.88.55 4.08.55'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21.05 4.08c.24.92.37 1.38.16 1.74s-.67.48-1.6.72l-1.42.37c-1.49.39-2.23.58-2.63.17-.41-.41-.2-1.15.2-2.64.14-.51.21-.77.39-.95.17-.19.42-.27.93-.43l1.4-.45c.94-.3 1.4-.45 1.78-.25s.5.68.76 1.64z'
        fill='currentColor'
      />
      <path
        d='m5.63 10.4 13.86-3.7a4 4 0 0 0 1.1-.39c.36-.25.6-.66.64-1.1.02-.27-.06-.56-.22-1.15v0a4 4 0 0 0-.38-1.1 1.5 1.5 0 0 0-1.12-.64c-.25-.02-.55.06-1.14.21L4.51 6.25c-.59.16-.88.24-1.1.38-.36.26-.6.67-.64 1.12-.02.25.06.55.22 1.14v0c.16.59.24.88.38 1.1.26.36.67.6 1.12.64.25.02.55-.06 1.14-.22'
        stroke='currentColor'
      />
      <path d='M9.4 5.02 8.12 9.5' stroke='currentColor' />
      <path d='M15.89 3.38 14.6 7.85' stroke='currentColor' />
    </svg>
  )
}
