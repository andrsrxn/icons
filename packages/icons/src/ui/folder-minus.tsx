import type { Icon } from './types'

export const IconFolderMinus: Icon = ({
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
      data-slot='icon-ui-folder-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.2 14.17c0 2.83 0 4.25-.87 5.12-.88.88-2.3.88-5.12.88H7.79c-2.82 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V7.51c0-.63 0-.95.05-1.22a3 3 0 0 1 2.42-2.41c.26-.05.58-.05 1.22-.05h1.04c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.38.32c.83.7 1.25 1.06 1.75 1.25s1.04.18 2.14.18h1.53c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M22.2 14.17c0 2.83 0 4.25-.87 5.12-.88.88-2.3.88-5.12.88H7.79c-2.82 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V6.51a2.56 2.56 0 0 1 2.56-2.55h2.18c1.03 0 1.54 0 2.01.16l.25.1c.46.2.83.55 1.58 1.25s1.13 1.05 1.59 1.25l.24.1c.48.16 1 .16 2.02.16h1.99c2.82 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12z'
        stroke='currentColor'
      />
      <path d='M8.7 13.49h6.6' stroke='currentColor' />
    </svg>
  )
}
