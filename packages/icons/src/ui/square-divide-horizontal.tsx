import type { Icon } from './types'

export const IconSquareDivideHorizontal: Icon = ({
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
      data-slot='icon-ui-square-divide-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.06 3.2c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.06-1.17 6.83v1.58c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.59c3.77 0 5.65 0 6.83-1.17s1.17-3.06 1.17-6.83v-1.58c0-3.77 0-5.66-1.17-6.83C18.3 3.2 16.42 3.2 12.65 3.2z'
        fill='currentColor'
      />
      <path
        d='M20.65 11.2v1.6c0 3.76 0 5.65-1.17 6.82-1.18 1.17-3.06 1.17-6.83 1.17h-1.59c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.58c0-3.77 0-5.66 1.17-6.83S7.3 3.2 11.06 3.2h1.59c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83'
        stroke='currentColor'
      />
      <path d='M22.27 12.17H1.58' stroke='currentColor' />
    </svg>
  )
}
