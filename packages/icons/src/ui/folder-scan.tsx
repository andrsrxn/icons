import type { Icon } from './types'

export const IconFolderScan: Icon = ({
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
      data-slot='icon-ui-folder-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M17.52 12.86c0 1.46 0 2.19-.37 2.7a2 2 0 0 1-.49.5c-.51.36-1.24.36-2.7.36h-3.48c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V9.57a2 2 0 0 1 2-1.99h.43c.58 0 .87 0 1.15.08l.26.1c.26.11.48.3.92.68s.67.57.93.69l.26.1c.27.07.57.07 1.15.07h.38c1.46 0 2.19 0 2.7.37a2 2 0 0 1 .5.48c.36.52.36 1.25.36 2.71'
        fill='currentColor'
      />
      <path
        d='M17.52 12.85c0 1.47 0 2.2-.37 2.72a2 2 0 0 1-.48.48c-.52.37-1.25.37-2.72.37h-3.47c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V9.03c0-.76.62-1.38 1.38-1.38h1.18c.41 0 .61 0 .8.04a2 2 0 0 1 .66.26c.17.1.32.24.62.52s.45.41.62.52a2 2 0 0 0 .65.26c.2.04.4.04.81.04h.75c1.47 0 2.2 0 2.72.36a2 2 0 0 1 .48.48c.37.52.37 1.25.37 2.72'
        stroke='currentColor'
      />
    </svg>
  )
}
