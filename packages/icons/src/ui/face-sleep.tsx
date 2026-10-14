import type { Icon } from './types'

export const IconFaceSleep: Icon = ({
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
      data-slot='icon-ui-face-sleep'
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
        d='M1.74 12a10.26 10.26 0 1 0 19.01-5.36l-3.11-.33 1.16-2A10.26 10.26 0 0 0 1.74 12'
        fill='currentColor'
      />
      <path
        d='M14.21 2.02A7 7 0 0 0 12 1.74 10.26 10.26 0 1 0 22.26 12c0-1.05-.1-1.64-.3-2.26'
        stroke='currentColor'
      />
      <path d='M6.03 9.78s.63.78 1.99.78 1.99-.78 1.99-.78' stroke='currentColor' />
      <path d='M14 9.78s.62.78 1.98.78 1.99-.78 1.99-.78' stroke='currentColor' />
      <path
        d='M20.85 6.46h-1.63c-.96 0-1.43 0-1.56-.3-.14-.29.18-.64.8-1.36l1.38-1.55c.63-.72.94-1.08.8-1.37s-.6-.3-1.55-.3h-1.54'
        stroke='currentColor'
      />
      <path
        d='M12.8 16.04a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
