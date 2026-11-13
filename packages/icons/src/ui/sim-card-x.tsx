import type { Icon } from './types'

export const IconSimCardX: Icon = ({
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
      data-slot='icon-ui-sim-card-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.68 6.41c.54.57.82.86.96 1.22s.14.75.14 1.54v8.17c0 .8 0 1.21-.14 1.58-.15.36-.44.65-1 1.22l-.72.73c-.58.6-.87.9-1.24 1.05s-.79.15-1.61.15H8.36c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V5.94c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h4.08c.78 0 1.17 0 1.52.14.36.13.64.4 1.21.93l2.37 2.2zM7.65 14.36c0 2.06 0 3.1.63 3.74l.05.06c.65.62 1.68.62 3.74.62s3.09 0 3.74-.62l.05-.06c.63-.65.63-1.68.63-3.74s0-3.09-.63-3.74l-.05-.05c-.65-.63-1.68-.63-3.74-.63s-3.09 0-3.74.63l-.05.05c-.63.65-.63 1.68-.63 3.74'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M19.86 14.28v-3.3c0-1.61 0-2.42-.3-3.15-.3-.72-.86-1.3-1.98-2.45l-.59-.6-.81-.85a9 9 0 0 0-1.84-1.66 4 4 0 0 0-.75-.32c-.58-.18-1.2-.18-2.46-.18-2.8 0-4.2 0-5.2.67A4 4 0 0 0 4.8 3.56c-.67 1-.67 2.4-.67 5.2v5.56c0 3.77 0 5.65 1.17 6.82 1.17 1.18 3.06 1.18 6.83 1.18h.89'
        stroke='currentColor'
      />
      <path
        d='M13.54 18.78h-1.89c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42v-.84c0-1.88 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59h1.4c1.35 0 2.03 0 2.52.32a2 2 0 0 1 .6.6c.32.5.32 1.17.32 2.53'
        stroke='currentColor'
      />
      <path d='M10.5 18.16v-3.5' stroke='currentColor' />
      <path d='m16.7 17.19 5.35 5.34' stroke='currentColor' />
      <path d='m16.7 22.53 5.35-5.34' stroke='currentColor' />
      <path d='M13.51 18.64v-3.98' stroke='currentColor' />
    </svg>
  )
}
