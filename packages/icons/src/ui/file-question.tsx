import type { Icon } from './types'

export const IconFileQuestion: Icon = ({
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
      data-slot='icon-ui-file-question'
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
        d='M20.08 12.02v-.95c0-1.66 0-2.5-.31-3.24-.32-.74-.91-1.32-2.1-2.49l-.59-.56-.84-.84c-.97-.97-1.46-1.46-2.06-1.75l-.46-.2c-.63-.2-1.31-.2-2.69-.2-3.15 0-4.73 0-5.82.84a4 4 0 0 0-.7.7c-.84 1.08-.84 2.66-.84 5.82v5.75c0 3.13 0 4.7.82 5.77a4 4 0 0 0 .74.74c1.08.83 2.64.83 5.77.83'
        stroke='currentColor'
      />
      <path d='M13.1 2.3v2.47c0 1.88 0 2.83.58 3.41s1.53.59 3.41.6h2.48' stroke='currentColor' />
      <path
        d='M14.14 16.27c0-.99.86-1.79 1.92-1.79 1.05 0 1.91.8 1.91 1.79 0 1.56-1.91 1.67-1.91 3.14'
        stroke='currentColor'
      />
      <path
        d='M16.46 22.2a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
