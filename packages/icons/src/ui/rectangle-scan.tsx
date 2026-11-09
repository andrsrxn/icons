import type { Icon } from './types'

export const IconRectangleScan: Icon = ({
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
      data-slot='icon-ui-rectangle-scan'
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
        d='M5.94 12.2v-.4c0-1.88 0-2.83.59-3.41s1.53-.59 3.41-.59h4.12c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v.4c0 1.88 0 2.83-.59 3.41s-1.53.59-3.41.59H9.94c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.53-.59-3.41'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 21.29c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97V9.7c0-3.3 0-4.95-1.02-5.97C19.2 2.7 17.56 2.7 14.26 2.7H9.7c-3.3 0-4.95 0-5.97 1.03C2.69 4.76 2.69 6.4 2.69 9.7v4.58c0 3.3 0 4.95 1.03 5.97 1.02 1.03 2.67 1.03 5.97 1.03zM6.84 15.5c.41.4.97.63 1.54.63h7.42a2.2 2.2 0 0 0 2.2-2.2v-3.55a2.76 2.76 0 0 0-2.77-2.75h-6.8a2.27 2.27 0 0 0-2.27 2.26v4c0 .61.24 1.2.68 1.61'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
