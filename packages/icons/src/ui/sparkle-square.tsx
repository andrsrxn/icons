import type { Icon } from './types'

export const IconSparkleSquare: Icon = ({
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
      data-slot='icon-ui-sparkle-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.4 2.6c3.76 0 5.65 0 6.82 1.18 1.17 1.17 1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.78c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17zm-.07 7c-.65-.59-.97-.88-1.36-.88s-.72.3-1.35.9l-1.07 1c-.73.7-1.1 1.03-1.1 1.47s.37.78 1.1 1.46l1.07.99c.64.59.96.88 1.35.88.38 0 .7-.28 1.35-.86l1.1-1c.77-.68 1.15-1.03 1.15-1.47s-.38-.8-1.14-1.49z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M12 6.53C12 9.15 9.17 12 6.53 12' stroke='currentColor' />
      <path d='M12 6.53C12 9.16 14.84 12 17.47 12' stroke='currentColor' />
      <path d='M12 17.47C12 14.89 9.15 12 6.53 12' stroke='currentColor' />
      <path d='M12 17.47c0-2.62 2.88-5.47 5.47-5.47' stroke='currentColor' />
      <path
        d='M2.6 13.4v-2.8c0-3.76 0-5.65 1.18-6.82 1.17-1.17 3.06-1.17 6.83-1.17h2.78c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
