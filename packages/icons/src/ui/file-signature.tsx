import type { Icon } from './types'

export const IconFileSignature: Icon = ({
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
      data-slot='icon-ui-file-signature'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.67 22.24c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82V9.7c0-3.74 0-5.6 1.15-6.77 1.16-1.17 3.03-1.2 6.77-1.23l1.7-.02V8.5h6.8v5.74c0 3.77 0 5.65-1.18 6.82-1.17 1.18-3.06 1.18-6.83 1.18z'
        fill='currentColor'
      />
      <path
        d='M20.08 12.94v-1.87c0-1.66 0-2.5-.31-3.24-.32-.74-.91-1.32-2.1-2.49l-.59-.56-.84-.84c-.97-.97-1.46-1.46-2.06-1.75l-.46-.2c-.63-.2-1.31-.2-2.69-.2-3.15 0-4.73 0-5.82.84a4 4 0 0 0-.7.7c-.84 1.08-.84 2.66-.84 5.82v7.3c0 1.66 0 2.5.24 3.16A4 4 0 0 0 6.3 22c.67.25 1.5.25 3.17.25'
        stroke='currentColor'
      />
      <path d='M13.1 2.3v2.47c0 1.88 0 2.83.58 3.41s1.53.59 3.41.6h2.48' stroke='currentColor' />
      <path
        d='M13.17 21.41a7 7 0 0 0 1.45-2.26m0 0a7 7 0 0 0 .72-3.14c-.15-2.21-1.06-2.81-1.87-2.78-.8.02-2 1.37-.56 4a5 5 0 0 0 1.71 1.92m0 0c.87.5 1.66.35 2.1.12.74-.37 1.27-1.5 1.07-2.44.13.6.95 1.93 1.99 1.67 1.04-.27 1.13-1.49.87-1.95'
        stroke='currentColor'
      />
      <path d='m22.19 21.04-4.72.8' stroke='currentColor' />
    </svg>
  )
}
