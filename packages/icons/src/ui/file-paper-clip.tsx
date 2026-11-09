import type { Icon } from './types'

export const IconFilePaperClip: Icon = ({
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
      data-slot='icon-ui-file-paper-clip'
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
        d='M20.08 11.05c0-1.64 0-2.46-.3-3.2l-.02-.04c-.32-.73-.9-1.3-2.08-2.45l-.6-.58-.84-.84c-.97-.97-1.46-1.46-2.06-1.75l-.46-.2c-.63-.2-1.31-.2-2.69-.2-3.15 0-4.73 0-5.82.84a4 4 0 0 0-.7.7c-.84 1.08-.84 2.66-.84 5.82v6.47c0 2.44 0 3.66.51 4.58a4 4 0 0 0 1.53 1.52c.9.52 2.13.52 4.57.52'
        stroke='currentColor'
      />
      <path d='M13.1 2.3v2.47c0 1.88 0 2.83.58 3.41s1.53.59 3.41.6h2.48' stroke='currentColor' />
      <path
        d='M17.31 17.44v3.34a1.46 1.46 0 1 0 2.92 0v-3.46a2.92 2.92 0 0 0-5.84 0v4.92'
        stroke='currentColor'
      />
    </svg>
  )
}
