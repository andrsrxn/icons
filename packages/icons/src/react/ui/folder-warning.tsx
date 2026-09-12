import type { Icon } from './types'

export const IconFolderWarning: Icon = ({
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
      data-slot='icon-ui-folder-warning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.24 14.2c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.5c0-.65 0-.98.05-1.25a3 3 0 0 1 2.4-2.4c.27-.05.6-.05 1.25-.05H6.5c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.39.33c.83.71 1.25 1.06 1.75 1.25s1.05.18 2.14.18h1.56c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M22.24 14.2c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V6.5a2.56 2.56 0 0 1 2.56-2.56H6.5c1.04 0 1.55 0 2.03.16l.23.1c.46.2.84.55 1.6 1.25s1.14 1.06 1.6 1.26l.23.1c.47.16 1 .16 2.03.16h2.01c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        stroke='currentColor'
      />
      <path d='M12 13.85v-3.9' stroke='currentColor' />
      <path
        d='M12.42 17.08a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
