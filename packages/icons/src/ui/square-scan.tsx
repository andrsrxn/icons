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
        d='M15.91 21.27c1.76 0 2.64 0 3.33-.3a3.5 3.5 0 0 0 1.75-1.76c.31-.68.31-1.56.31-3.33'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c1.72 0 2.59 0 3.26.3.8.35 1.44.99 1.8 1.79.3.67.3 1.54.3 3.27'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-1.77 0-2.65 0-3.34-.3a3.5 3.5 0 0 1-1.75-1.76c-.31-.68-.31-1.57-.31-3.33h0'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-1.77 0-2.65 0-3.34.3a3.5 3.5 0 0 0-1.75 1.76c-.31.69-.31 1.57-.31 3.34h0'
        stroke='currentColor'
      />
      <path
        d='M6.77 13.24v-2.48c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h2.48c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v2.48c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58h-2.48c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zm2.2 4.5c.4.38.62.9.62 1.44v6.68a2 2 0 0 1-2 2h-5.6a2.63 2.63 0 0 1-2.63-2.63V9.26A2.56 2.56 0 0 1 9.4 6.69h5.71q.77.02 1.33.53'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
