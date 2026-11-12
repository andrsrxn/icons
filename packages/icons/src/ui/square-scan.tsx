import type { Icon } from './types'

export const IconSquareScan: Icon = ({
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
      data-slot='icon-ui-square-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.98 21.42c1.84 0 2.76 0 3.47-.33a3.5 3.5 0 0 0 1.67-1.67c.33-.7.33-1.63.33-3.47'
        stroke='currentColor'
      />
      <path
        d='M16 2.61c1.82 0 2.72 0 3.43.32a3.5 3.5 0 0 1 1.7 1.7c.32.7.32 1.61.32 3.43'
        stroke='currentColor'
      />
      <path
        d='M8.03 21.42c-1.85 0-2.77 0-3.48-.33a3.5 3.5 0 0 1-1.66-1.66c-.34-.72-.34-1.64-.34-3.49'
        stroke='currentColor'
      />
      <path
        d='M8.03 2.61c-1.85 0-2.77 0-3.48.34A3.5 3.5 0 0 0 2.89 4.6c-.34.71-.34 1.63-.34 3.48'
        stroke='currentColor'
      />
      <path
        d='M6.68 13.33v-2.66c0-1.88 0-2.83.59-3.41s1.53-.59 3.41-.59h2.66c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v2.66c0 1.88 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59h-2.66c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.53-.59-3.41'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.41 2.56c3.3 0 4.95 0 5.98 1.03C21.4 4.6 21.4 6.26 21.4 9.56v4.88c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.54c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97V9.56c0-3.3 0-4.95 1.02-5.97C4.6 2.56 6.24 2.56 9.54 2.56zm2.12 4.58c.4.38.64.9.64 1.46v6.79a2.03 2.03 0 0 1-2.03 2.02h-5.7a2.67 2.67 0 0 1-2.68-2.67V9.21a2.6 2.6 0 0 1 2.6-2.6h5.81a2 2 0 0 1 1.36.53'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
