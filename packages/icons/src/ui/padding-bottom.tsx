import type { Icon } from './types'

export const IconPaddingBottom: Icon = ({
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
      data-slot='icon-ui-padding-bottom'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.62 16.95h18.75l-.01.76a4 4 0 0 1-3.65 3.65c-.17.02-.37.02-.77.02h-9.9c-.4 0-.6 0-.76-.02a4 4 0 0 1-3.65-3.65z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.38 2.62h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.77c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17'
        stroke='currentColor'
      />
      <path d='M6.01 16.95h2.1' stroke='currentColor' />
      <path d='M17.98 16.95h-2.1' stroke='currentColor' />
      <path d='M11.05 16.9h1.85' stroke='currentColor' />
    </svg>
  )
}
